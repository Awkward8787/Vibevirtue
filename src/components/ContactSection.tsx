import { Check, Copy } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/Button.tsx'
import { ButtonLink } from '@/components/ButtonLink.tsx'
import { Container } from '@/components/Container.tsx'
import { Section } from '@/components/Section.tsx'
import { SectionHeading } from '@/components/SectionHeading.tsx'
import { contact } from '@/data/contact.ts'
import { site } from '@/data/site.ts'
import { assertNever } from '@/utils/assertNever.ts'

type CopyStatus = 'idle' | 'copied' | 'failed'

function feedbackMessage(status: CopyStatus): string | null {
  switch (status) {
    case 'idle':
      return null
    case 'copied':
      return contact.copiedFeedback
    case 'failed':
      return contact.copyFailedFeedback
    default:
      return assertNever(status)
  }
}

export function ContactSection() {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle')

  useEffect(() => {
    if (copyStatus !== 'copied') {
      return
    }
    const timer = setTimeout(() => setCopyStatus('idle'), 2500)
    return () => clearTimeout(timer)
  }, [copyStatus])

  async function copyEmail() {
    if (!navigator.clipboard?.writeText) {
      setCopyStatus('failed')
      return
    }
    try {
      await navigator.clipboard.writeText(site.email)
      setCopyStatus('copied')
    } catch {
      setCopyStatus('failed')
    }
  }

  const feedback = feedbackMessage(copyStatus)

  return (
    <Section id="contact" aria-labelledby="contact-heading">
      <Container>
        <SectionHeading
          title={<span id="contact-heading">{contact.heading}</span>}
          description={contact.copy}
        />
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <ButtonLink href={contact.mailto}>{contact.emailCtaLabel}</ButtonLink>
          <Button variant="secondary" onClick={copyEmail}>
            {copyStatus === 'copied' ? (
              <Check className="mr-2 size-4 text-accent" aria-hidden="true" />
            ) : (
              <Copy className="mr-2 size-4" aria-hidden="true" />
            )}
            {contact.copyCtaLabel}
          </Button>
        </div>
        <p className="mt-6 text-text-secondary">
          Or write directly to{' '}
          <a
            href={contact.mailto}
            className="rounded-sm font-medium text-accent underline decoration-transparent underline-offset-4 hover:decoration-accent"
          >
            {site.email}
          </a>
        </p>
        <p aria-live="polite" className="mt-3 min-h-6 text-sm text-text-secondary">
          {feedback}
        </p>
      </Container>
    </Section>
  )
}
