import { initTheme } from "./features/theme.js";
import {
  initNavToggle,
  initActiveNav,
  initSmoothScrollOffset,
} from "./features/nav.js";
import { initReveals } from "./features/reveal.js";
import { initCaseStudyDialog } from "./features/caseStudy.js";
import { renderStaticSections } from "./render/static.js";
import { loadProjects } from "./features/github.js";

function boot() {
  document.documentElement.classList.remove("no-js");

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
