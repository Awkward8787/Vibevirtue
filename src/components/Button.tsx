import type { ButtonHTMLAttributes } from 'react'
import type { ButtonVariant } from '@/types/ui.ts'
import { assertNever } from '@/utils/assertNever.ts'
import { cn } from '@/utils/cn.ts'

const baseClasses =
  'inline-flex h-9 items-center justify-center rounded-lg px-3.5 text-[13px] font-medium tracking-[-0.01em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-50'

function variantClasses(variant: ButtonVariant): string {
  switch (variant) {
    case 'primary':
      return 'bg-brand text-white hover:bg-brand-hover active:bg-brand-active'
    case 'secondary':
      return 'border border-line bg-surface text-ink hover:bg-canvas active:bg-line/40'
    default:
      return assertNever(variant)
  }
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

export function Button({
  variant = 'primary',
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(baseClasses, variantClasses(variant), className)}
      {...props}
    />
  )
}
