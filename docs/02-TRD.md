# Vibe Virtue — Technical Requirements Document (TRD)

## Stack and why
- **Frontend:** React 19 + TypeScript, **Vite 8**, **Tailwind CSS 4** (`@tailwindcss/vite`), `lucide-react` icons. A small, fast, static single-page marketing site.
- **Structure:** typed content in `src/data/*` (hero, services, packages, process, about, outcomes, credibility, navigation, site), rendered by section components (`src/components/*Section.tsx`) within `RootLayout` + a single `HomePage`.

## Hosting and deploy target
- Static build (`npm run build` → `tsc -b && vite build`) → `dist/`, uploaded to **Hostinger** (`public_html` for the domain root). `public/.htaccess` included. Domain: vibevirtue.com.

## Third-party services and APIs
- None required (no backend). Any booking/contact is an outbound link/form (confirm destination).

## Environments and secrets (names only)
- None. No API keys; it ships no secrets.

## Security, performance, privacy, accessibility
- Static assets only; minimal attack surface. Fast first load (Vite build, Tailwind). No cookies/PII stored by the site itself.
- Accessibility: semantic sections, button/link components (`Button`, `ButtonLink`, `PricingCard`), focus states — verify contrast against the brand palette.

## Browser/device support
- Evergreen desktop + mobile; responsive.

## Testing
- `npm run typecheck` (tsc), `npm run lint` (eslint). No runtime test suite (static content site).

## Open questions
- Confirm the booking/contact mechanism and whether analytics is added.

## Changelog

- **2026-10-18** — Initial reverse-documented draft from the codebase (executor documentation bot). Facts drawn from the repo/box source at the commit recorded in `/workspace/project-docs/state.json`.
