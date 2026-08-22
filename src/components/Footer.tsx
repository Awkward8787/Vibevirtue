import { Container } from '@/components/Container.tsx'
import { legalPages } from '@/data/legal.ts'
import { navLinks } from '@/data/navigation.ts'
import { site } from '@/data/site.ts'

const footerLinkClasses =
  'rounded-sm text-sm text-text-secondary hover:text-text motion-safe:transition-colors'

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="font-heading text-lg font-bold tracking-tight text-text">
              {site.name}
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              {site.consultant}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 inline-block rounded-sm text-sm text-accent underline decoration-transparent underline-offset-4 hover:decoration-accent"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={footerLinkClasses}>
                {link.label}
              </a>
            ))}
          </nav>

          <nav aria-label="Legal" className="flex flex-col gap-2">
            {legalPages.map((page) => (
              <a
                key={page.slug}
                href={`/${page.slug}/`}
                className={footerLinkClasses}
              >
                {page.title}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-sm text-text-secondary">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
