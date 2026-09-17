import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '@/components/common/Reveal'
import type { CaseStudy } from '@/types'
import { cn } from '@/utils/cn'

type Props = {
  study: CaseStudy
  index?: number
  className?: string
}
export function CaseStudyCard({ study, index = 0, className }: Props) {
  return (
    <Reveal delay={index * 0.06} className={cn('h-full', className)}>
      <Link
        to={`/case-studies/${study.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
      >
        <div
          className="relative aspect-[16/10] overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${study.accent} 0%, #0b1f33 70%)`,
          }}
        >
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 flex items-end p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                {study.industry}
              </p>
              <p className="mt-2 font-display text-2xl font-bold text-white">{study.client}</p>
            </div>
          </div>
          <div className="absolute right-4 top-4 rounded-full bg-white/15 p-2 text-white backdrop-blur">
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-semibold text-ink">{study.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{study.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {study.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-mist px-2.5 py-1 text-xs font-medium text-ink-soft"
              >
                {tech}
              </span>
            ))}
          </div>
          <span className="mt-5 text-sm font-semibold text-teal">View case study</span>
        </div>
      </Link>
    </Reveal>
  )
}
