import { site } from './site.ts'

export const seo = {
  siteUrl: site.url,
  home: {
    path: '/',
    title: 'Business, Entertainment & Technology Consulting | Vibe Virtue',
    description:
      'Vibe Virtue provides practical business, entertainment, brand, and technology consulting for entrepreneurs, creators, and growing organizations.',
  },
  socialImage: {
    path: '/social-card.png',
    width: 1200,
    height: 630,
    alt: 'Vibe Virtue — Business, Entertainment, and Technology consulting',
  },
  notFoundTitle: 'Page not found | Vibe Virtue',
} as const

export type PageSeo = {
  path: string
  title: string
  description: string
}

export const legalPageSeo: readonly PageSeo[] = [
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Vibe Virtue',
    description:
      'How the Vibe Virtue website handles information: no accounts, no database, no payment processing, and email contact you initiate voluntarily.',
  },
  {
    path: '/terms-and-conditions',
    title: 'Terms and Conditions | Vibe Virtue',
    description:
      'The terms that govern use of the Vibe Virtue website, including informational content, intellectual property, prohibited conduct, and liability.',
  },
  {
    path: '/consulting-disclaimer',
    title: 'Consulting Disclaimer | Vibe Virtue',
    description:
      'What Vibe Virtue website information does and does not provide, when a consulting relationship begins, and why outcomes are not guaranteed.',
  },
]
