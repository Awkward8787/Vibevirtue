import { ButtonLink } from '@/components/ButtonLink.tsx'
import { Container } from '@/components/Container.tsx'
import { Section } from '@/components/Section.tsx'
import { SectionHeading } from '@/components/SectionHeading.tsx'
import { consultation } from '@/data/consultation.ts'
import { hero } from '@/data/hero.ts'

export function HomePage() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeading
            as="h1"
            eyebrow={hero.eyebrow}
            title={hero.headline}
            description={hero.copy}
            className="max-w-3xl"
          />
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href={consultation.mailto}>
              {consultation.ctaLabel}
            </ButtonLink>
            <ButtonLink variant="secondary" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-text-secondary">{hero.note}</p>
        </Container>
      </Section>

      <Section tone="secondary" id="packages" aria-labelledby="packages-heading">
        <Container>
          <SectionHeading
            title={<span id="packages-heading">Consulting Packages</span>}
            description="Package details are coming in a later phase. In the meantime, request a consultation to discuss what you are working on."
          />
        </Container>
      </Section>
    </>
  )
}
