<p align="center">
  <img src="assets/banner.png" alt="Vibe Virtue" width="100%">
</p>

# Vibe Virtue

**Consulting website for vibevirtue.com. Static production build for Hostinger upload.**

[![License: All Rights Reserved](https://img.shields.io/badge/license-all%20rights%20reserved-lightgrey)](#license)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)

Consulting website for [vibevirtue.com](https://vibevirtue.com). The production build is a static site and can be uploaded to Hostinger.

## How it works

```mermaid
flowchart LR
  visitor[Visitor] --> vite[Vite React static site]
  vite --> pages[Services / Packages / About / FAQ / Contact]
  pages --> hostinger[Hostinger static upload of dist/]
```

There is no app server in production. `npm run build` writes `dist/`; upload those files to Hostinger `public_html`.

## Installation

```bash
npm install
```

## Local development

```bash
npm run dev
```

The development server starts at `http://localhost:5173`.

Useful checks while working:

```bash
npm run typecheck
npm run lint
```

## Production build

```bash
npm run build
```

This writes static files to `dist/`. Upload the contents of `dist/` to Hostinger (`public_html` for the domain root).

## Preview

Preview the production build locally:

```bash
npm run preview
```

The preview server starts at `http://localhost:4173`.

## License

All rights reserved.
