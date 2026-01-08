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
    // ignore
  }
}

function githubRepoToProject(repo) {
  const topics = Array.isArray(repo.topics) ? repo.topics : [];
  const tags = [];

  if (DATA.github.pinTopicsAsTags)
    topics.slice(0, 6).forEach((t) => tags.push(t));
  if (repo.language && !tags.includes(repo.language))
    tags.unshift(repo.language);

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
    headers: { Accept: "application/vnd.github+json" },
  });

  if (res.status === 403) {
    const reset = res.headers.get("X-RateLimit-Reset");
    throw Object.assign(new Error("rate_limit"), {
      kind: "rate_limit",
      reset: reset ? new Date(Number(reset) * 1000) : null,
    });
  }

  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

  const data = await res.json();
  if (!Array.isArray(data)) throw new Error("Unexpected GitHub response");
  return data;
}

function filterRepos(repos) {
  const excluded = new Set(
    (DATA.github.excludeNames || []).map((n) => n.toLowerCase()),
  );
  return repos
    .filter((r) => (DATA.github.excludeForks ? !r.fork : true))
    .filter((r) => (DATA.github.excludeArchived ? !r.archived : true))
    .filter((r) => (DATA.github.excludePrivate ? !r.private : true))
    .filter((r) => !r.disabled)
    .filter((r) => !excluded.has(String(r.name || "").toLowerCase()))
    .slice(0, DATA.github.maxRepos);
}

function updateGithubStatus(text) {
  $("#githubStatus") && ($("#githubStatus").textContent = text);
}
function setGithubNote(text) {
  $("#githubNote") && ($("#githubNote").textContent = text);
}

export async function loadProjects() {
  const username = DATA.person.githubUsername;

  const featured = (DATA.featuredProjects || []).map((p) => ({
    ...p,
    source: "manual",
  }));

  updateGithubStatus("Loading GitHub repos…");
  setGithubNote("");

  // render cached fast
  const cached = readGithubCache(username);
  const cachedProjects = cached ? cached.map(githubRepoToProject) : [];
  if (cachedProjects.length) updateGithubStatus("GitHub repos loaded (cached)");

  renderProjects([...featured, ...cachedProjects]);

  try {
    const repos = await fetchGithubRepos(username);
    const filtered = filterRepos(repos);
    writeGithubCache(username, filtered);

    updateGithubStatus("GitHub repos loaded");
    setGithubNote(
      "Showing featured projects + most recently updated public repos.",
    );
    renderProjects([...featured, ...filtered.map(githubRepoToProject)]);
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
