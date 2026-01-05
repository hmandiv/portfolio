/* =========================================================
   HR Mandiv — Portfolio Script
   Goals:
   - Data-driven content (edit ONE object: DATA)
   - Accessible nav + active section highlighting
   - Dark mode toggle w/ localStorage
   - Projects: manual featured + GitHub public API repos
   - Graceful fallback on rate limit / fetch failures
   - Subtle reveals; respects prefers-reduced-motion
   ========================================================= */

document.documentElement.classList.remove("no-js");

/* ----------------------------
   1) EDIT CONTENT HERE (DATA)
   ----------------------------

   ✅ How to add a new project:
   - Add an object to DATA.featuredProjects (recommended for best presentation)
   - OR rely on auto-loaded GitHub repos

   ✅ How to add experience:
   - Add a new object to DATA.experience
   - Keep bullets concise and impact-focused (results + scope + tech)

   ✅ How to add education:
   - Add a new object to DATA.education

*/
const DATA = {
  person: {
    name: "HR Mandiv",
    role: "Software Developer",
    tagline: "Building clean, fast, accessible web apps.",
    subtitle:
      "I ship modern front-end experiences with reliable logic, thoughtful architecture, and performance in mind.",
    location: "New York / Toronto",
    focus: "Front-end + full-stack web",
    strengths: "Clean architecture • Testing • Performance",
    githubUsername: "hmandiv",
    email: "you@example.com", // <-- CHANGE THIS
    links: [
      { label: "GitHub", href: "https://github.com/hmandiv" },
      // { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle/" },
      // { label: "X", href: "https://x.com/your-handle" },
      // { label: "Resume (PDF)", href: "./resume.pdf" },
    ],
    heroBadges: [
      "Accessible UI",
      "TypeScript + React",
      "APIs + Databases",
      "Testing mindset",
    ],
  },

  about: {
    subtitle:
      "I build user-focused products with clean code and clear UX — and I’m looking for roles where I can ship and grow.",
    paragraphs: [
      "I’m a software developer with experience building web apps end-to-end: UI, APIs, and data. I care about code quality, accessibility, and performance — the stuff that makes products feel trustworthy.",
      "I like projects where the requirements are real, the feedback loop is tight, and the result is something people actually use. I’m strongest when I can combine clean UI with solid underlying logic (and tests where it counts).",
      "Right now I’m focused on sharpening my front-end craft and building portfolio projects that look and behave like production software.",
    ],
    checklist: [
      "Responsive, accessible UI (keyboard-first, semantic HTML, focus states)",
      "Maintainable architecture (data-driven views, clear boundaries)",
      "Performance basics (fast load, minimal JS, good UX defaults)",
      "Testing and debugging mindset (reliable changes, fewer regressions)",
    ],
  },

  skills: [
    {
      group: "Front-end",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Accessibility (a11y)",
      ],
    },
    {
      group: "Back-end",
      items: [
        "Node.js",
        "Express",
        "REST APIs",
        "Auth basics (JWT)",
        "PostgreSQL / SQL",
      ],
    },
    {
      group: "Engineering",
      items: [
        "Git/GitHub",
        "Testing basics",
        "Performance",
        "Clean architecture",
        "CI/CD basics",
      ],
    },
  ],

  featuredProjects: [
    // Add your best 2–4 projects here. Keep it employer-friendly: problem → solution → impact.
    {
      title: "Token Dashboard / DeFi Hub (Algorand)",
      description:
        "Token listing + details pages with charts, liquidity data, and wallet integrations. Focus on data correctness and UI polish.",
      tags: ["React", "TypeScript", "APIs", "Charts"],
      ctas: [
        {
          label: "Live Demo",
          href: "https://algoadoptairdrop.vercel.app/",
          kind: "primary",
        },
      ],
      highlights: [
        "Token stats visualization",
        "API integration",
        "Performance-focused UI",
      ],
    },
  ],

  experience: [
    // Example structure — replace with your real roles.
    {
      role: "Full-Stack Developer",
      company: "Your Company",
      dates: "2021 — 2024",
      location: "Remote / On-site",
      bullets: [
        "Built and maintained customer-facing features with a focus on accessibility and performance.",
        "Collaborated with product/design to ship iterative improvements with measurable impact.",
        "Improved reliability by refactoring key flows and adding test coverage where it mattered most.",
      ],
      tech: ["React", "TypeScript", "Node.js", "SQL"],
    },
    // Add more roles here…
  ],

  education: [
    {
      title: "B.S. in Computer Science",
      org: "Your University",
      dates: "Year — Year",
      notes: [
        "Core CS fundamentals, web development, and software engineering basics.",
      ],
    },
    // Add more items here…
  ],

  contact: {
    blurb:
      "Email is best. If you’re a recruiter, include the role title, salary band, and timeline.",
    notes: [
      "Open to front-end and full-stack roles.",
      "Strong preference for teams that value code quality and mentoring.",
      "Happy to do a short take-home if it reflects real work.",
    ],
  },

  github: {
    // Repo filtering: change these to fit your profile
    maxRepos: 12,
    excludeForks: true,
    excludeArchived: true,
    excludePrivate: true, // public API only returns public, but keep it explicit
    pinTopicsAsTags: true,
  },
};

/* ----------------------------
   2) DOM Helpers
   ---------------------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else if (k.startsWith("on") && typeof v === "function")
      node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  for (const child of children) {
    node.append(child);
  }
  return node;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = String(str ?? "");
  return div.innerHTML;
}

/* ----------------------------
   3) Theme Toggle (localStorage)
   ---------------------------- */
const THEME_KEY = "portfolio_theme";

function getPreferredTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  // Update meta theme-color for mobile browser chrome
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta)
    meta.setAttribute("content", theme === "dark" ? "#0b1220" : "#f7f8fb");
  const icon = $("#themeToggle .icon");
  if (icon) icon.textContent = theme === "dark" ? "🌙" : "☀️";
}

function initTheme() {
  applyTheme(getPreferredTheme());
  $("#themeToggle")?.addEventListener("click", () => {
    const current =
      document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
}

/* ----------------------------
   4) Mobile Nav Toggle
   ---------------------------- */
function initNavToggle() {
  const btn = $(".nav-toggle");
  const list = $("#nav-links");
  if (!btn || !list) return;

  btn.addEventListener("click", () => {
    const open = list.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });

  // Close after clicking a link (mobile)
  $$(".nav-link", list).forEach((a) => {
    a.addEventListener("click", () => {
      if (list.classList.contains("open")) {
        list.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });
}

/* ----------------------------
   5) Smooth Scrolling + Offset
   (keeps sticky header from covering titles)
   ---------------------------- */
function initSmoothScrollOffset() {
  const headerHeight = () => $(".site-header")?.offsetHeight || 0;

  $$(".nav-link, .brand, a[href^='#']").forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;

      // Let skip link behave normally
      if (a.classList.contains("skip-link")) return;

      e.preventDefault();
      const y =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight() -
        12;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.replaceState(null, "", href);
    });
  });
}

/* ----------------------------
   6) Active Section Highlighting
   ---------------------------- */
function initActiveNav() {
  const links = $$(".nav-link");
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const obs = new IntersectionObserver(
    (entries) => {
      // Pick the entry that is most visible
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      const id = "#" + visible.target.id;
      links.forEach((a) => {
        const active = a.getAttribute("href") === id;
        if (active) a.setAttribute("aria-current", "page");
        else a.removeAttribute("aria-current");
      });
    },
    {
      root: null,
      threshold: [0.2, 0.35, 0.5, 0.65],
      rootMargin: "-30% 0px -55% 0px",
    }
  );

  sections.forEach((s) => obs.observe(s));
}

/* ----------------------------
   7) Reveal Animations (respect reduced motion)
   ---------------------------- */
function initReveals() {
  const reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  const nodes = $$(
    ".section .card, .section .section-head, .hero-copy, .hero-card, .timeline-item"
  );
  nodes.forEach((n) => n.classList.add("reveal"));

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-visible");
        obs.unobserve(e.target);
      });
    },
    { threshold: 0.15 }
  );

  nodes.forEach((n) => obs.observe(n));
}

/* ----------------------------
   8) Render: Hero + About + Skills + Experience + Education + Contact
   ---------------------------- */
function renderStaticSections() {
  // Year + name
  $("#year").textContent = String(new Date().getFullYear());
  $("#footerName").textContent = DATA.person.name;

  // Hero copy
  $("#heroTitle").textContent = DATA.person.tagline;
  $("#heroSubtitle").textContent = DATA.person.subtitle;
  $("#metaLocation").textContent = DATA.person.location;
  $("#metaFocus").textContent = DATA.person.focus;
  $("#metaStrengths").textContent = DATA.person.strengths;

  // Hero badges
  const heroBadges = $("#heroBadges");
  heroBadges.innerHTML = "";
  DATA.person.heroBadges.forEach((b) => {
    heroBadges.append(el("li", { class: "badge", text: b }));
  });

  // About
  $("#aboutSubtitle").textContent = DATA.about.subtitle;
  const about = $("#aboutContent");
  about.innerHTML = "";
  DATA.about.paragraphs.forEach((p) => about.append(el("p", { text: p })));

  const checklist = $("#aboutChecklist");
  checklist.innerHTML = "";
  DATA.about.checklist.forEach((item) => {
    checklist.append(el("li", { text: item }));
  });

  // Skills
  const skillsGrid = $("#skillsGrid");
  skillsGrid.innerHTML = "";
  DATA.skills.forEach((group) => {
    const tags = el(
      "div",
      { class: "tag-row" },
      group.items.map((t) => el("span", { class: "tag", text: t }))
    );
    skillsGrid.append(
      el("div", { class: "card skill-card", role: "listitem" }, [
        el("h3", { text: group.group }),
        tags,
      ])
    );
  });

  // Experience
  const expList = $("#experienceList");
  expList.innerHTML = "";
  DATA.experience.forEach((x) => {
    const bullets = el(
      "ul",
      { class: "timeline-bullets" },
      x.bullets.map((b) => el("li", { text: b }))
    );

    const meta = el("div", { class: "project-meta" }, [
      el("span", { text: x.location || "" }),
      x.tech?.length
        ? el("span", { class: "dot", text: x.tech.join(" · ") })
        : document.createTextNode(""),
    ]);

    expList.append(
      el("li", { class: "card timeline-item" }, [
        el("div", { class: "timeline-top" }, [
          el("div", {}, [
            el("h3", { class: "timeline-role", text: x.role }),
            el("div", { class: "timeline-company", text: x.company }),
          ]),
          el("div", { class: "timeline-dates", text: x.dates }),
        ]),
        meta,
        bullets,
      ])
    );
  });

  // Education
  const edu = $("#educationGrid");
  edu.innerHTML = "";
  DATA.education.forEach((e) => {
    edu.append(
      el("div", { class: "card", role: "listitem" }, [
        el("h3", { class: "project-title", text: e.title }),
        el("p", { class: "muted", text: `${e.org} • ${e.dates}` }),
        ...(e.notes || []).map((n) =>
          el("p", { class: "muted small", text: n })
        ),
      ])
    );
  });

  // Contact
  $("#contactBlurb").textContent = DATA.contact.blurb;

  const contactActions = $("#contactActions");
  contactActions.innerHTML = "";

  // Email CTA
  const safeEmail = DATA.person.email || "you@example.com";
  contactActions.append(
    el("a", {
      class: "btn primary",
      href: `mailto:${safeEmail}`,
      text: "Email me",
    })
  );

  // Social/links
  DATA.person.links.forEach((l) => {
    contactActions.append(
      el("a", {
        class: "btn ghost",
        href: l.href,
        target: "_blank",
        rel: "noreferrer",
        text: l.label,
      })
    );
  });

  const notes = $("#contactNotes");
  notes.innerHTML = "";
  DATA.contact.notes.forEach((n) => notes.append(el("li", { text: n })));

  // Update GitHub button (hero)
  const githubBtn = $("#githubBtn");
  if (githubBtn)
    githubBtn.href = `https://github.com/${DATA.person.githubUsername}`;

  // Update resume/contact button if you later add a resume link
  const resumeLink = DATA.person.links.find((x) =>
    x.label.toLowerCase().includes("resume")
  )?.href;
  const resumeBtn = $("#resumeBtn");
  if (resumeBtn && resumeLink) {
    resumeBtn.href = resumeLink;
    resumeBtn.textContent = "Resume";
    resumeBtn.target = "_blank";
    resumeBtn.rel = "noreferrer";
  }
}

/* ----------------------------
   9) Projects Rendering (Featured + GitHub)
   ---------------------------- */
function normalizeProject(p) {
  return {
    title: p.title || "Untitled",
    description: p.description || "",
    tags: Array.isArray(p.tags) ? p.tags : [],
    ctas: Array.isArray(p.ctas) ? p.ctas : [],
    highlights: Array.isArray(p.highlights) ? p.highlights : [],
    source: p.source || "manual", // manual | github
    meta: p.meta || {},
  };
}

function projectCard(project) {
  const p = normalizeProject(project);

  const tags = el(
    "div",
    { class: "tag-row" },
    (p.tags || []).slice(0, 6).map((t) => el("span", { class: "tag", text: t }))
  );

  const actions = el(
    "div",
    { class: "project-actions" },
    (p.ctas || []).slice(0, 3).map((c) => {
      const kind =
        c.kind === "primary"
          ? "btn primary"
          : c.kind === "ghost"
          ? "btn ghost"
          : "btn";
      const isExternal = /^https?:\/\//.test(c.href);
      return el("a", {
        class: kind + " small",
        href: c.href,
        text: c.label,
        ...(isExternal ? { target: "_blank", rel: "noreferrer" } : {}),
      });
    })
  );

  const metaParts = [];
  if (p.source === "github") {
    if (p.meta.language) metaParts.push(p.meta.language);
    if (typeof p.meta.stars === "number") metaParts.push(`★ ${p.meta.stars}`);
    if (typeof p.meta.forks === "number") metaParts.push(`⑂ ${p.meta.forks}`);
  }
  const meta = metaParts.length
    ? el("div", { class: "project-meta" }, [
        el("span", { text: metaParts.join(" · ") }),
      ])
    : el("div", { class: "project-meta" }, []);

  const highlights = p.highlights?.length
    ? el(
        "ul",
        { class: "bullets small" },
        p.highlights.slice(0, 3).map((h) => el("li", { text: h }))
      )
    : null;

  return el("article", { class: "card project-card", role: "listitem" }, [
    el("div", { class: "project-top" }, [
      el("h3", { class: "project-title", text: p.title }),
      el("p", { class: "project-desc", text: p.description }),
      meta,
    ]),
    tags,
    highlights || document.createTextNode(""),
    actions,
  ]);
}

function renderProjects(allProjects) {
  const grid = $("#projectsGrid");
  grid.innerHTML = "";

  const normalized = allProjects.map(normalizeProject);

  // Build tag filter options
  const select = $("#projectTagFilter");
  const tags = new Set();
  normalized.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  const sortedTags = Array.from(tags).sort((a, b) => a.localeCompare(b));
  select.innerHTML =
    `<option value="all">All</option>` +
    sortedTags
      .map((t) => `<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`)
      .join("");

  // Filtering
  const search = $("#projectSearch");
  function applyFilter() {
    const q = (search.value || "").trim().toLowerCase();
    const tag = select.value;

    grid.innerHTML = "";
    const filtered = normalized.filter((p) => {
      const matchesText =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      const matchesTag = tag === "all" || p.tags.includes(tag);
      return matchesText && matchesTag;
    });

    if (!filtered.length) {
      grid.append(
        el("div", { class: "card", role: "listitem" }, [
          el("h3", { class: "project-title", text: "No matches" }),
          el("p", {
            class: "muted",
            text: "Try a different search term or select another tag.",
          }),
        ])
      );
      return;
    }

    filtered.forEach((p) => grid.append(projectCard(p)));
  }

  search.addEventListener("input", applyFilter);
  select.addEventListener("change", applyFilter);

  applyFilter();
}

/* ----------------------------
   10) GitHub API Loading + Fallback
   ---------------------------- */
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
      JSON.stringify({ ts: Date.now(), data })
    );
  } catch {
    // ignore
  }
}

function githubRepoToProject(repo) {
  // "topics" requires a preview header in older APIs; nowadays it often works with the standard Accept
  const topics = Array.isArray(repo.topics) ? repo.topics : [];
  const tags = [];

  if (DATA.github.pinTopicsAsTags) {
    topics.slice(0, 6).forEach((t) => tags.push(t));
  }

  // Use language if present (and not already in tags)
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
      { label: "Code", href: repo.html_url, kind: "primary" },
      repo.homepage
        ? { label: "Live", href: repo.homepage, kind: "ghost" }
        : null,
    ].filter(Boolean),
    highlights: [],
  };
}

async function fetchGithubRepos(username) {
  const url = `https://api.github.com/users/${encodeURIComponent(
    username
  )}/repos?per_page=100&sort=updated`;
  const res = await fetch(url, {
    headers: {
      // Include topics when possible (GitHub now often includes them; harmless if ignored)
      Accept: "application/vnd.github+json",
    },
  });

  // Rate limit / forbidden
  if (res.status === 403) {
    const remaining = res.headers.get("X-RateLimit-Remaining");
    const reset = res.headers.get("X-RateLimit-Reset");
    const msg = {
      kind: "rate_limit",
      remaining,
      reset: reset ? new Date(Number(reset) * 1000) : null,
    };
    throw Object.assign(new Error("GitHub rate limit / forbidden"), msg);
  }

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const data = await res.json();
  if (!Array.isArray(data)) throw new Error("Unexpected GitHub response.");
  return data;
}

function filterRepos(repos) {
  return repos
    .filter((r) => (DATA.github.excludeForks ? !r.fork : true))
    .filter((r) => (DATA.github.excludeArchived ? !r.archived : true))
    .filter((r) => (DATA.github.excludePrivate ? !r.private : true))
    .filter((r) => !r.disabled)
    .slice(0, DATA.github.maxRepos);
}

function updateGithubStatus(text, tone = "neutral") {
  const pill = $("#githubStatus");
  if (!pill) return;
  pill.textContent = text;
  // Keep it subtle; you can add tone-based styling later if desired
}

function setGithubNote(text) {
  const node = $("#githubNote");
  if (!node) return;
  node.textContent = text;
}

async function loadProjects() {
  const username = DATA.person.githubUsername;

  // Start with featured projects
  const manual = (DATA.featuredProjects || []).map((p) => ({
    ...p,
    source: "manual",
  }));

  // Attempt GitHub fetch
  updateGithubStatus("Loading GitHub repos…");
  setGithubNote("");

  // If cache exists, we can render immediately while fetching fresh
  const cached = readGithubCache(username);
  let ghProjects = [];
  if (cached) {
    ghProjects = cached.map(githubRepoToProject);
    updateGithubStatus("GitHub repos loaded (cached)");
  }

  // Initial render (manual + cached)
  renderProjects([...manual, ...ghProjects]);

  try {
    const repos = await fetchGithubRepos(username);
    const filtered = filterRepos(repos);
    writeGithubCache(username, filtered);

    ghProjects = filtered.map(githubRepoToProject);
    updateGithubStatus("GitHub repos loaded");
    setGithubNote(
      "Showing featured projects + your most recently updated public repos."
    );
    renderProjects([...manual, ...ghProjects]);
  } catch (err) {
    // If rate-limited, keep cached if we have it; otherwise show manual only
    const hasCached = Boolean(cached && cached.length);
    if (err?.kind === "rate_limit") {
      updateGithubStatus(
        hasCached ? "GitHub rate-limited (using cached)" : "GitHub rate-limited"
      );
      const resetText = err.reset
        ? ` Rate limit resets at ${err.reset.toLocaleString()}.`
        : "";
      setGithubNote(
        hasCached
          ? `GitHub API rate limit hit.${resetText} Showing cached repos.`
          : `GitHub API rate limit hit.${resetText} Showing featured projects only.`
      );
    } else {
      updateGithubStatus(
        hasCached ? "GitHub unavailable (using cached)" : "GitHub unavailable"
      );
      setGithubNote(
        hasCached
          ? "Could not refresh GitHub repos right now. Showing cached repos."
          : "Could not load GitHub repos right now. Showing featured projects only."
      );
    }

    renderProjects([
      ...manual,
      ...(hasCached ? cached.map(githubRepoToProject) : []),
    ]);
  }
}

/* ----------------------------
   11) Boot
   ---------------------------- */
function boot() {
  initTheme();
  initNavToggle();
  initSmoothScrollOffset();
  initActiveNav();
  renderStaticSections();
  initReveals();
  loadProjects();
}

document.addEventListener("DOMContentLoaded", boot);
