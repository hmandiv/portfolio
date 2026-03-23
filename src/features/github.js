import { $ } from "../lib/dom.js";
import { DATA } from "../data.js";
import { renderProjects } from "../render/projects.js";

const githubCacheKey = (user) => `gh_repos_cache_${user}`;
const githubCacheTTLms = 1000 * 60 * 60 * 6; // 6 hours

function readGithubCache(user) {
  try {
    const raw = localStorage.getItem(githubCacheKey(user));
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (!parsed?.ts || !Array.isArray(parsed?.data)) return null;
    if (Date.now() - parsed.ts > githubCacheTTLms) return null;

    return parsed.data;
  } catch {
    return null;
  }
}

function writeGithubCache(user, data) {
  try {
    localStorage.setItem(
      githubCacheKey(user),
      JSON.stringify({ ts: Date.now(), data }),
    );
  } catch {
    // ignore cache write failures
  }
}

function githubRepoToProject(repo) {
  const topics = Array.isArray(repo.topics) ? repo.topics : [];
  const tags = [];

  if (DATA.github?.pinTopicsAsTags) {
    topics.slice(0, 6).forEach((topic) => tags.push(topic));
  }

  if (repo.language && !tags.includes(repo.language)) {
    tags.unshift(repo.language);
  }

  return {
    title: repo.name,
    description: repo.description || "Public GitHub repository.",
    tags: tags.length ? tags : ["GitHub Repo"],
    source: "github",
    meta: {
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
    },
    ctas: [
      repo.homepage
        ? { label: "Live", href: repo.homepage, kind: "primary" }
        : null,
      {
        label: "Code",
        href: repo.html_url,
        kind: repo.homepage ? "ghost" : "primary",
      },
    ].filter(Boolean),
  };
}

async function fetchGithubRepos(username) {
  const url = `https://api.github.com/users/${encodeURIComponent(
    username,
  )}/repos?per_page=100&sort=updated`;

  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (res.status === 403) {
    const reset = res.headers.get("X-RateLimit-Reset");
    throw Object.assign(new Error("rate_limit"), {
      kind: "rate_limit",
      reset: reset ? new Date(Number(reset) * 1000) : null,
    });
  }

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const data = await res.json();
  if (!Array.isArray(data)) {
    throw new Error("Unexpected GitHub response");
  }

  return data;
}

function filterRepos(repos) {
  const excluded = new Set(
    (DATA.github?.excludeNames || []).map((name) => String(name).toLowerCase()),
  );

  const maxRepos =
    typeof DATA.github?.maxRepos === "number" ? DATA.github.maxRepos : 0;

  return repos
    .filter((repo) => (DATA.github?.excludeForks ? !repo.fork : true))
    .filter((repo) => (DATA.github?.excludeArchived ? !repo.archived : true))
    .filter((repo) => (DATA.github?.excludePrivate ? !repo.private : true))
    .filter((repo) => !repo.disabled)
    .filter((repo) => !excluded.has(String(repo.name || "").toLowerCase()))
    .slice(0, maxRepos);
}

function updateGithubStatus(text) {
  const el = $("#githubStatus");
  if (el) el.textContent = text;
}

function setGithubNote(text) {
  const el = $("#githubNote");
  if (el) el.textContent = text;
}

function getFeaturedProjects() {
  return (DATA.featuredProjects || []).map((project) => ({
    ...project,
    source: "manual",
  }));
}

function shouldShowRecentRepos() {
  return Boolean(DATA.github?.showRecentRepos);
}

function renderFeaturedOnly() {
  renderProjects(getFeaturedProjects());
}

function renderFeaturedPlusRepos(repos) {
  const featured = getFeaturedProjects();
  const repoProjects = repos.map(githubRepoToProject);
  renderProjects([...featured, ...repoProjects]);
}

export async function loadProjects() {
  const username = DATA.person.githubUsername;
  const showRecentRepos = shouldShowRecentRepos();

  if (!showRecentRepos) {
    updateGithubStatus("Showing featured projects");
    setGithubNote("Only curated featured projects are shown.");
    renderFeaturedOnly();
    return;
  }

  const featured = getFeaturedProjects();

  updateGithubStatus("Loading GitHub repos…");
  setGithubNote("");

  const cached = readGithubCache(username);
  const cachedProjects = cached ? cached.map(githubRepoToProject) : [];

  if (cachedProjects.length) {
    updateGithubStatus("GitHub repos loaded (cached)");
    setGithubNote("Showing featured projects + selected GitHub repos.");
    renderProjects([...featured, ...cachedProjects]);
  } else {
    renderProjects(featured);
  }

  try {
    const repos = await fetchGithubRepos(username);
    const filtered = filterRepos(repos);

    writeGithubCache(username, filtered);

    updateGithubStatus("GitHub repos loaded");
    setGithubNote("Showing featured projects + selected GitHub repos.");
    renderFeaturedPlusRepos(filtered);
  } catch (err) {
    const hasCached = cachedProjects.length > 0;

    if (err?.kind === "rate_limit") {
      updateGithubStatus(
        hasCached
          ? "GitHub rate-limited (using cached)"
          : "GitHub rate-limited",
      );

      const resetText = err.reset
        ? ` Rate limit resets at ${err.reset.toLocaleString()}.`
        : "";

      setGithubNote(
        hasCached
          ? `GitHub rate limit hit.${resetText} Showing cached repos.`
          : `GitHub rate limit hit.${resetText} Showing featured projects only.`,
      );
    } else {
      updateGithubStatus(
        hasCached ? "GitHub unavailable (using cached)" : "GitHub unavailable",
      );

      setGithubNote(
        hasCached
          ? "Could not refresh GitHub repos right now. Showing cached repos."
          : "Could not load GitHub repos right now. Showing featured projects only.",
      );
    }

    renderProjects([...featured, ...(hasCached ? cachedProjects : [])]);
  }
}
