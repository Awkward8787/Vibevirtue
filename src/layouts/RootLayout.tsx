import type { ReactNode } from 'react'

type RootLayoutProps = {
  children: ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-dvh bg-bg text-text">
      <main>{children}</main>
    </div>
  )
}
