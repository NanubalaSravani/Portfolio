# Nanubala Sravani | AI & Data Science Engineer — Portfolio

[![Live Site](https://img.shields.io/badge/Live-Visit%20Site-2ea44f?style=flat-square)](https://nanubala-sravani-portfolio.vercel.app/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

Personal portfolio site for **Nanubala Sravani**, a final-year B.Tech CSE (AI & Data Science) student at The Apollo University. The site showcases biometric computer vision research, applied ML systems, full-stack deployments, and solo product execution.

# 🔗 Live Demo: [nanubala-sravani-portfolio.vercel.app](https://nanubala-sravani-portfolio.vercel.app/)

---

## ✨ Overview

This is a single-page portfolio built with React, TypeScript, and Vite — no UI framework, hand-crafted styling, and data-driven content. It highlights:

- **Hero** — intro, role badge, key stat (90% ensemble accuracy), contact shortcuts
- **Achievements** — metrics on accuracy, dataset size, credentials, and featured project count
- **Projects** — six featured builds spanning biometric ML, applied ML deployment, LLM/NLP products, mobile (Flutter), computer vision, and data analysis
- **Skills** — proficiency breakdown across ML/AI, Data, Engineering, and Research, plus soft skills
- **Contact** — direct links to email, phone, GitHub, and LinkedIn
- **Theme toggle** — light/dark mode
- **Mobile navigation** — responsive bottom nav for small screens

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 (function components, hooks) |
| Language | TypeScript |
| Build tool | Vite 6 |
| Styling | Plain CSS (per-component `.css` files) |
| Fonts | Inter, JetBrains Mono, Source Serif 4, Material Symbols |
| Deployment | Vercel |

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx / Navbar.css
│   │   ├── Hero.tsx / Hero.css
│   │   ├── Achievements.tsx / Achievements.css
│   │   ├── Projects.tsx / Projects.css
│   │   ├── ProjectCard.tsx / ProjectCard.css
│   │   ├── ScaleFocusCarousel.tsx / ScaleFocusCarousel.css
│   │   ├── Skills.tsx / Skills.css
│   │   ├── Contact.tsx / Contact.css
│   │   ├── ThemeToggle.tsx / ThemeToggle.css
│   │   └── MobileNav.tsx / MobileNav.css
│   ├── data/
│   │   └── portfolio.ts       # All site content (hero, projects, skills, metrics, etc.)
│   ├── hooks/                 # Custom React hooks
│   ├── App.tsx                # Top-level layout / section composition
│   ├── App.css
│   ├── index.css
│   ├── main.tsx                # React entry point
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/NanubalaSravani/Portfolio.git
cd Portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot module reloading (default: `http://localhost:5173`).

### Build

```bash
npm run build
```

Type-checks the project (`tsc -b`) and produces an optimized production build in `dist/`.

### Preview

```bash
npm run preview
```

Serves the production build locally to verify it before deploying.

## ✏️ Editing Content

Almost all site copy — hero text, metrics, project details, skills, certificates, and social links — lives in a single typed data file:

```
src/data/portfolio.ts
```

Update the relevant exported object/array (`hero`, `metrics`, `skillProficiencies`, `projects`, `milestones`, `certificates`, `socialLinks`) and the corresponding UI updates automatically — no need to touch component markup for content changes.

## 🌐 Deployment

The live site is deployed on **Vercel**, auto-building from the `main` branch. To deploy your own fork:

1. Push the repo to GitHub.
2. Import the project on [vercel.com](https://vercel.com/).
3. Vercel auto-detects the Vite project (build command: `npm run build`, output directory: `dist`).

## 📬 Contact

- **Email:** sravaninanubala6@gmail.com
- **GitHub:** [@NanubalaSravani](https://github.com/NanubalaSravani)
- **LinkedIn:** [sravani-nanubala](https://linkedin.com/in/sravani-nanubala)

## 📄 License

This project is personal portfolio source code. Feel free to use it as a structural reference, but please don't reuse the personal content/branding directly.
