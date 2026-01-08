// /src/features/nav.js
import { $, $$ } from "../lib/dom.js";

export function initNavToggle() {
  const btn = $(".nav-toggle");
  const list = $("#nav-links");
  if (!btn || !list) return;

  btn.addEventListener("click", () => {
    const open = list.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });

  $$(".nav-link", list).forEach((a) => {
    a.addEventListener("click", () => {
      if (!list.classList.contains("open")) return;
      list.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

export function initSmoothScrollOffset() {
  const headerHeight = () => $(".site-header")?.offsetHeight || 0;

  $$("a[href^='#']").forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#" || !href.startsWith("#")) return;

      // keep native skip-link behavior
      if (a.classList.contains("skip-link")) return;

      const target = document.querySelector(href);
      if (!target) return;

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

export function initActiveNav() {
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
      const id = `#${visible.target.id}`;

      links.forEach((a) => {
        const active = a.getAttribute("href") === id;
        if (active) a.setAttribute("aria-current", "page");
        else a.removeAttribute("aria-current");
      });
    },
    { threshold: [0.2, 0.35, 0.5, 0.65], rootMargin: "-30% 0px -55% 0px" },
  );

  sections.forEach((s) => obs.observe(s));
}
