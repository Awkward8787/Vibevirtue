import { CircleCheck } from 'lucide-react'
import { Badge } from '@/components/Badge.tsx'
import { Button } from '@/components/Button.tsx'
import { Card } from '@/components/Card.tsx'
import { Container } from '@/components/Container.tsx'
import { Section } from '@/components/Section.tsx'
import { SectionHeading } from '@/components/SectionHeading.tsx'
import { showcase } from '@/data/showcase.ts'
import { site } from '@/data/site.ts'
import { colorTokens } from '@/data/tokens.ts'
import type { HeadingLevel } from '@/types/ui.ts'
import { assertNever } from '@/utils/assertNever.ts'
import { cn } from '@/utils/cn.ts'

function HeadingSample({
  level,
  children,
}: {
  level: HeadingLevel
  children: string
}) {
  switch (level) {
    case 'h1':
      return <h1>{children}</h1>
    case 'h2':
      return <h2>{children}</h2>
    case 'h3':
      return <h3>{children}</h3>
    case 'h4':
      return <h4>{children}</h4>
    default:
      return assertNever(level)
  }
}

export function HomePage() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeading
            as="h1"
            eyebrow={showcase.eyebrow}
            title={showcase.title}
            description={showcase.description}
          />
          <p className="mt-8 flex items-center gap-2 text-text-secondary">
            <CircleCheck className="size-4 text-accent" aria-hidden="true" />
            {site.name}. {site.foundationMessage}
          </p>
        </Container>
      </Section>

      <Section tone="secondary">
        <Container>
          <SectionHeading title="Typography" />
          <div className="mt-12 grid gap-8">
            {showcase.headings.map((heading) => (
              <div key={heading.level}>
                <p className="mb-2 text-xs font-medium tracking-[0.14em] text-text-secondary uppercase">
                  {heading.level}
                </p>
                <HeadingSample level={heading.level}>
                  {heading.sample}
                </HeadingSample>
              </div>
            ))}
            <div>
              <p className="mb-2 text-xs font-medium tracking-[0.14em] text-text-secondary uppercase">
                Body
              </p>
              <p className="max-w-2xl">{showcase.body}</p>
              <p className="mt-3 max-w-2xl text-text-secondary">
                Secondary text stays quieter while remaining readable on both
                background surfaces.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="Buttons" />
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {showcase.buttons.map((button) => (
              <Button key={button.variant} variant={button.variant}>
                {button.label}
              </Button>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="secondary">
        <Container>
          <SectionHeading title="Cards" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {showcase.cards.map((card) => (
              <Card key={card.title}>
                <h3>{card.title}</h3>
                <p className="mt-3 text-text-secondary">{card.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="Badge" />
          <div className="mt-10 flex flex-wrap gap-3">
            {showcase.badges.map((badge) => (
              <Badge key={badge.variant} variant={badge.variant}>
                {badge.label}
              </Badge>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="secondary">
        <Container>
          <SectionHeading
            title="Color"
            description="Brand surfaces, type, accent, and border tokens."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {colorTokens.map((token) => (
              <li key={token.token}>
                <figure className="overflow-hidden rounded-2xl border border-border">
                  <div
                    className={cn('h-24 border-b border-border', token.swatchClass)}
                  />
                  <figcaption className="bg-bg px-4 py-3">
                    <p className="text-sm font-medium text-text">{token.name}</p>
                    <p className="mt-1 font-mono text-xs text-text-secondary">
                      {token.value}
                    </p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  )
}
