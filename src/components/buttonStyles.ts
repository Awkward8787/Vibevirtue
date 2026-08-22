import type { ButtonVariant } from '@/types/ui.ts'
import { assertNever } from '@/utils/assertNever.ts'

export const buttonBaseClasses =
  'inline-flex items-center justify-center font-medium tracking-[-0.01em] cursor-pointer disabled:pointer-events-none disabled:opacity-50 motion-safe:transition-colors'

export function buttonVariantClasses(variant: ButtonVariant): string {
  switch (variant) {
    case 'primary':
      return 'h-11 rounded-lg bg-accent px-5 text-sm text-bg hover:bg-accent-hover active:bg-accent'
    case 'secondary':
      return 'h-11 rounded-lg border border-border bg-transparent px-5 text-sm text-text hover:border-accent/40 hover:bg-bg-secondary active:bg-bg-secondary'
    case 'text-link':
      return 'h-auto rounded-sm bg-transparent px-0 text-sm text-accent underline decoration-transparent underline-offset-4 hover:decoration-accent active:text-accent-hover'
    default:
      return assertNever(variant)
  }
}
