import { MapPin, Briefcase } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { Reveal } from '@/components/common/Reveal'
import type { Job } from '@/types'

type Props = {
  job: Job
  index?: number
  onApply: (job: Job) => void
}

export function JobCard({ job, index = 0, onApply }: Props) {
  return (
    <Reveal delay={index * 0.05} as="article">
      <div className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-soft)] transition-all hover:border-teal/30">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">{job.title}</h3>
            <p className="mt-2 text-sm text-slate">{job.department}</p>
          </div>
          <Button type="button" size="sm" onClick={() => onApply(job)}>
            Apply
          </Button>
        </div>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-teal" aria-hidden />
            {job.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Briefcase className="h-4 w-4 text-teal" aria-hidden />
            {job.type} · {job.experience}
          </span>
        </div>
        <p className="mt-4 text-slate">{job.description}</p>
      </div>
    </Reveal>
  )
}
