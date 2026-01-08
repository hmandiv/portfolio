import { $$ } from "../lib/dom.js";

export function initReveals() {
  const reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  const nodes = $$(
    ".section .card, .section .section-head, .hero-copy, .hero-card, .timeline li",
  );

  nodes.forEach((n) => n.classList.add("reveal"));

  const obs = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add("is-visible");
        obs.unobserve(e.target);
      }
    },
    { threshold: 0.12 },
  );

  nodes.forEach((n) => obs.observe(n));
}
