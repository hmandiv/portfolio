import { DATA } from "../data.js";
import { $, el, escapeHtml } from "../lib/dom.js";

function buildResumePrintHtml() {
  const p = DATA.person;

  const skills = (DATA.skills || [])
    .map(
      (g) =>
        `<div><strong>${escapeHtml(g.group)}:</strong> ${escapeHtml(
          (g.items || []).join(", "),
        )}</div>`,
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
              x.tech.join(", "),
            )}</div>`
          : "";
      return `
        <div class="rp-section">
          <h3>${escapeHtml(x.role)} — ${escapeHtml(x.company)}</h3>
          <div class="rp-muted">${escapeHtml(x.dates)} • ${escapeHtml(
            x.location || "",
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
            e.dates,
          )}</div>
          ${notes}
        </div>
      `;
    })
    .join("");

  return `
    <h1>${escapeHtml(p.name)}</h1>
    <div class="rp-muted">${escapeHtml(p.location)} • ${escapeHtml(
      p.phone || "",
    )} • ${escapeHtml(p.email || "")}</div>
    <div class="rp-muted">${escapeHtml(
      `https://github.com/${p.githubUsername}`,
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

export function renderStaticSections() {
  // Footer
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

  // Resume
  $("#resumeBtn")?.addEventListener("click", downloadResumePdf);

  // Badges
  const badges = $("#heroBadges");
  badges.innerHTML = "";
  DATA.person.heroBadges.forEach((b) =>
    badges.append(el("li", { class: "badge", text: b })),
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
      group.items.map((t) => el("span", { class: "tag", text: t })),
    );

    skillsGrid.append(
      el("div", { class: "card", role: "listitem" }, [
        el("h3", { text: group.group }),
        tags,
      ]),
    );
  });

  // Experience
  const expList = $("#experienceList");
  expList.innerHTML = "";

  DATA.experience.forEach((x) => {
    const bullets = el(
      "ul",
      { class: "bullets" },
      x.bullets.map((b) => el("li", { text: b })),
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
      ]),
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
          el("p", { class: "muted small", text: n }),
        ),
      ]),
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
    }),
  );
  actions.append(
    el("button", {
      class: "btn",
      type: "button",
      text: "Download Resume (PDF)",
      onClick: downloadResumePdf,
    }),
  );

  if (DATA.person.phone) {
    const tel = DATA.person.phone.replace(/[^\d+]/g, "");
    actions.append(
      el("a", {
        class: "btn",
        href: `tel:${tel}`,
        text: `Call: ${DATA.person.phone}`,
      }),
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
      }),
    ),
  );

  const notes = $("#contactNotes");
  notes.innerHTML = "";
  DATA.contact.notes.forEach((n) => notes.append(el("li", { text: n })));
}
