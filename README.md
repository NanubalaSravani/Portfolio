# Nanubala Sravani — Portfolio

Interactive portfolio website for **Nanubala Sravani**, AI & Data Science Engineer. Built with React + Vite, featuring an academic editorial layout, light/dark theme toggle, scale-focus project carousel, and content sourced from a single data file.

## Live links

- **GitHub:** [github.com/NanubalaSravani](https://github.com/NanubalaSravani)
- **LinkedIn:** [linkedin.com/in/sravani-nanubala](https://linkedin.com/in/sravani-nanubala)
- **RidgeVision AI demo:** [sravaninanubala-ridgevision-ai.hf.space](https://sravaninanubala-ridgevision-ai.hf.space)

## Features

- **Hero** — Professional summary, CTAs, and key accuracy stat
- **Key Achievements** — Metrics grid with scroll-triggered animations
- **Projects** — Six featured projects in a horizontal carousel with scale-focus interaction (active card expands, siblings recede)
- **Skills** — Proficiency bars, certifications, milestones, and soft skills
- **Contact** — Neumorphic contact cards and message form
- **Theme toggle** — Light (academic default) and dark modes with smooth 0.6s transitions
- **Responsive** — Desktop nav, mobile bottom navigation, touch-friendly carousel

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 |
| Build tool | Vite 6 |
| Language | TypeScript |
| Styling | CSS custom properties (design tokens) |
| Fonts | Source Serif 4, Inter, JetBrains Mono, Material Symbols |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm

### Install and run

```bash
git clone https://github.com/NanubalaSravani/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build for production

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

## Project structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── MobileNav.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Projects.tsx
│   │   ├── ScaleFocusCarousel.tsx
│   │   ├── Skills.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/
│   │   └── portfolio.ts      # All copy, projects, skills, links
│   ├── hooks/
│   │   └── useTheme.tsx
│   ├── App.tsx
│   ├── index.css             # Design tokens & global styles
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## Updating content

Edit **`src/data/portfolio.ts`** to change:

- Hero text and contact info
- Metrics and achievements
- All six projects (problem, approach, outcome, tools, links)
- Skills, certifications, and milestones
- Social links

No component changes are required for copy updates.

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import the project at [vercel.com](https://vercel.com).
3. Set **Build Command** to `npm run build` and **Output Directory** to `dist`.
4. Deploy.

### GitHub Pages

1. Add a base path to `vite.config.ts` (match your repo name):

   ```ts
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/',
   });
   ```

2. Enable **Settings → Pages → Source: GitHub Actions** and use a workflow that runs `npm run build` and uploads `dist/`.

### Netlify

Same as Vercel: build command `npm run build`, publish directory `dist`.

## Featured projects

1. **RidgeVision AI** — Fingerprint-based blood group detection (flagship)
2. **Blood Bridge AI** — Donor availability prediction via FastAPI
3. **AI Resume Analyzer** — Groq-powered ATS optimizer
4. **SkillPath** — Flutter mobile learning app (solo execution)
5. **Virtual Calculator with Hand Gestures** — MediaPipe + OpenCV
6. **EDA Portfolio** — Titanic & Age-Gender distribution analysis

## License

Personal portfolio — all rights reserved by Nanubala Sravani.
