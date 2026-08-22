import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { legalPageSeo, seo } from '../src/data/seo.ts'

// Writes dist/<slug>/index.html copies with page-specific head metadata so
// static hosting serves unique titles/descriptions/canonicals without JS.

const distUrl = new URL('../dist/', import.meta.url)
const template = readFileSync(new URL('index.html', distUrl), 'utf8')

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('"', '&quot;')
}

function replaceOnce(html: string, pattern: RegExp, replacement: string): string {
  if (!pattern.test(html)) {
    throw new Error(`Pattern not found in template: ${pattern}`)
  }
  return html.replace(pattern, replacement)
}

for (const page of legalPageSeo) {
  // Trailing slash matches Apache's DirectorySlash redirect for real folders.
  const url = `${seo.siteUrl}${page.path}/`
  const title = escapeHtml(page.title)
  const description = escapeHtml(page.description)

  let html = template
  html = replaceOnce(html, /<title>.*?<\/title>/s, `<title>${title}</title>`)
  html = replaceOnce(
    html,
    /(<meta\s+name="description"\s+content=")[^"]*(")/s,
    `$1${description}$2`,
  )
  html = replaceOnce(
    html,
    /(<link\s+rel="canonical"\s+href=")[^"]*(")/s,
    `$1${url}$2`,
  )
  html = replaceOnce(
    html,
    /(<meta\s+property="og:url"\s+content=")[^"]*(")/s,
    `$1${url}$2`,
  )
  html = replaceOnce(
    html,
    /(<meta\s+property="og:title"\s+content=")[^"]*(")/s,
    `$1${title}$2`,
  )
  html = replaceOnce(
    html,
    /(<meta\s+property="og:description"\s+content=")[^"]*(")/s,
    `$1${description}$2`,
  )
  html = replaceOnce(
    html,
    /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/s,
    `$1${title}$2`,
  )
  html = replaceOnce(
    html,
    /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/s,
    `$1${description}$2`,
  )

  const pageDir = new URL(`.${page.path}/`, distUrl)
  mkdirSync(pageDir, { recursive: true })
  writeFileSync(new URL('index.html', pageDir), html)
  console.log(`prerendered ${page.path}/index.html`)
}
