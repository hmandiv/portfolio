import { $ } from "../lib/dom.js";

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

export function initTheme() {
  applyTheme(getPreferredTheme());

  $("#themeToggle")?.addEventListener("click", () => {
    const current =
      document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
}
