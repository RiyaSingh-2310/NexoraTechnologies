import { Link } from 'react-router-dom'
import { company } from '@/data/company'
import { cn } from '@/utils/cn'

type Props = {
  className?: string
  variant?: 'light' | 'dark'
}

export function Logo({ className, variant = 'light' }: Props) {
  const isDark = variant === 'dark'
  return (
    <Link
      to="/"
      className={cn('inline-flex items-center gap-2.5', className)}
      aria-label={`${company.name} home`}
    >
      <span
        className={cn(
          'relative flex h-9 w-9 items-center justify-center rounded-xl',
          isDark ? 'bg-teal-bright text-ink' : 'bg-ink text-teal-bright',
        )}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M5 18V6l7 6 7-6v12h-2.5v-7.2L12 14.3 7.5 10.8V18H5z" />
          <circle cx="18.5" cy="5.5" r="1.6" />
        </svg>
      </span>
      <span className="font-display text-lg font-bold tracking-tight">
        <span className={isDark ? 'text-white' : 'text-ink'}>{company.shortName}</span>
        <span className={cn('ml-1 font-medium', isDark ? 'text-white/60' : 'text-slate')}>
          Tech
        </span>
      </span>
    </Link>
  )
}
