import type { MouseEventHandler, ReactNode, ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'inverse'
type Size = 'sm' | 'md' | 'lg'

type CommonProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined }

type ButtonAsLink = CommonProps & {
  to: string
  type?: never
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

const variants: Record<Variant, string> = {
  primary:
    'bg-ink text-white shadow-[var(--shadow-soft)] hover:bg-ink-soft hover:-translate-y-0.5',
  secondary:
    'bg-white text-ink border border-line hover:border-teal hover:text-teal hover:-translate-y-0.5',
  ghost: 'bg-transparent text-ink hover:bg-mist',
  inverse: 'bg-teal-bright text-ink hover:bg-teal-soft hover:-translate-y-0.5',
}

const sizes: Record<Size, string> = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm sm:text-base',
  lg: 'px-6 py-3.5 text-base',
}

const base =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl font-display font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-bright disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0'

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('to' in props && props.to) {
    const { to, ...rest } = props
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
