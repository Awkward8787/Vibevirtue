import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn.ts'

type ContainerProps = HTMLAttributes<HTMLDivElement>

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto w-full max-w-content px-gutter', className)}
      {...props}
    />
  )
}
