document.documentElement.classList.remove("no-js");

const DATA = {
  person: {
    name: "HR Mandiv",
    role: "Software Developer (Full-Stack)",
    tagline: "Building clean, fast, accessible web apps.",
    subtitle:
      "Software Developer with 3+ years of professional experience building production APIs, microservices, and modern front-end applications. Currently a research-based developer pursuing a Master’s in Digital Humanities.",
    location: "Ontario, Canada",
    focus: "Front-end + APIs + Web3 integrations",
    strengths: "Clean UI • Reliable APIs • Performance • Collaboration",
    githubUsername: "hmandiv",
    email: "mandivcei@gmail.com",
    phone: "929-623-5476",
    links: [
      { label: "GitHub", href: "https://github.com/hmandiv" },
      { label: "Referral App", href: "https://algoadoptairdrop.vercel.app" },
      // { label: "Resume (PDF)", href: "./resume.pdf" },
    ],
    heroBadges: [
      "C# + SQL APIs",
      "Angular + React UI",
      "Algorand integrations",
      "Performance-minded",
    ],
  },

  about: {
    subtitle:
      "I build robust APIs and polished front-end experiences — and I’m focused on roles where quality and shipping matter.",
    paragraphs: [
      "I’m a detail-oriented software developer with 3+ years of professional full-stack experience. I’ve built and maintained APIs/microservices in C# with SQL Server, and delivered responsive Angular front-ends that streamline real business workflows.",
      "I’m also hands-on with modern JavaScript/TypeScript stacks (React + Node/Express) and have built projects integrating Algorand payments, wallet flows (Pera Wallet), and atomic transaction patterns.",
      "My strengths are clean implementation, strong collaboration, and improving system performance — from optimizing queries to structuring front-end components for maintainability.",
    ],
    checklist: [
      "Robust REST APIs + microservices (C#, Node/Express)",
      "Modern front-end UI (Angular, React) with strong UX",
      "Performance improvements (SQL/query optimization, parallel API calls)",
      "Blockchain integrations (Algorand, wallet flows, atomic transactions)",
    ],
  },

  skills: [
    {
      group: "Languages & Frameworks",
      items: [
        "C#",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Express",
        "React",
        "Angular",
      ],
    },
    {
      group: "Blockchain",
      items: [
        "Algorand",
        "Atomic Transactions",
        "Wallet Integrations (Pera Wallet)",
      ],
    },
    {
      group: "Data",
      items: ["Microsoft SQL Server", "SQL", "Firebase (NoSQL)"],
    },
    {
      group: "Tools & Platforms",
      items: ["Git", "Docker", "Postman", "Visual Studio", "VS Code"],
    },
    {
      group: "Engineering",
      items: [
        "REST API Design",
        "Microservices",
        "Auth (Firebase Auth)",
        "UX/UI mindset",
        "Promise.all patterns",
      ],
    },
  ],

  featuredProjects: [
    {
      title: "Simple Gaming Platforms (React + Node.js + Algorand)",
      description:
        "Multiple lightweight web games with in-app Algorand blockchain payments, wallet integration, and real-time score tracking.",
      tags: ["React", "Node.js", "Algorand", "Wallet Integration"],
      highlights: [
        "Algorand payments + wallet flow",
        "Authentication + user flows",
        "Responsive UI + game interactions",
      ],
    },
    {
      title: "Full-Stack Referral App (React + Express + Firebase + Algorand)",
      description:
        "A full referral platform with a 5-level system, wallet + email auth, portfolio dashboard, and blockchain payment verification via a Node/Express API.",
      tags: ["React", "Express", "Firebase", "Algorand", "APIs"],
      ctas: [
        {
          label: "Live",
          href: "https://algoadoptairdrop.vercel.app",
          kind: "primary",
        },
        { label: "Code", href: "https://github.com/hmandiv", kind: "ghost" },
      ],
      highlights: [
        "Aggregated DeFi token data using Promise.all",
        "Wallet balances + portfolio visualization",
        "Atomic transactions + batching for secure operations",
      ],
    },
  ],

  experience: [
    {
      role: "Research-Based Developer (Graduate Studies)",
      company: "CUNY Graduate Center",
      dates: "2026 — Present",
      location: "New York, USA",
      bullets: [
        "Developing research-driven software projects as part of a Master’s program in Digital Humanities.",
        "Applying software engineering principles to data-driven research, digital archives, and interactive web-based tools.",
        "Combining front-end development, data modeling, and computational methods to explore humanities-focused research questions.",
        "Continuing hands-on development while strengthening analytical, documentation, and research skills.",
      ],
      tech: [
        "JavaScript",
        "TypeScript",
        "Web Development",
        "Data Modeling",
        "Research Computing",
      ],
    },
    {
      role: "Software Developer",
      company: "LBMX Inc.",
      dates: "Jan 2020 — Oct 2023",
      location: "Ontario, Canada",
      bullets: [
        "Designed and implemented production APIs and microservices using C# and Microsoft SQL Server to support core business workflows.",
        "Built modern, responsive Angular front-end interfaces that improved usability and reduced friction in internal and customer-facing tools.",
        "Integrated RESTful APIs with front-end components, ensuring reliable data flow and consistent user interactions across features.",
        "Optimized SQL queries and stored procedures, improving data retrieval performance and reducing response times in high-traffic areas.",
        "Collaborated closely with cross-functional teams (product, QA, other developers) and participated in code reviews to maintain code quality and best practices.",
      ],
      tech: [
        "C#",
        "SQL Server",
        "Angular",
        "REST APIs",
        "Microservices",
        "Git",
      ],
    },
  ],

  education: [
    {
      title: "Master’s Studies in Digital Humanities (Research-Based)",
      org: "CUNY Graduate Center",
      dates: "2024 — Present",
      notes: [
        "Research-focused program combining software development, data analysis, and humanities-driven computation.",
      ],
    },
    {
      title: "B.S. (Honors) in Computer Science",
      org: "Algoma University",
      dates: "Completed",
      notes: [
        "Relevant coursework: Data Structures & Algorithms, Database Systems, Software Engineering, Web Development, Blockchain Fundamentals.",
      ],
    },
  ],

  contact: {
    blurb:
      "Email is best. If you’re reaching out about a role, include the title, tech stack, and timeline.",
    notes: [
      "Open to front-end and full-stack roles.",
      "Strong in API + UI integration and performance-minded delivery.",
      "Comfortable with web3/Algorand wallet flows in production-style apps.",
    ],
  },

  github: {
    maxRepos: 12,
    excludeForks: true,
    excludeArchived: true,
    excludePrivate: true,
    pinTopicsAsTags: true,

    // NEW: exclude certain repos from showing up
    excludeNames: ["ecommerce-project"],
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

  if (DATA.person.phone) {
    const tel = DATA.person.phone.replace(/[^\d+]/g, "");
    contactActions.append(
      el("a", {
        class: "btn",
        href: `tel:${tel}`,
        text: `Call: ${DATA.person.phone}`,
      })
    );
  }

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
  const excluded = new Set(
    (DATA.github.excludeNames || []).map((n) => n.toLowerCase())
  );

  return repos
    .filter((r) => (DATA.github.excludeForks ? !r.fork : true))
    .filter((r) => (DATA.github.excludeArchived ? !r.archived : true))
    .filter((r) => (DATA.github.excludePrivate ? !r.private : true))
    .filter((r) => !r.disabled)
    .filter((r) => !excluded.has(String(r.name || "").toLowerCase()))
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
    setGithubNote("Showing projects + most recently updated public repos.");
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
