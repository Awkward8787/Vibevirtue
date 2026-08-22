import { CircleCheck } from 'lucide-react'
import { Container } from '@/components/Container.tsx'
import { Section } from '@/components/Section.tsx'
import { SectionHeading } from '@/components/SectionHeading.tsx'
import { outcomes } from '@/data/outcomes.ts'

export function OutcomesSection() {
  return (
    <Section tone="secondary">
      <Container>
        <SectionHeading title={outcomes.heading} description={outcomes.copy} />
        <ul className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {outcomes.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CircleCheck
                className="mt-1 size-5 shrink-0 text-accent"
                aria-hidden="true"
              />
              <span className="text-text">{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
