import { Card } from '@/components/Card.tsx'
import { Container } from '@/components/Container.tsx'
import { Section } from '@/components/Section.tsx'
import { SectionHeading } from '@/components/SectionHeading.tsx'
import { services, servicesSection } from '@/data/services.ts'

export function ServicesSection() {
  return (
    <Section id="services" aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          title={<span id="services-heading">{servicesSection.heading}</span>}
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.id}>
              <Card className="h-full">
                <div className="flex size-11 items-center justify-center rounded-lg border border-border bg-bg">
                  <service.icon
                    className="size-5 text-accent"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5">{service.title}</h3>
                <p className="mt-3 text-text-secondary">
                  {service.description}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
