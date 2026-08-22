import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn.ts'

type CardProps = HTMLAttributes<HTMLDivElement>

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-bg-secondary p-6 md:p-8 motion-safe:transition-colors hover:border-accent/40',
        className,
      )}
      {...props}
    />
  )
}
