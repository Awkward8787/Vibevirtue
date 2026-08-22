import { site } from '@/data/site.ts'
import { buildMailto } from '@/utils/mailto.ts'

const subject = 'Vibe Virtue Consulting Inquiry'

const body = [
  'Hello Anthony,',
  '',
  'I am interested in learning more about Vibe Virtue consulting.',
  '',
  'Name:',
  'Business or organization:',
  'Website or social media:',
  'Package or service of interest:',
  'What I am currently working on:',
  'My main challenge:',
  'What I would like to accomplish:',
  'Preferred consultation timeframe:',
  'Preferred contact method:',
  '',
  'Thank you.',
].join('\n')

export const contact = {
  heading: "Let's Talk About What You're Building",
  copy: 'Tell us what you are working on, where you are currently stuck, and what you would like to accomplish.',
  emailCtaLabel: 'Email Anthony',
  copyCtaLabel: 'Copy Email Address',
  copiedFeedback: 'Email address copied.',
  copyFailedFeedback:
    'Copying is unavailable in this browser. Please copy the address manually.',
  mailto: buildMailto(site.email, subject, body),
} as const
