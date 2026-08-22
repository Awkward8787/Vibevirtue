# Vibe Virtue

Consulting website for [vibevirtue.com](https://vibevirtue.com). The production build is a static site and can be uploaded to Hostinger.

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
