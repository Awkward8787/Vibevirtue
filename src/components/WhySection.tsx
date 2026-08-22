import { Card } from '@/components/Card.tsx'
import { Container } from '@/components/Container.tsx'
import { Section } from '@/components/Section.tsx'
import { SectionHeading } from '@/components/SectionHeading.tsx'
import { credibilityPoints, whySection } from '@/data/credibility.ts'

export function WhySection() {
  return (
    <Section>
      <Container>
        <SectionHeading title={whySection.heading} />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {credibilityPoints.map((point) => (
            <li key={point.id}>
              <Card className="flex h-full items-center gap-4 p-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-bg">
                  <point.icon
                    className="size-5 text-accent"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="text-base font-medium">{point.title}</h3>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
