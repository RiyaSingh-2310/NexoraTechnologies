import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Icon } from '@/components/common/Icon'
import { Reveal } from '@/components/common/Reveal'
import type { Service } from '@/types'
import { cn } from '@/utils/cn'

type Props = {
  service: Service
  index?: number
  className?: string
}

export function ServiceCard({ service, index = 0, className }: Props) {
  return (
    <Reveal delay={index * 0.05} className={cn('h-full', className)}>
      <Link
        to={`/services/${service.slug}`}
        className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[var(--shadow-lift)]"
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-soft text-teal transition-colors group-hover:bg-teal group-hover:text-white">
          <Icon name={service.icon} className="h-5 w-5" />
        </div>
        <h3 className="font-display text-xl font-semibold text-ink">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate sm:text-base">
          {service.shortDescription}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </Reveal>
  )
}
