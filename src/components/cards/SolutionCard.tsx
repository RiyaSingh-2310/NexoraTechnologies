import { Reveal } from '@/components/common/Reveal'
import type { Solution } from '@/types'
import { cn } from '@/utils/cn'

type Props = {
  solution: Solution
  index?: number
  className?: string
}

export function SolutionCard({ solution, index = 0, className }: Props) {
  return (
    <Reveal delay={index * 0.05} as="article" className={cn('h-full', className)}>
      <div
        id={solution.slug}
        className="flex h-full scroll-mt-28 flex-col rounded-2xl border border-line bg-gradient-to-br from-white to-mist/80 p-6 shadow-[var(--shadow-soft)]"
      >
        <h3 className="font-display text-2xl font-semibold text-ink">{solution.title}</h3>
        <p className="mt-3 text-slate">{solution.shortDescription}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-ink">Business challenges</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate">
              {solution.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Technology solutions</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate">
              {solution.technologies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-slate">
          <span className="font-semibold text-ink">Approach: </span>
          {solution.approach}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {solution.outcomes.map((outcome) => (
            <span
              key={outcome}
              className="rounded-full border border-teal/20 bg-teal-soft/60 px-3 py-1 text-xs font-medium text-teal"
            >
              {outcome}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
