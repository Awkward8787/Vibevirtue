import { useEffect } from 'react'
import { LegalPage } from '@/components/LegalPage.tsx'
import { legalPages } from '@/data/legal.ts'
import { legalPageSeo, seo } from '@/data/seo.ts'
import { RootLayout } from '@/layouts/RootLayout.tsx'
import { HomePage } from '@/pages/HomePage.tsx'
import { NotFoundPage } from '@/pages/NotFoundPage.tsx'
import { applyPageMeta } from '@/utils/pageMeta.ts'

// Static-host routing: every path serves index.html (Hostinger .htaccess
// rewrite / Vite SPA fallback) and the app renders based on the pathname.
// Links between pages are plain anchors, so refresh and direct navigation
// behave like ordinary page loads.
function normalizedPathname(): string {
  const path = window.location.pathname.replace(/\/+$/, '')
  return path === '' ? '/' : path
}

export default function App() {
  const path = normalizedPathname()
  const legalPage =
    path === '/' ? null : legalPages.find((page) => `/${page.slug}` === path)
  const isNotFound = path !== '/' && !legalPage

  // Legal pages get prerendered heads in production; this keeps titles and
  // descriptions correct in dev and on the not-found view too.
  useEffect(() => {
    if (isNotFound) {
      applyPageMeta({ title: seo.notFoundTitle })
      return
    }
    const pageSeo = legalPageSeo.find((page) => page.path === path)
    if (pageSeo) {
      applyPageMeta({
        title: pageSeo.title,
        description: pageSeo.description,
        canonicalUrl: `${seo.siteUrl}${pageSeo.path}/`,
      })
    }
  }, [path, isNotFound])

  if (path === '/') {
    return (
      <RootLayout>
        <HomePage />
      </RootLayout>
    )
  }

  return (
    <RootLayout>
      {legalPage ? <LegalPage page={legalPage} /> : <NotFoundPage />}
    </RootLayout>
  )
}
