import { Reveal } from '@/components/common/Reveal'
import type { Industry } from '@/types'
import { cn } from '@/utils/cn'

type Props = {
  industry: Industry
  index?: number
  className?: string
}

export function IndustryCard({ industry, index = 0, className }: Props) {
  return (
    <Reveal delay={index * 0.05} as="article" className={cn('h-full', className)} >
      <div
        id={industry.slug}
        
        className="flex h-full scroll-mt-28 flex-col rounded-2xl border border-line bg-white/90 p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-teal/30"
      >
        <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-teal">
          Industry
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{industry.title}</h3>
        <p className="mt-3 text-slate">{industry.shortDescription}</p>
        <div className="mt-5 space-y-4 text-sm">
          <div>
            <p className="font-semibold text-ink">Challenges</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate">
              {industry.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-ink">Our approach</p>
            <p className="mt-2 text-slate">{industry.approach}</p>
          </div>
          <div>
            <p className="font-semibold text-ink">Expected outcomes</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate">
              {industry.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {industry.technologies.map((tech) => (
            <span key={tech} className="rounded-lg bg-mist px-2.5 py-1 text-xs font-medium text-ink-soft">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
