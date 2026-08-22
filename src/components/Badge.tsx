import type { HTMLAttributes } from 'react'
import type { BadgeVariant } from '@/types/ui.ts'
import { assertNever } from '@/utils/assertNever.ts'
import { cn } from '@/utils/cn.ts'

function variantClasses(variant: BadgeVariant): string {
  switch (variant) {
    case 'default':
      return 'border-border text-text-secondary'
    case 'accent':
      return 'border-accent/50 text-accent'
    default:
      return assertNever(variant)
  }
}

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant
}

export function Badge({
  variant = 'default',
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium tracking-[0.08em] uppercase',
        variantClasses(variant),
        className,
      )}
      {...props}
    />
  )
}
