import { ArrowLeft, Scale } from 'lucide-react'
import { ButtonLink } from '@/components/ButtonLink.tsx'
import { Container } from '@/components/Container.tsx'
import { Section } from '@/components/Section.tsx'
import { legalNotice } from '@/data/legal.ts'
import type { LegalPageContent } from '@/types/content.ts'

type LegalPageProps = {
  page: LegalPageContent
}

export function LegalPage({ page }: LegalPageProps) {
  return (
    <Section>
      <Container className="max-w-3xl">
        <p className="flex items-start gap-3 rounded-2xl border border-accent/40 bg-bg-secondary p-4 text-sm text-text-secondary">
          <Scale className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
          {legalNotice}
        </p>

        <h1 className="mt-10">{page.title}</h1>
        <p className="mt-4 text-text-secondary">{page.intro}</p>

        {page.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-text-secondary">
                {paragraph}
              </p>
            ))}
            {section.items ? (
              <ul className="mt-3 list-disc space-y-1.5 pl-6 text-text-secondary">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <div className="mt-12">
          <ButtonLink variant="secondary" href="/">
            <ArrowLeft className="mr-2 size-4" aria-hidden="true" />
            Back to home
          </ButtonLink>
        </div>
      </Container>
    </Section>
  )
}
