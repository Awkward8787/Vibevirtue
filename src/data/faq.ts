import type { FaqItem } from '@/types/content.ts'

export const faqSection = {
  heading: 'Frequently Asked Questions',
} as const

export const faqItems: readonly FaqItem[] = [
  {
    id: 'free-consultation',
    question: 'Do you offer a free consultation?',
    answer:
      'A free 15-minute discovery call is available to determine whether Vibe Virtue is the right fit. Detailed recommendations are provided through a paid consultation.',
  },
  {
    id: 'virtual-or-in-person',
    question: 'Are consultations virtual or in person?',
    answer:
      'Consultations are available virtually. In-person availability depends on location and project requirements.',
  },
  {
    id: 'new-businesses',
    question: 'Do you work with new businesses?',
    answer:
      'Yes. Vibe Virtue works with early-stage entrepreneurs as well as established businesses and organizations.',
  },
  {
    id: 'implementation',
    question: 'Will you implement the recommendations?',
    answer:
      'Implementation may be available and is quoted separately based on project requirements.',
  },
  {
    id: 'refunds',
    question: 'Are consulting fees refundable?',
    answer:
      'Fees, cancellations, and rescheduling are governed by the service agreement provided before a paid engagement begins.',
  },
  {
    id: 'guarantees',
    question: 'Do you guarantee results?',
    answer:
      'No. Vibe Virtue provides professional recommendations, but results depend on client decisions, execution, market conditions, and other factors.',
  },
]
