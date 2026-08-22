import { ButtonLink } from '@/components/ButtonLink.tsx'
import { Container } from '@/components/Container.tsx'
import { Section } from '@/components/Section.tsx'
import { SectionHeading } from '@/components/SectionHeading.tsx'

export function NotFoundPage() {
  return (
    <Section>
      <Container>
        <SectionHeading
          as="h1"
          title="Page not found"
          description="The page you are looking for does not exist or may have moved."
        />
        <div className="mt-8">
          <ButtonLink href="/">Back to home</ButtonLink>
        </div>
      </Container>
    </Section>
  )
}
