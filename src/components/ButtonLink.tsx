import type { AnchorHTMLAttributes } from 'react'
import {
  buttonBaseClasses,
  buttonVariantClasses,
} from '@/components/buttonStyles.ts'
import type { ButtonVariant } from '@/types/ui.ts'
import { cn } from '@/utils/cn.ts'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant
}

export function ButtonLink({
  variant = 'primary',
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(buttonBaseClasses, buttonVariantClasses(variant), className)}
      {...props}
    />
  )
}
