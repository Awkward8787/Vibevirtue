import type { ReactNode } from 'react'
import { Footer } from '@/components/Footer.tsx'
import { Header } from '@/components/Header.tsx'

type RootLayoutProps = {
  children: ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div id="top" className="flex min-h-dvh flex-col bg-bg text-text">
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-100 focus-visible:rounded-lg focus-visible:bg-accent focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-bg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
