import type { BadgeVariant, ButtonVariant, HeadingLevel } from '@/types/ui.ts'

export const showcase = {
  eyebrow: 'Phase 2',
  title: 'Design system',
  description:
    'Temporary component showcase for tokens, type, and reusable UI. Navigation, hero, pricing, FAQ, and footer are not included yet.',
  body:
    'Body copy uses Inter at a readable size with generous line height. Secondary text is reserved for supporting detail, captions, and quieter labels.',
  headings: [
    { level: 'h1' as HeadingLevel, sample: 'Heading one' },
    { level: 'h2' as HeadingLevel, sample: 'Heading two' },
    { level: 'h3' as HeadingLevel, sample: 'Heading three' },
    { level: 'h4' as HeadingLevel, sample: 'Heading four' },
  ],
  buttons: [
    { variant: 'primary' as ButtonVariant, label: 'Primary' },
    { variant: 'secondary' as ButtonVariant, label: 'Secondary' },
    { variant: 'text-link' as ButtonVariant, label: 'Text link' },
  ],
  cards: [
    {
      title: 'Quiet surface',
      body: 'Cards sit on the secondary background with a thin border and room to breathe.',
    },
    {
      title: 'Grouped content',
      body: 'Use cards to collect related information without adding extra visual noise.',
    },
  ],
  badges: [
    { variant: 'default' as BadgeVariant, label: 'Default' },
    { variant: 'accent' as BadgeVariant, label: 'Accent' },
  ],
} as const
