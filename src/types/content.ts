import type { LucideIcon } from 'lucide-react'

export type Service = {
  id: string
  title: string
  description: string
  icon: LucideIcon
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
