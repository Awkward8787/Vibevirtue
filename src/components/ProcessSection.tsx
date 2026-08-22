import { Card } from '@/components/Card.tsx'
import { Container } from '@/components/Container.tsx'
import { Section } from '@/components/Section.tsx'
import { SectionHeading } from '@/components/SectionHeading.tsx'
import { processSection, processSteps } from '@/data/process.ts'

export function ProcessSection() {
  return (
    <Section>
      <Container>
        <SectionHeading title={processSection.heading} />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <li key={step.id}>
              <Card className="h-full">
                <p
                  className="flex size-10 items-center justify-center rounded-full border border-accent/50 font-heading text-base font-semibold text-accent"
                  aria-hidden="true"
                >
                  {index + 1}
                </p>
                <h3 className="mt-5 text-lg">{step.title}</h3>
                <p className="mt-3 text-text-secondary">{step.description}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
