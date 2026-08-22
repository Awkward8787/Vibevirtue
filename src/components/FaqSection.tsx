import { Accordion } from '@/components/Accordion.tsx'
import { Container } from '@/components/Container.tsx'
import { Section } from '@/components/Section.tsx'
import { SectionHeading } from '@/components/SectionHeading.tsx'
import { faqItems, faqSection } from '@/data/faq.ts'

export function FaqSection() {
  return (
    <Section tone="secondary" id="faq" aria-labelledby="faq-heading">
      <Container>
        <SectionHeading
          title={<span id="faq-heading">{faqSection.heading}</span>}
        />
        <div className="mt-12 max-w-4xl">
          <Accordion items={faqItems} />
        </div>
      </Container>
    </Section>
  )
}
