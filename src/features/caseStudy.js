import { $, el } from "../lib/dom.js";

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

function populateInterviewSections(project) {
  const s = project.caseStudy?.interviewScript;
  if (!s) return;

  // Short “summary” line
  const summary = $("#caseStudySummary");
  if (summary) {
    summary.textContent =
      "Use the dropdowns below depending on how much time the interviewer gives you.";
  }

  const tellMe = $("#caseStudyTellMe");
  const tradeoffs = $("#caseStudyTradeoffs");
  const improve = $("#caseStudyImprove");

  if (tellMe) tellMe.textContent = s.tellMeAbout || "";
  if (tradeoffs) tradeoffs.textContent = s.tradeoffs || "";
  if (improve) improve.textContent = s.whatIdImprove || "";
}

export function openCaseStudyModal(projectInput) {
  const dlg = $("#caseStudyDialog");
  if (!dlg) return;

  const p = normalizeProject(projectInput);

  const title = $("#caseStudyTitle");
  const desc = $("#caseStudyDesc");
  const problem = $("#caseStudyProblem");
  const solution = $("#caseStudySolution");

  if (title) title.textContent = p.title || "Case Study";
  if (desc) desc.textContent = p.description || "";
  if (problem) problem.textContent = p.caseStudy?.problem || "";
  if (solution) solution.textContent = p.caseStudy?.solution || "";

  const impact = $("#caseStudyImpact");
  if (impact) {
    impact.innerHTML = "";
    (p.caseStudy?.impact || []).forEach((i) =>
      impact.append(el("li", { text: i })),
    );
  }

  populateInterviewSections(p);

  const ctas = $("#caseStudyCtas");
  if (ctas) {
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
        }),
      );
    });
  }

  if (typeof dlg.showModal === "function") dlg.showModal();
  else {
    // ancient fallback
    alert(
      `${p.title}\n\nProblem:\n${p.caseStudy?.problem}\n\nSolution:\n${p.caseStudy?.solution}`,
    );
  }
}

export function initCaseStudyDialog() {
  const dlg = $("#caseStudyDialog");
  if (!dlg) return;

  $("#caseStudyClose")?.addEventListener("click", () => dlg.close());

  // close on backdrop click
  dlg.addEventListener("click", (e) => {
    if (e.target === dlg) dlg.close();
  });
}
