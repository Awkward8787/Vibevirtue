import type { ButtonHTMLAttributes } from 'react'
import {
  buttonBaseClasses,
  buttonVariantClasses,
} from '@/components/buttonStyles.ts'
import type { ButtonVariant } from '@/types/ui.ts'
import { cn } from '@/utils/cn.ts'

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
      className={cn(buttonBaseClasses, buttonVariantClasses(variant), className)}
      {...props}
    />
  )
}
