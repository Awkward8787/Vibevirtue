import { UserRound } from 'lucide-react'
import { Container } from '@/components/Container.tsx'
import { Section } from '@/components/Section.tsx'
import { SectionHeading } from '@/components/SectionHeading.tsx'
import { about } from '@/data/about.ts'
import { site } from '@/data/site.ts'

export function AboutSection() {
  return (
    <Section tone="secondary" id="about" aria-labelledby="about-heading">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_minmax(260px,340px)]">
          <div>
            <SectionHeading
              title={<span id="about-heading">{about.heading}</span>}
            />
            <p className="mt-6 max-w-2xl text-text-secondary">{about.copy}</p>
          </div>

          {/* Replace this placeholder with an optimized professional portrait. */}
          <figure
            className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-bg lg:mx-0"
            role="img"
            aria-label={`Portrait placeholder for ${site.consultant}`}
          >
            <div className="flex aspect-[4/5] flex-col items-center justify-center gap-4 p-8">
              <span className="flex size-20 items-center justify-center rounded-full border border-border bg-bg-secondary">
                <UserRound
                  className="size-10 text-text-secondary"
                  aria-hidden="true"
                />
              </span>
              <figcaption className="text-center">
                <p className="font-medium text-text">{site.consultant}</p>
                <p className="mt-1 text-sm text-text-secondary">
                  {about.portraitLabel}
                </p>
              </figcaption>
            </div>
          </figure>
        </div>
      </Container>
    </Section>
  )
}
