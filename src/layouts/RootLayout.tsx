import type { ReactNode } from 'react'

type RootLayoutProps = {
  children: ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-dvh bg-canvas text-ink">
      <main>{children}</main>
    </div>
  )
}
