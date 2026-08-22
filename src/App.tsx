import { LegalPage } from '@/components/LegalPage.tsx'
import { legalPages } from '@/data/legal.ts'
import { RootLayout } from '@/layouts/RootLayout.tsx'
import { HomePage } from '@/pages/HomePage.tsx'
import { NotFoundPage } from '@/pages/NotFoundPage.tsx'

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

  if (path === '/') {
    return (
      <RootLayout>
        <HomePage />
      </RootLayout>
    )
  }

  const legalPage = legalPages.find((page) => `/${page.slug}` === path)

  return (
    <RootLayout>
      {legalPage ? <LegalPage page={legalPage} /> : <NotFoundPage />}
    </RootLayout>
  )
}
