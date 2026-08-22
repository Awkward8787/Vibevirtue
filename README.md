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

## Deploying to Hostinger

- **Build command:** `npm run build`
- **Output directory:** `dist/` — upload its *contents* (not the folder itself), including the hidden `.htaccess` file

### Upload procedure

1. Run a clean build locally: `rm -rf dist && npm run build`
2. Sanity-check it locally: `npm run preview`, then open the printed URL and spot-check `/`, `/privacy-policy/`, and a package email button
3. In Hostinger hPanel, open **Files → File Manager** and go to the site's `public_html` directory (or connect over FTP/SFTP with the credentials from **Files → FTP Accounts**)
4. Delete the previous deployment's files from `public_html` (keep any unrelated folders you manage separately)
5. Upload everything inside `dist/` into `public_html`, preserving the folder structure (`assets/`, `privacy-policy/`, `terms-and-conditions/`, `consulting-disclaimer/`, `.htaccess`, `index.html`, images, `robots.txt`, `sitemap.xml`, `site.webmanifest`)
6. In File Manager, enable "show hidden files" and confirm `.htaccess` is present in `public_html`

### Domain connection

1. In hPanel, open **Domains** and point `vibevirtue.com` at the hosting plan (assign it as the primary domain for this `public_html`)
2. If the domain is registered elsewhere, either change its nameservers to Hostinger's (shown under **Domains → DNS/Nameservers**) or create an A record pointing at the server IP from hPanel
3. Wait for DNS propagation, then confirm `https://vibevirtue.com` loads the site

### SSL verification

1. In hPanel, open **Security → SSL** and install the free certificate for `vibevirtue.com` (usually automatic)
2. Turn on **Force HTTPS** in the same screen so `http://` requests redirect
3. Verify: open `https://vibevirtue.com`, check the padlock, and confirm `http://vibevirtue.com` redirects to HTTPS

### Cache clearing

- Hashed files under `assets/` change name on every build, so browsers fetch new code automatically; the `.htaccess` marks HTML `no-cache` so the new hashes are picked up immediately
- After deploying, hard refresh (`Ctrl+Shift+R`) to bypass any locally cached HTML
- If Hostinger's hPanel shows a **Cache Manager** for your plan, purge it after each deployment
- If an old page persists, confirm the dated files were actually replaced in `public_html`

### Rollback procedure

1. Keep the previous build: before uploading a new one, download or rename the current `public_html` contents (e.g. zip it as `backup-YYYY-MM-DD.zip` in File Manager)
2. To roll back, delete the bad deployment's files and restore the backup zip's contents into `public_html`
3. Alternatively, rebuild from the last good git commit: `git checkout <tag-or-commit> && npm ci && npm run build`, then upload that `dist/`
4. Hard refresh and re-run the deployment checklist

### Deployment checklist

- [ ] `npm run typecheck`, `npm run lint`, and `npm run build` all pass locally
- [ ] `npm run preview` serves the site correctly, including `/privacy-policy/` and refresh on a legal page
- [ ] `public_html` contains `.htaccess` (hidden files visible) after upload
- [ ] `https://vibevirtue.com` loads with a valid certificate and Force HTTPS is on
- [ ] Direct URLs work in production: `/privacy-policy/`, `/terms-and-conditions/`, `/consulting-disclaimer/`, and an unknown URL shows the not-found view
- [ ] A package "Request This Package" button opens a prefilled email to anthony@vibevirtue.com
- [ ] "Copy Email Address" copies and shows feedback
- [ ] `robots.txt`, `sitemap.xml`, and `social-card.png` load from the domain
- [ ] Placeholder images replaced with final artwork (`social-card.png` 1200×630, `apple-touch-icon.png` 180×180) — or consciously deferred
- [ ] Legal pages reviewed by an attorney — or consciously deferred
