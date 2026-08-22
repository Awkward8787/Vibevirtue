import { site } from '@/data/site.ts'
import { buildMailto } from '@/utils/mailto.ts'

const subject = 'Vibe Virtue Consultation Inquiry'

const body = [
  'Hello Anthony,',
  '',
  'I would like to request a consultation.',
  '',
  'Name:',
  'Business or project:',
  'What I need help with:',
  'Preferred timeframe:',
  '',
  'Thank you.',
].join('\n')

export const consultation = {
  ctaLabel: 'Request a Consultation',
  mailto: buildMailto(site.email, subject, body),
} as const
