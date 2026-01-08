import { $, el, escapeHtml } from "../lib/dom.js";
import { openCaseStudyModal } from "../features/caseStudy.js";

function normalizeProject(p) {
  return {
    title: p?.title || "Untitled",
    description: p?.description || "",
    tags: Array.isArray(p?.tags) ? p.tags : [],
    ctas: Array.isArray(p?.ctas) ? p.ctas : [],
    caseStudy: p?.caseStudy || null,
    source: p?.source || "manual",
    meta: p?.meta || {},
  };
}

function projectCard(project) {
  const p = normalizeProject(project);

  const tags = el(
    "div",
    { class: "tag-row" },
    (p.tags || [])
      .slice(0, 8)
      .map((t) => el("span", { class: "tag", text: t })),
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
        class: `${kind} small`,
        href: c.href,
        text: c.label,
        ...(isExternal ? { target: "_blank", rel: "noreferrer" } : {}),
      }),
    );
  });

  if (p.caseStudy) {
    actions.append(
      el("button", {
        class: "btn ghost small",
        type: "button",
        text: "Case Study",
        onClick: () => openCaseStudyModal(p),
      }),
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

export function renderProjects(allProjects) {
  const grid = $("#projectsGrid");
  grid.innerHTML = "";

  const normalized = (allProjects || []).map(normalizeProject);

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
        ]),
      );
      return;
    }

    filtered.forEach((p) => grid.append(projectCard(p)));
  }

  search.addEventListener("input", applyFilter);
  select.addEventListener("change", applyFilter);

  applyFilter();
}
