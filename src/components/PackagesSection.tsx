import { Container } from '@/components/Container.tsx'
import { PricingCard } from '@/components/PricingCard.tsx'
import { Section } from '@/components/Section.tsx'
import { SectionHeading } from '@/components/SectionHeading.tsx'
import { packages, packagesSection } from '@/data/packages.ts'

export function PackagesSection() {
  return (
    <Section tone="secondary" id="packages" aria-labelledby="packages-heading">
      <Container>
        <SectionHeading
          title={<span id="packages-heading">{packagesSection.heading}</span>}
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg) => (
            <li key={pkg.id}>
              <PricingCard pkg={pkg} />
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-3xl text-sm text-text-secondary">
          {packagesSection.disclaimer}
        </p>
      </Container>
    </Section>
  )
}
