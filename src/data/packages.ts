import { site } from '@/data/site.ts'
import type { ConsultingPackage } from '@/types/content.ts'
import { buildMailto } from '@/utils/mailto.ts'

export const packagesSection = {
  heading: 'Consulting Packages',
  disclaimer:
    'Final pricing depends on project scope, complexity, timeline, and required deliverables. Additional work will be discussed and approved before it is performed.',
} as const

export function packageMailto(pkg: ConsultingPackage): string {
  const body = [
    'Hello Anthony,',
    '',
    `I am interested in the ${pkg.name} package.`,
    '',
    'Name:',
    'Business or project:',
    'What I am working on:',
    'Preferred timeframe:',
    '',
    'Thank you.',
  ].join('\n')

  return buildMailto(site.email, pkg.emailSubject, body)
}

export const packages: readonly ConsultingPackage[] = [
  {
    id: 'free-discovery-call',
    name: 'Free Discovery Call',
    description:
      'A short call to understand your needs and confirm whether Vibe Virtue is the right fit.',
    price: 'Free',
    priceQualifier: null,
    duration: '15 minutes',
    intendedFor: 'Prospective clients deciding where to start',
    features: [
      'Brief needs discussion',
      'Fit assessment',
      'Recommended next step',
    ],
    featured: false,
    ctaLabel: 'Request a Discovery Call',
    emailSubject: 'Vibe Virtue Inquiry: Free Discovery Call',
    availability: 'available',
  },
  {
    id: 'strategy-consultation',
    name: 'Strategy Consultation',
    description:
      'A focused private session that turns your current challenge into clear recommendations.',
    price: '$150',
    priceQualifier: null,
    duration: '60 minutes',
    intendedFor: 'Entrepreneurs and owners who need focused direction',
    features: [
      'Private consultation',
      'Needs assessment',
      'Strategic recommendations',
      'Clear next steps',
    ],
    featured: true,
    ctaLabel: 'Request This Package',
    emailSubject: 'Vibe Virtue Inquiry: Strategy Consultation',
    availability: 'available',
  },
  {
    id: 'business-clarity-session',
    name: 'Business Clarity Session',
    description:
      'A longer working session to dig into your business and leave with a written summary.',
    price: '$250',
    priceQualifier: null,
    duration: '90 minutes',
    intendedFor: 'Owners who want a deeper review of an existing business',
    features: [
      'Business deep-dive',
      'Priority identification',
      'Offer or operational review',
      'Written action summary',
    ],
    featured: false,
    ctaLabel: 'Request This Package',
    emailSubject: 'Vibe Virtue Inquiry: Business Clarity Session',
    availability: 'available',
  },
  {
    id: 'launch-planning-package',
    name: 'Launch Planning Package',
    description:
      'Structured support for moving from an idea to an organized, scheduled launch.',
    price: '$500',
    priceQualifier: null,
    duration: null,
    intendedFor: 'Founders preparing to launch a new offer or venture',
    features: [
      'Two consulting sessions',
      'Offer development',
      'Target-client definition',
      'Pricing guidance',
      '30-day launch plan',
    ],
    featured: false,
    ctaLabel: 'Request This Package',
    emailSubject: 'Vibe Virtue Inquiry: Launch Planning Package',
    availability: 'available',
  },
  {
    id: 'business-growth-package',
    name: 'Business Growth Package',
    description:
      'A structured review of how your business sells and operates, with a roadmap to grow.',
    price: '$750',
    priceQualifier: null,
    duration: null,
    intendedFor: 'Established businesses ready to grow',
    features: [
      'Business review',
      'Sales strategy',
      'Customer-journey review',
      'Operational recommendations',
      '60-day roadmap',
    ],
    featured: false,
    ctaLabel: 'Request This Package',
    emailSubject: 'Vibe Virtue Inquiry: Business Growth Package',
    availability: 'available',
  },
  {
    id: 'brand-entertainment-strategy',
    name: 'Brand & Entertainment Strategy',
    description:
      'Positioning and planning support for creative brands, artists, and entertainment projects.',
    price: '$500',
    priceQualifier: 'Starting at',
    duration: null,
    intendedFor: 'Artists, creators, studios, and entertainment brands',
    features: [
      'Brand positioning',
      'Audience strategy',
      'Monetization direction',
      'Content or release planning',
      'Strategic roadmap',
    ],
    featured: false,
    ctaLabel: 'Request This Package',
    emailSubject: 'Vibe Virtue Inquiry: Brand & Entertainment Strategy',
    availability: 'available',
  },
  {
    id: 'ai-technology-consultation',
    name: 'AI & Technology Consultation',
    description:
      'Practical guidance for choosing and rolling out AI, automation, and digital systems.',
    price: '$300',
    priceQualifier: 'Starting at',
    duration: null,
    intendedFor: 'Teams choosing AI, automation, or digital platforms',
    features: [
      'Technology-needs assessment',
      'AI and automation recommendations',
      'Software or platform recommendations',
      'Implementation roadmap',
    ],
    featured: false,
    ctaLabel: 'Request This Package',
    emailSubject: 'Vibe Virtue Inquiry: AI & Technology Consultation',
    availability: 'available',
  },
  {
    id: 'custom-project-consulting',
    name: 'Custom Project Consulting',
    description:
      'A scoped engagement built around work that does not fit a standard package.',
    price: 'Custom quote',
    priceQualifier: null,
    duration: null,
    intendedFor: 'Projects that need a defined custom scope',
    features: [
      'Defined project scope',
      'Customized deliverables',
      'Timeline and fee proposal',
    ],
    featured: false,
    ctaLabel: 'Request This Package',
    emailSubject: 'Vibe Virtue Inquiry: Custom Project Consulting',
    availability: 'available',
  },
  {
    id: 'monthly-advisory',
    name: 'Monthly Advisory',
    description:
      'Ongoing strategic support with scheduled meetings and accountability between them.',
    price: '$750/month',
    priceQualifier: 'Starting at',
    duration: null,
    intendedFor: 'Clients who want ongoing strategic support',
    features: [
      'Scheduled advisory meetings',
      'Reasonable email support',
      'Strategy review',
      'Progress and accountability guidance',
    ],
    featured: false,
    ctaLabel: 'Request This Package',
    emailSubject: 'Vibe Virtue Inquiry: Monthly Advisory',
    availability: 'available',
  },
]
