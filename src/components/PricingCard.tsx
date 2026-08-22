import { Check } from 'lucide-react'
import { Badge } from '@/components/Badge.tsx'
import { ButtonLink } from '@/components/ButtonLink.tsx'
import { Card } from '@/components/Card.tsx'
import { packageMailto } from '@/data/packages.ts'
import type {
  ConsultingPackage,
  PackageAvailability,
} from '@/types/content.ts'
import { assertNever } from '@/utils/assertNever.ts'
import { cn } from '@/utils/cn.ts'

function availabilityNote(availability: PackageAvailability): string | null {
  switch (availability) {
    case 'available':
      return null
    case 'limited':
      return 'Limited availability'
    case 'waitlist':
      return 'Currently by waitlist'
    default:
      return assertNever(availability)
  }
}

type PricingCardProps = {
  pkg: ConsultingPackage
}

export function PricingCard({ pkg }: PricingCardProps) {
  const note = availabilityNote(pkg.availability)

  return (
    <Card
      className={cn(
        'flex h-full flex-col',
        pkg.featured && 'border-accent/60 hover:border-accent',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg">{pkg.name}</h3>
        {pkg.featured ? <Badge variant="accent">Most Popular</Badge> : null}
      </div>
      <p className="mt-2 text-sm text-text-secondary">{pkg.description}</p>

      <p className="mt-6 flex flex-wrap items-baseline gap-x-2">
        {pkg.priceQualifier ? (
          <span className="text-sm text-text-secondary">
            {pkg.priceQualifier}
          </span>
        ) : null}
        <span className="font-heading text-3xl font-semibold tracking-tight">
          {pkg.price}
        </span>
      </p>
      {pkg.duration ? (
        <p className="mt-1 text-sm text-text-secondary">{pkg.duration}</p>
      ) : null}

      <p className="mt-4 text-sm text-text-secondary">
        Intended for: {pkg.intendedFor}
      </p>
      {note ? <p className="mt-2 text-sm text-accent">{note}</p> : null}

      <ul className="mt-6 space-y-2.5">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check
              className="mt-0.5 size-4 shrink-0 text-accent"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <ButtonLink
          href={packageMailto(pkg)}
          variant={pkg.featured ? 'primary' : 'secondary'}
          className="w-full"
        >
          {pkg.ctaLabel}
        </ButtonLink>
      </div>
    </Card>
  )
}
