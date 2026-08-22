import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { ButtonLink } from '@/components/ButtonLink.tsx'
import { Container } from '@/components/Container.tsx'
import { consultation } from '@/data/consultation.ts'
import { navLinks } from '@/data/navigation.ts'
import { site } from '@/data/site.ts'
import { cn } from '@/utils/cn.ts'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) {
      return
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a
          href="/#top"
          className="rounded-sm font-heading text-lg font-bold tracking-tight text-text"
          onClick={closeMenu}
        >
          {site.name}
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm text-text-secondary hover:text-text motion-safe:transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={consultation.mailto}>
            {consultation.ctaLabel}
          </ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-10 cursor-pointer items-center justify-center rounded-lg border border-border text-text md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">
            {menuOpen ? 'Close menu' : 'Open menu'}
          </span>
          {menuOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </Container>

      <nav
        id="mobile-menu"
        aria-label="Main"
        className={cn(
          'border-t border-border bg-bg md:hidden',
          menuOpen ? 'block' : 'hidden',
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-base text-text-secondary hover:bg-bg-secondary hover:text-text"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href={consultation.mailto}
            className="mt-3"
            onClick={closeMenu}
          >
            {consultation.ctaLabel}
          </ButtonLink>
        </Container>
      </nav>
    </header>
  )
}
