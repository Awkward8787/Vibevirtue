import type { HTMLAttributes } from 'react'
import type { SectionTone } from '@/types/ui.ts'
import { assertNever } from '@/utils/assertNever.ts'
import { cn } from '@/utils/cn.ts'

function toneClasses(tone: SectionTone): string {
  switch (tone) {
    case 'default':
      return 'bg-bg'
    case 'secondary':
      return 'bg-bg-secondary'
    default:
      return assertNever(tone)
  }
}

type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: SectionTone
}

export function Section({
  tone = 'default',
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn('py-section', toneClasses(tone), className)}
      {...props}
    />
  )
}
