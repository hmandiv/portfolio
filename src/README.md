# HR Mandiv — Portfolio (Vanilla JS + Modules)

Personal portfolio site built with plain HTML/CSS/JS, using ES modules for a clean structure (no framework).  
Includes a GitHub repo feed, featured projects with case study modals, theme toggle, and a “Download Resume (PDF)” print-to-PDF flow.

## Features

- **Dark/Light theme toggle** (saved in localStorage)
- **Featured projects + GitHub repos** (GitHub API + caching)
- **Project search + tag filtering**
- **Case Study modal** per featured project
- **Interview answer sections** inside the case study (short + expandable)
- **Resume download** via browser print dialog (Save as PDF)
- **Responsive layout** + reduced-motion friendly animations

## Tech Stack

- HTML + CSS
- Vanilla JavaScript (ES Modules)
- GitHub REST API (public repos)
- Deployed on Vercel

## Project Structure

```txt
/
  index.html
  index.css
  package.json
  /src
    data.js                 # DATA object only (content)
    /lib
      dom.js                # DOM helpers ($, $$, el, escapeHtml)
    /features
      theme.js              # theme toggle
      nav.js                # nav toggle + active section + smooth scroll offset
      reveal.js             # reveal animations
      caseStudy.js          # case study dialog (open/close + populate)
      github.js             # GitHub fetch + cache + mapping
    /render
      static.js             # render hero/about/skills/exp/education/contact
      projects.js           # render projects grid + filters + project cards
    main.js                 # app bootstrapping (wires everything)
```
