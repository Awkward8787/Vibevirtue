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

## SEO and social assets

Placeholder images live in `public/` and should be replaced with final artwork using the same file names and dimensions:

| File | Replace with | Dimensions | Format |
| --- | --- | --- | --- |
| `public/social-card.png` | Final social-sharing image (Open Graph / Twitter card) | 1200 × 630 px | PNG (or JPG, update the `og:image` tags in `index.html` if the extension changes) |
| `public/apple-touch-icon.png` | Final app/touch icon | 180 × 180 px | PNG |

Other SEO files: `public/robots.txt`, `public/sitemap.xml`, `public/site.webmanifest`, and JSON-LD structured data in `index.html`. Page titles and descriptions are centralized in `src/data/seo.ts`; the build step writes prerendered `dist/<slug>/index.html` files so legal pages ship unique titles, descriptions, and canonical URLs.
