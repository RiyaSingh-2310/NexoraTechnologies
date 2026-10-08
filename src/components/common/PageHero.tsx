import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { Reveal } from '@/components/common/Reveal'
import { cn } from '@/utils/cn'

type Props = {
  eyebrow?: string
  title: string
  description: string
  breadcrumbs?: { label: string; href?: string }[]
  actions?: ReactNode
  className?: string
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  className,
}: Props) {
  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-line bg-ink text-white',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-teal-bright/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-steel/30 blur-3xl" />
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        {breadcrumbs ? (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden>/</span> : null}
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-teal-bright">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/90">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <Reveal>
          {eyebrow ? (
            <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-teal-bright">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-4xl text-balance font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{description}</p>
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </Reveal>
      </div>
    </section>
  )
}

export function PageHeroCtas({
  primaryTo = '/contact',
  primaryLabel = 'Get Started',
  secondaryTo,
  secondaryLabel,
}: {
  primaryTo?: string
  primaryLabel?: string
  secondaryTo?: string
  secondaryLabel?: string
}) {
  return (
    <>
      <Button to={primaryTo} variant="inverse" size="lg">
        {primaryLabel}
      </Button>
      {secondaryTo && secondaryLabel ? (
        <Button to={secondaryTo} variant="secondary" size="lg" className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-ink">
          {secondaryLabel}
        </Button>
      ) : null}
    </>
  )
}
