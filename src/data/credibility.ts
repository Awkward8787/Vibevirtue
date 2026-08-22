import { BadgeCheck, Layers, UserCheck, Wrench } from 'lucide-react'
import type { CredibilityPoint } from '@/types/content.ts'

export const whySection = {
  heading: 'Why Vibe Virtue',
} as const

export const credibilityPoints: readonly CredibilityPoint[] = [
  {
    id: 'personalized-recommendations',
    title: 'Personalized recommendations',
    icon: UserCheck,
  },
  {
    id: 'practical-advice',
    title: 'Practical, implementation-focused advice',
    icon: Wrench,
  },
  {
    id: 'multi-industry-experience',
    title: 'Experience across multiple industries',
    icon: Layers,
  },
  {
    id: 'clear-scope-pricing',
    title: 'Clear scope and transparent pricing',
    icon: BadgeCheck,
  },
]
