import type { LucideIcon } from 'lucide-react'

export type Service = {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export type ProcessStep = {
  id: string
  title: string
  description: string
}

export type CredibilityPoint = {
  id: string
  title: string
  icon: LucideIcon
}

export type FaqItem = {
  id: string
  question: string
  answer: string
}

export type LegalSection = {
  heading: string
  paragraphs: readonly string[]
  items?: readonly string[]
}

export type LegalPageContent = {
  slug: string
  title: string
  intro: string
  sections: readonly LegalSection[]
}

export type PackageAvailability = 'available' | 'limited' | 'waitlist'

export type ConsultingPackage = {
  id: string
  name: string
  description: string
  price: string
  priceQualifier: string | null
  duration: string | null
  intendedFor: string
  features: readonly string[]
  featured: boolean
  ctaLabel: string
  emailSubject: string
  availability: PackageAvailability
}
