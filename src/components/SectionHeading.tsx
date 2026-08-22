import type { ReactNode } from 'react'
import type { HeadingLevel } from '@/types/ui.ts'
import { assertNever } from '@/utils/assertNever.ts'
import { cn } from '@/utils/cn.ts'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  as?: HeadingLevel
  className?: string
}

function Heading({
  as,
  className,
  children,
}: {
  as: HeadingLevel
  className?: string
  children: ReactNode
}) {
  switch (as) {
    case 'h1':
      return <h1 className={className}>{children}</h1>
    case 'h2':
      return <h2 className={className}>{children}</h2>
    case 'h3':
      return <h3 className={className}>{children}</h3>
    case 'h4':
      return <h4 className={className}>{children}</h4>
    default:
      return assertNever(as)
  }
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  as = 'h2',
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn('max-w-2xl', className)}>
      {eyebrow ? (
        <p className="text-sm font-medium tracking-[0.16em] text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Heading as={as} className={cn(eyebrow ? 'mt-4' : null)}>
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-base text-text-secondary md:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  )
}
