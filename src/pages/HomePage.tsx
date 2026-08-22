import { AboutSection } from '@/components/AboutSection.tsx'
import { ButtonLink } from '@/components/ButtonLink.tsx'
import { ContactSection } from '@/components/ContactSection.tsx'
import { Container } from '@/components/Container.tsx'
import { FaqSection } from '@/components/FaqSection.tsx'
import { OutcomesSection } from '@/components/OutcomesSection.tsx'
import { PackagesSection } from '@/components/PackagesSection.tsx'
import { ProcessSection } from '@/components/ProcessSection.tsx'
import { Section } from '@/components/Section.tsx'
import { SectionHeading } from '@/components/SectionHeading.tsx'
import { ServicesSection } from '@/components/ServicesSection.tsx'
import { WhySection } from '@/components/WhySection.tsx'
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

      <OutcomesSection />

      <ServicesSection />

      <PackagesSection />

      <ProcessSection />

      <AboutSection />

      <WhySection />

      <FaqSection />

      <ContactSection />
    </>
  )
}
