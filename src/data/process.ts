import type { ProcessStep } from '@/types/content.ts'

export const processSection = {
  heading: 'How It Works',
} as const

export const processSteps: readonly ProcessStep[] = [
  {
    id: 'send-inquiry',
    title: 'Send an Inquiry',
    description:
      'Tell us about your business, project, current challenge, and desired outcome.',
  },
  {
    id: 'confirm-service',
    title: 'Confirm the Right Service',
    description:
      'Vibe Virtue will review your needs and recommend the appropriate consultation or package.',
  },
  {
    id: 'schedule-consultation',
    title: 'Schedule Your Consultation',
    description:
      'Once the scope, fee, and availability are confirmed, the consultation will be scheduled.',
  },
]
