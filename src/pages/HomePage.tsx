import { CircleCheck } from 'lucide-react'
import { Button } from '@/components/Button.tsx'
import { Container } from '@/components/Container.tsx'
import { site } from '@/data/site.ts'

export function HomePage() {
  return (
    <Container className="flex min-h-dvh flex-col justify-center py-16">
      <p className="text-sm font-medium text-ink-muted">Foundation</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink">
        {site.name}
      </h1>
      <p className="mt-3 flex items-center gap-2 text-ink-muted">
        <CircleCheck className="size-4 text-brand" aria-hidden="true" />
        {site.foundationMessage}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </Container>
  )
}
