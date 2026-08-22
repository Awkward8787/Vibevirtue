type PageMeta = {
  title: string
  description?: string
  canonicalUrl?: string
}

function setContent(selector: string, content: string) {
  document.head.querySelector(selector)?.setAttribute('content', content)
}

export function applyPageMeta({ title, description, canonicalUrl }: PageMeta) {
  document.title = title
  setContent('meta[property="og:title"]', title)
  setContent('meta[name="twitter:title"]', title)

  if (description) {
    setContent('meta[name="description"]', description)
    setContent('meta[property="og:description"]', description)
    setContent('meta[name="twitter:description"]', description)
  }

  if (canonicalUrl) {
    document.head
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', canonicalUrl)
    setContent('meta[property="og:url"]', canonicalUrl)
  }
}
