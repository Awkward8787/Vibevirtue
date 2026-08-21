# Vibevirtue

A Linear-inspired issue tracker built with React, TypeScript, and Vite. It runs
entirely on a deterministic, seeded in-memory mock service — no backend required.

## Architecture

- `src/models/` — canonical domain models (`Issue`, `User`, `Label`, enums).
- `src/services/` — mock services with deterministic seeded data (`issueService`).
- `src/components/` — UI components (sidebar, issue rows, priority icons, composer).
- `src/App.tsx` — grouped issue list, status filtering, and issue creation.

## Getting started

```bash
npm install      # first time, generates package-lock.json
npm run dev      # start the Vite dev server on http://localhost:5173
```

Other scripts:

```bash
npm run typecheck   # TypeScript project build check
npm run lint        # ESLint
npm run build       # production build to dist/
npm run preview     # serve the production build
```

## Usage

- Filter issues by workflow state from the sidebar.
- Press `C` (or click **New issue**) to open the composer and create an issue.
- New issues get a sequential `VV-N` identifier and appear immediately in the list.

## Cloud Agent environment

`.cursor/environment.json` configures the Cloud Agent environment:

- `install`: `npm ci` (uses the committed `package-lock.json`).
- `terminals`: runs `npm run dev` so the app is available while an agent works.
- `ports`: exposes `5173` for the web app.
