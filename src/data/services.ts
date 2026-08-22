import {
  Clapperboard,
  Cpu,
  Puzzle,
  Rocket,
  TrendingUp,
  Workflow,
} from 'lucide-react'
import type { Service } from '@/types/content.ts'

export const servicesSection = {
  heading: 'Consulting Services',
} as const

export const services: Service[] = [
  {
    id: 'business-strategy',
    title: 'Business Strategy',
    description:
      'Business models, pricing, offers, planning, and growth direction.',
    icon: TrendingUp,
  },
  {
    id: 'startup-launch-planning',
    title: 'Startup and Launch Planning',
    description: 'Guidance for moving from an idea to an organized launch.',
    icon: Rocket,
  },
  {
    id: 'brand-entertainment-consulting',
    title: 'Brand and Entertainment Consulting',
    description:
      'Strategy for artists, creators, studios, and entertainment brands.',
    icon: Clapperboard,
  },
  {
    id: 'ai-technology-strategy',
    title: 'AI and Technology Strategy',
    description:
      'Practical recommendations for AI, automation, websites, and digital systems.',
    icon: Cpu,
  },
  {
    id: 'operations-project-planning',
    title: 'Operations and Project Planning',
    description:
      'Workflows, priorities, implementation plans, and organizational improvements.',
    icon: Workflow,
  },
  {
    id: 'custom-consulting',
    title: 'Custom Consulting',
    description:
      'Personalized support for projects that do not fit a standard package.',
    icon: Puzzle,
  },
]
