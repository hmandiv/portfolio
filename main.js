document.documentElement.classList.remove("no-js");

/* =========================================================
   0) DATA
   =========================================================
   Add projects/experience/education here.
   Featured projects show first; GitHub repos auto-load after.
*/
const DATA = {
  person: {
    name: "HR Mandiv",
    role: "Software Developer (Full-Stack)",
    tagline: "Building clean, fast, accessible web apps.",
    subtitle:
      "Software Developer with 3+ years of professional experience building and maintaining production APIs, front-end systems, and end-to-end features. Currently a research-based developer pursuing a Master’s in Digital Humanities.",
    location: "Ontario, Canada",
    focus: "Front-end + APIs + Web3 integrations",
    strengths: "Clean UI • Reliable APIs • Performance • Collaboration",
    githubUsername: "hmandiv",
    email: "mandivcei@gmail.com",
    phone: "929-623-5476",
    links: [{ label: "GitHub", href: "https://github.com/hmandiv" }],
    heroBadges: [
      "C# + SQL APIs",
      "React UI",
      "Algorand integrations",
      "Performance-minded",
    ],
  },

  about: {
    subtitle:
      "I build robust APIs and polished front-end experiences — and I’m focused on roles where quality and shipping matter.",
    paragraphs: [
      "I’m a detail-oriented software developer with 3+ years of professional full-stack experience. I’ve built and maintained APIs/microservices in C# with SQL Server, and delivered responsive Angular front-ends that support real business workflows.",
      "I’m also hands-on with modern JavaScript/TypeScript stacks (React + Node/Express) and have built projects integrating Algorand payments, wallet flows (Pera Wallet), and atomic transaction patterns.",
      "My strengths are clean implementation, strong collaboration, and improving system performance — from query optimization to structured, maintainable UI components.",
    ],
    checklist: [
      "Robust REST APIs + microservices (C#, Node/Express)",
      "Modern front-end UI (React) with strong UX",
      "Performance improvements (SQL optimization, parallel API calls)",
      "Blockchain integrations (Algorand, wallet flows, atomic transactions)",
    ],
  },

  skills: [
    // Skills tuned for both React-heavy and Full-stack scans
    {
      group: "Front-End",
      items: [
        "React",
        "TypeScript",
        "JavaScript",
        "Component architecture",
        "Accessibility",
        "Performance",
      ],
    },
    {
      group: "Full-Stack",
      items: [
        "Node.js",
        "Express",
        "C#",
        "REST APIs",
        "Microservices",
        "Auth flows",
      ],
    },
    { group: "Data", items: ["SQL Server", "SQL", "Firebase (NoSQL)"] },
    {
      group: "Blockchain",
      items: ["Algorand", "Atomic transactions", "Pera Wallet integration"],
    },
    {
      group: "Engineering Practices",
      items: [
        "Domain modeling (DDD-lite): entities, commands, selectors",
        "Functional core / imperative shell (pure logic first)",
        "Immutability + reducer-style state transitions",
        "Derived state + single source of truth",
        "Testing pyramid (unit/integration/E2E)",
        "User-centric + accessibility-first testing",
        "Performance patterns (parallel I/O with Promise.all)",
        "Code review and maintainable architecture",
      ],
    },
    {
      group: "Tools",
      items: ["Git", "Docker", "Postman", "VS Code", "Visual Studio"],
    },
  ],

  featuredProjects: [
    // MINI CASE STUDY #1
    {
      title: "Full-Stack Referral App",
      description:
        "Secure email/wallet onboarding, 5-level referrals, portfolio dashboard, DeFi API aggregation, and on-chain payment verification (Algorand).",
      tags: ["React", "Express", "Firebase", "Algorand", "Performance"],
      ctas: [
        {
          label: "Live",
          href: "https://aaa-app-prod.vercel.app",
          kind: "primary",
        },
        {
          label: "Code front end",
          href: "https://github.com/hmandiv/aaa",
          kind: "ghost",
        },
        {
          label: "Code back end",
          href: "https://github.com/hmandiv/aaa-api",
          kind: "ghost",
        },
      ],
      caseStudy: {
        problem:
          "Users needed a secure way to onboard via email or crypto wallet, track multi-level referrals, and verify on-chain payments—while also viewing portfolio balances and DeFi token data in real time. Existing solutions were fragmented or unreliable.",
        solution:
          "Built a full-stack platform using React for UI and Node.js/Express for backend services. Firebase handled authentication + real-time data. Algorand atomic transactions verified payments. Aggregated external DeFi APIs using Promise.all for parallel requests to reduce latency.",
        impact: [
          "Enabled a 5-level referral system with real-time updates",
          "Delivered a portfolio dashboard (balances, allocations, totals)",
          "Improved API responsiveness via parallelized external requests",
          "Provided secure, verifiable payments using Algorand atomic transactions",
        ],
        interviewScript: {
          // “Tell me about a project” script
          tellMeAbout:
            "I built a full-stack referral platform that supports both email and crypto-wallet onboarding, a multi-level referral system, and verifiable on-chain payments. The key challenge was making the app feel fast and trustworthy while integrating multiple external APIs and blockchain verification. I designed a React UI, built a Node/Express API, used Firebase for auth + realtime updates, and verified payments using Algorand atomic transactions. For performance, I aggregated DeFi data using Promise.all to parallelize calls and reduce overall latency. The result was a production-style platform with real-time referral tracking, a portfolio dashboard, and secure payment verification.",
          tradeoffs:
            "Main tradeoff: real-time UX vs complexity. Firebase simplified realtime updates, while the backend enforced verification + integrity for wallet and payment flows.",
          whatIdImprove:
            "Add stronger observability (structured logs + metrics), broaden test coverage, and implement server-side caching for third-party API data.",
        },
      },
    },

    // MINI CASE STUDY #2
    {
      title: "Habit Tracker (Local-first TypeScript)",
      description:
        "Fast, offline-first habit tracker with correct streak logic, clean domain model, and testable pure functions.",
      tags: ["TypeScript", "Architecture", "Local Storage", "Testing-friendly"],
      ctas: [
        {
          label: "Code",
          href: "https://github.com/hmandiv/habit-tracker",
          kind: "primary",
        },
      ],
      caseStudy: {
        problem:
          "Many habit trackers are slow, over-engineered, or rely on unnecessary backend services for simple daily tracking. I wanted instant UX and correct streak logic without network dependency.",
        solution:
          "Built a local-first habit tracker using TypeScript with a domain model separating habits, check-ins, and derived streak calculations. Implemented core behavior as pure functions so logic is predictable, testable, and easy to extend. Persisted state locally for instant load.",
        impact: [
          "Instant load times with no backend dependency",
          "Reliable streak calculations using deterministic logic",
          "Codebase designed for testing + easy future extension",
          "Strong separation of concerns (domain model vs UI)",
        ],
        interviewScript: {
          tellMeAbout:
            "I built a local-first habit tracker focused on speed and correctness. The main problem I saw in many habit apps is unnecessary backend complexity and buggy streak logic. I designed a domain model that separates habits from check-ins and computes streaks through deterministic pure functions. That makes the logic easy to test and prevents UI state from becoming the source of truth. Because everything persists locally, the app loads instantly and works offline. It’s a small project, but it demonstrates clean architecture, predictable behavior, and engineering maturity beyond just UI work.",
          tradeoffs:
            "Tradeoff: local-first simplicity vs multi-device sync. I chose local-first for speed and reliability; sync could be added later without changing core logic.",
          whatIdImprove:
            "Add optional export/import or cloud sync, and strengthen automated test coverage for edge-case date/streak scenarios.",
        },
      },
    },
  ],

  experience: [
    {
      role: "Research-Based Developer (Graduate Studies)",
      company: "CUNY Graduate Center",
      dates: "2024 — Present",
      location: "New York, USA",
      bullets: [
        "Developing research-driven software projects as part of a Master’s program in Digital Humanities.",
        "Applying production-grade software engineering practices (domain modeling, separation of concerns, testable logic) to data-driven research and interactive web tools.",
        "Combining front-end development, data modeling, and computational methods for humanities-focused research questions.",
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
        "Designed and implemented production APIs and microservices using C# and SQL Server supporting core business workflows.",
        "Built modern, responsive Angular interfaces to streamline internal and customer-facing tools.",
        "Integrated REST APIs with front-end components ensuring reliable data flow and consistent behavior.",
        "Optimized SQL queries and stored procedures to improve retrieval speed and reduce response times.",
        "Collaborated cross-functionally (product, QA, devs) and participated in code reviews to uphold standards.",
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
      title: "Master’s in Digital Humanities (Research-Based)",
      org: "CUNY Graduate Center",
      dates: "In progress",
      notes: [
        "Research-focused program combining software development, data analysis, and humanities-driven computation.",
      ],
    },
    {
      title: "B.S. (Honors) in Computer Science",
      org: "Algoma University",
      dates: "Completed",
      notes: [
        "Coursework: DSA, Databases, Software Engineering, Web Dev, Blockchain Fundamentals.",
      ],
    },
  ],

  contact: {
    blurb:
      "Email is best. If you’re reaching out about a role, include the title, stack, and timeline.",
    notes: [
      "Open to React-heavy and full-stack roles.",
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

    // Excluded repos
    excludeNames: ["ecommerce-project", "habit-tracker"],
  },
};

/* =========================================================
   1) DOM Helpers
   ========================================================= */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);

  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on") && typeof v === "function") {
      const evt = k.slice(2).toLowerCase();
      node.addEventListener(evt, v);
    } else {
      node.setAttribute(k, v);
    }
  }

  children.forEach((c) => node.append(c));
  return node;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = String(str ?? "");
  return div.innerHTML;
}

/* =========================================================
   2) Theme Toggle (localStorage)
   ========================================================= */
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

/* =========================================================
   3) Mobile Nav Toggle
   ========================================================= */
function initNavToggle() {
  const btn = $(".nav-toggle");
  const list = $("#nav-links");
  if (!btn || !list) return;

  btn.addEventListener("click", () => {
    const open = list.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });

  $$(".nav-link", list).forEach((a) => {
    a.addEventListener("click", () => {
      if (list.classList.contains("open")) {
        list.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });
}

/* =========================================================
   4) Smooth scroll offset (sticky header)
   ========================================================= */
function initSmoothScrollOffset() {
  const headerHeight = () => $(".site-header")?.offsetHeight || 0;

  $$("a[href^='#']").forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      if (!href.startsWith("#")) return;

      const target = document.querySelector(href);
      if (!target) return;

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

/* =========================================================
   5) Active section highlighting
   ========================================================= */
function initActiveNav() {
  const links = $$(".nav-link");
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const obs = new IntersectionObserver(
    (entries) => {
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
    { threshold: [0.2, 0.35, 0.5, 0.65], rootMargin: "-30% 0px -55% 0px" }
  );

  sections.forEach((s) => obs.observe(s));
}

/* =========================================================
   6) Reveal animations
   ========================================================= */
function initReveals() {
  const reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  const nodes = $$(
    ".section .card, .section .section-head, .hero-copy, .hero-card, .timeline li"
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
    { threshold: 0.12 }
  );

  nodes.forEach((n) => obs.observe(n));
}

/* =========================================================
   7) Case Study Modal
   ========================================================= */
function normalizeProject(p) {
  return {
    title: p.title || "Untitled",
    description: p.description || "",
    tags: Array.isArray(p.tags) ? p.tags : [],
    ctas: Array.isArray(p.ctas) ? p.ctas : [],
    highlights: Array.isArray(p.highlights) ? p.highlights : [],
    caseStudy: p.caseStudy || null,
    source: p.source || "manual",
    meta: p.meta || {},
  };
}

function populateInterviewSections(p) {
  const s = p.caseStudy?.interviewScript;
  if (!s) return;

  $("#caseStudySummary").textContent =
    "Short version: what this project is, why it exists, and what engineering decisions mattered.";

  $("#caseStudyTellMe").textContent = s.tellMeAbout || "";
  $("#caseStudyTradeoffs").textContent = s.tradeoffs || "";
  $("#caseStudyImprove").textContent = s.whatIdImprove || "";
}

function openCaseStudyModal(project) {
  const dlg = $("#caseStudyDialog");
  if (!dlg) return;

  const p = normalizeProject(project);

  $("#caseStudyTitle").textContent = p.title || "Case Study";
  $("#caseStudyDesc").textContent = p.description || "";
  $("#caseStudyProblem").textContent = p.caseStudy?.problem || "";
  $("#caseStudySolution").textContent = p.caseStudy?.solution || "";

  const impact = $("#caseStudyImpact");
  impact.innerHTML = "";
  (p.caseStudy?.impact || []).forEach((i) =>
    impact.append(el("li", { text: i }))
  );

  populateInterviewSections(p);

  const ctas = $("#caseStudyCtas");
  ctas.innerHTML = "";
  (p.ctas || []).slice(0, 4).forEach((c) => {
    const kind =
      c.kind === "primary"
        ? "btn primary"
        : c.kind === "ghost"
        ? "btn ghost"
        : "btn";
    const isExternal = /^https?:\/\//.test(c.href);
    ctas.append(
      el("a", {
        class: kind,
        href: c.href,
        text: c.label,
        ...(isExternal ? { target: "_blank", rel: "noreferrer" } : {}),
      })
    );
  });

  if (typeof dlg.showModal === "function") dlg.showModal();
  else
    alert(
      `${p.title}\n\nProblem:\n${p.caseStudy?.problem}\n\nSolution:\n${p.caseStudy?.solution}`
    );
}

function initCaseStudyDialog() {
  const dlg = $("#caseStudyDialog");
  if (!dlg) return;

  // Close via X button
  $("#caseStudyClose")?.addEventListener("click", () => dlg.close());

  // Close when clicking backdrop (outside dialog content)
  dlg.addEventListener("click", (e) => {
    if (e.target === dlg) dlg.close();
  });

  $("#copyInterviewBtn")?.addEventListener("click", async () => {
    const text = $("#caseStudyInterview")?.textContent || "";
    if (!text.trim()) return;

    try {
      await navigator.clipboard.writeText(text);
      $("#copyInterviewBtn").textContent = "Copied!";
      setTimeout(() => ($("#copyInterviewBtn").textContent = "Copy"), 900);
    } catch {
      // Fallback
      window.prompt("Copy this:", text);
    }
  });
}

/* =========================================================
   8) Resume PDF (Print -> Save as PDF)
   ========================================================= */
function buildResumePrintHtml() {
  const p = DATA.person;

  const skills = (DATA.skills || [])
    .map(
      (g) =>
        `<div><strong>${escapeHtml(g.group)}:</strong> ${escapeHtml(
          (g.items || []).join(", ")
        )}</div>`
    )
    .join("");

  const exp = (DATA.experience || [])
    .map((x) => {
      const bullets = (x.bullets || [])
        .map((b) => `<li>${escapeHtml(b)}</li>`)
        .join("");
      const tech =
        (x.tech || []).length > 0
          ? `<div class="rp-muted"><strong>Tech:</strong> ${escapeHtml(
              x.tech.join(", ")
            )}</div>`
          : "";
      return `
        <div class="rp-section">
          <h3>${escapeHtml(x.role)} — ${escapeHtml(x.company)}</h3>
          <div class="rp-muted">${escapeHtml(x.dates)} • ${escapeHtml(
        x.location || ""
      )}</div>
          ${tech}
          <ul>${bullets}</ul>
        </div>
      `;
    })
    .join("");

  const edu = (DATA.education || [])
    .map((e) => {
      const notes = (e.notes || [])
        .map((n) => `<div class="rp-muted">${escapeHtml(n)}</div>`)
        .join("");
      return `
        <div class="rp-section">
          <h3>${escapeHtml(e.title)}</h3>
          <div class="rp-muted">${escapeHtml(e.org)} • ${escapeHtml(
        e.dates
      )}</div>
          ${notes}
        </div>
      `;
    })
    .join("");

  return `
    <h1>${escapeHtml(p.name)}</h1>
    <div class="rp-muted">${escapeHtml(p.location)} • ${escapeHtml(
    p.phone || ""
  )} • ${escapeHtml(p.email || "")}</div>
    <div class="rp-muted">${escapeHtml(
      `https://github.com/${p.githubUsername}`
    )}</div>

    <div class="rp-section">
      <h2>Summary</h2>
      <div>${escapeHtml(p.subtitle || "")}</div>
    </div>

    <div class="rp-section">
      <h2>Skills</h2>
      ${skills}
    </div>

    <div class="rp-section">
      <h2>Experience</h2>
      ${exp}
    </div>

    <div class="rp-section">
      <h2>Education</h2>
      ${edu}
    </div>
  `;
}

function downloadResumePdf() {
  const container = $("#resumePrint");
  if (!container) return;

  container.hidden = false;
  container.innerHTML = buildResumePrintHtml();
  document.body.classList.add("print-resume");
  window.print();

  setTimeout(() => {
    document.body.classList.remove("print-resume");
    container.hidden = true;
    container.innerHTML = "";
  }, 500);
}

/* =========================================================
   9) Render static sections
   ========================================================= */
function renderStaticSections() {
  // Footer year/name
  $("#year").textContent = String(new Date().getFullYear());
  $("#footerName").textContent = DATA.person.name;
  $("#brandName").textContent = DATA.person.name;

  // Hero
  $("#heroSubtitle").textContent = DATA.person.subtitle;
  $("#metaLocation").textContent = DATA.person.location;
  $("#metaFocus").textContent = DATA.person.focus;
  $("#metaStrengths").textContent = DATA.person.strengths;

  $("#metaPhone").textContent = DATA.person.phone || "";
  const email = DATA.person.email || "";
  const emailA = $("#metaEmail");
  emailA.textContent = email;
  emailA.href = `mailto:${email}`;

  const gh = `https://github.com/${DATA.person.githubUsername}`;
  const ghA = $("#metaGithub");
  ghA.textContent = gh;
  ghA.href = gh;

  const githubBtn = $("#githubBtn");
  if (githubBtn) githubBtn.href = gh;

  // Resume button
  $("#resumeBtn")?.addEventListener("click", downloadResumePdf);

  // Badges
  const badges = $("#heroBadges");
  badges.innerHTML = "";
  DATA.person.heroBadges.forEach((b) =>
    badges.append(el("li", { class: "badge", text: b }))
  );

  // About
  $("#aboutSubtitle").textContent = DATA.about.subtitle;
  const about = $("#aboutContent");
  about.innerHTML = "";
  DATA.about.paragraphs.forEach((p) => about.append(el("p", { text: p })));

  const checklist = $("#aboutChecklist");
  checklist.innerHTML = "";
  DATA.about.checklist.forEach((i) => checklist.append(el("li", { text: i })));

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
      el("div", { class: "card", role: "listitem" }, [
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
      { class: "bullets" },
      x.bullets.map((b) => el("li", { text: b }))
    );
    expList.append(
      el("li", { class: "card" }, [
        el("div", { class: "timeline-top" }, [
          el("div", {}, [
            el("h3", { class: "timeline-role", text: x.role }),
            el("div", { class: "timeline-company", text: x.company }),
          ]),
          el("div", { class: "timeline-dates", text: x.dates }),
        ]),
        el("div", {
          class: "project-meta",
          text: `${x.location || ""}${
            x.tech?.length ? " • " + x.tech.join(" · ") : ""
          }`,
        }),
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

  const actions = $("#contactActions");
  actions.innerHTML = "";

  actions.append(
    el("a", {
      class: "btn primary",
      href: `mailto:${DATA.person.email}`,
      text: "Email me",
    })
  );
  actions.append(
    el("button", {
      class: "btn",
      type: "button",
      text: "Download Resume (PDF)",
      onClick: downloadResumePdf,
    })
  );

  if (DATA.person.phone) {
    const tel = DATA.person.phone.replace(/[^\d+]/g, "");
    actions.append(
      el("a", {
        class: "btn",
        href: `tel:${tel}`,
        text: `Call: ${DATA.person.phone}`,
      })
    );
  }

  DATA.person.links.forEach((l) =>
    actions.append(
      el("a", {
        class: "btn ghost",
        href: l.href,
        target: "_blank",
        rel: "noreferrer",
        text: l.label,
      })
    )
  );

  const notes = $("#contactNotes");
  notes.innerHTML = "";
  DATA.contact.notes.forEach((n) => notes.append(el("li", { text: n })));
}

/* =========================================================
   10) Projects rendering (Featured + GitHub)
   ========================================================= */
function projectCard(project) {
  const p = normalizeProject(project);

  const tags = el(
    "div",
    { class: "tag-row" },
    (p.tags || []).slice(0, 8).map((t) => el("span", { class: "tag", text: t }))
  );

  const metaParts = [];
  if (p.source === "github") {
    if (p.meta.language) metaParts.push(p.meta.language);
    if (typeof p.meta.stars === "number") metaParts.push(`★ ${p.meta.stars}`);
    if (typeof p.meta.forks === "number") metaParts.push(`⑂ ${p.meta.forks}`);
  }

  const meta = metaParts.length
    ? el("div", { class: "project-meta", text: metaParts.join(" · ") })
    : el("div", { class: "project-meta" });

  const actions = el("div", { class: "project-actions" }, []);
  (p.ctas || []).slice(0, 3).forEach((c) => {
    const kind =
      c.kind === "primary"
        ? "btn primary"
        : c.kind === "ghost"
        ? "btn ghost"
        : "btn";
    const isExternal = /^https?:\/\//.test(c.href);
    actions.append(
      el("a", {
        class: kind + " small",
        href: c.href,
        text: c.label,
        ...(isExternal ? { target: "_blank", rel: "noreferrer" } : {}),
      })
    );
  });

  if (p.caseStudy) {
    actions.append(
      el("button", {
        class: "btn ghost small",
        type: "button",
        text: "Case Study",
        onClick: () => openCaseStudyModal(p),
      })
    );
  }

  return el("article", { class: "card", role: "listitem" }, [
    el("h3", { class: "project-title", text: p.title }),
    el("p", { class: "project-desc", text: p.description }),
    meta,
    tags,
    actions,
  ]);
}

function renderProjects(allProjects) {
  const grid = $("#projectsGrid");
  grid.innerHTML = "";

  const normalized = allProjects.map(normalizeProject);

  // Tag filter options
  const select = $("#projectTagFilter");
  const tags = new Set();
  normalized.forEach((p) => (p.tags || []).forEach((t) => tags.add(t)));
  const sorted = Array.from(tags).sort((a, b) => a.localeCompare(b));
  select.innerHTML =
    `<option value="all">All</option>` +
    sorted
      .map((t) => `<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`)
      .join("");

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

/* =========================================================
   11) GitHub API loading + fallback/caching
   ========================================================= */
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
    username
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

function updateGithubStatus(text) {
  const pill = $("#githubStatus");
  if (pill) pill.textContent = text;
}

function setGithubNote(text) {
  const node = $("#githubNote");
  if (node) node.textContent = text;
}

async function loadProjects() {
  const username = DATA.person.githubUsername;
  const featured = (DATA.featuredProjects || []).map((p) => ({
    ...p,
    source: "manual",
  }));

  updateGithubStatus("Loading GitHub repos…");
  setGithubNote("");

  // Render cached immediately (fast)
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
      "Showing featured projects + most recently updated public repos."
    );
    renderProjects([...featured, ...filtered.map(githubRepoToProject)]);
  } catch (err) {
    const hasCached = cachedProjects.length > 0;

    if (err?.kind === "rate_limit") {
      updateGithubStatus(
        hasCached ? "GitHub rate-limited (using cached)" : "GitHub rate-limited"
      );
      const resetText = err.reset
        ? ` Rate limit resets at ${err.reset.toLocaleString()}.`
        : "";
      setGithubNote(
        hasCached
          ? `GitHub rate limit hit.${resetText} Showing cached repos.`
          : `GitHub rate limit hit.${resetText} Showing featured projects only.`
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

    renderProjects([...featured, ...(hasCached ? cachedProjects : [])]);
  }
}

/* =========================================================
   12) Boot
   ========================================================= */
function boot() {
  initTheme();
  initNavToggle();
  initSmoothScrollOffset();
  initActiveNav();
  initCaseStudyDialog();
  renderStaticSections();
  initReveals();
  loadProjects();
}

document.addEventListener("DOMContentLoaded", boot);
