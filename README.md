# Abhishek Kale — Personal Portfolio

A fast, fully responsive personal portfolio website built with **React 19 + Vite 7**.  
Showcases projects, skills, education, experience, and achievements with a dark glassmorphism design and smooth scroll animations.

**Live site:** [portfolio-iota-smoky-raakn6p1qe.vercel.app](https://portfolio-iota-smoky-raakn6p1qe.vercel.app/)

---

## Features

- Dark glassmorphism UI with animated gradient orbs and floating hero section
- Sticky navbar with active-section highlighting via IntersectionObserver
- Clickable profile photo with fullscreen lightbox (Escape key + click-outside to close)
- Scroll-triggered fade-in animations on every section
- Vertical experience timeline, colored skill badges, project cards with GitHub links
- Resume download CTA
- Fully responsive (mobile → desktop)

---

## Tech Stack

| Layer | Tool |
|---|---|
| UI Framework | React 19.2 |
| Build Tool | Vite 7 |
| Styling | Plain CSS (custom properties, keyframes, glassmorphism) |
| Animations | CSS keyframes + IntersectionObserver |
| Deployment | Vercel (auto-deploy from GitHub `main`) |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky nav with active-link tracking
│   ├── Hero.jsx            # Landing section + avatar lightbox
│   ├── About.jsx
│   ├── Education.jsx
│   ├── Skills.jsx          # Categorized skill pills
│   ├── Projects.jsx        # Project cards with GitHub links
│   ├── Experience.jsx      # Vertical timeline
│   ├── TestScores.jsx      # Standardized test stat cards
│   ├── ExtraCurricular.jsx
│   ├── Contact.jsx         # Email / GitHub / LinkedIn cards
│   └── Footer.jsx
│
├── hooks/
│   └── useScrollAnimation.js   # IntersectionObserver scroll-reveal hook
│
├── assets/data/
│   ├── education.js
│   ├── experience.js
│   ├── extracurricular.js
│   ├── projects.js
│   ├── skills.js
│   └── testScores.js
│
├── styles/
│   └── global.css          # Entire design system (tokens, keyframes, components)
│
├── App.jsx
└── main.jsx
```

---

## Design System

All styling lives in `src/styles/global.css` via CSS custom properties.

| Token | Value |
|---|---|
| `--bg-primary` | `#07090f` |
| `--bg-secondary` | `#0d1226` |
| `--accent-indigo` | `#6366f1` |
| `--accent-violet` | `#8b5cf6` |
| `--accent-cyan` | `#06b6d4` |
| Card background | `rgba(255,255,255,0.035)` + `backdrop-filter: blur` |

Keyframe animations: `fadeInUp`, `float`, `pulseGlow`, `shimmer`, `gradientShift`, `orbDrift1/2`, `scrollBounce`, `lightboxIn`, `lightboxImgIn`.

---

## Run Locally

> **Note:** If `npm` is not in your PATH, invoke Node directly:
> ```bash
> node <path-to-node>/node_modules/npm/bin/npm-cli.js install
> node node_modules/vite/bin/vite.js
> ```

Standard flow (when npm is available):

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the dist build
```

---

## Deployment

Deployed on **Vercel** with automatic CI/CD — every push to `main` triggers a new production build.

---

## Content Updates

All section data is declarative — edit the files in `src/assets/data/` to update content without touching component code.

---

## Author

**Abhishek Kale** — Electrical Engineering Student, COEP Technological University (2026)

- GitHub: [github.com/Abhishek10946](https://github.com/Abhishek10946)
- LinkedIn: [linkedin.com/in/abhishek-kale-889437205](https://www.linkedin.com/in/abhishek-kale-889437205/)
- Email: kaleabhishek2104@gmail.com
