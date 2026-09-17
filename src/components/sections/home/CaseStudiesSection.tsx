import { Button } from '@/components/common/Button'
import { SectionHeading } from '@/components/common/SectionHeading'
import { CaseStudyCard } from '@/components/cards/CaseStudyCard'
import { caseStudies } from '@/data/caseStudies'

export function CaseStudiesSection() {
  return (
    <section className="bg-white/50 py-16 lg:py-20">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Case Studies"
            title="Selected work across industries."
            description="Fictionalized composites inspired by the kinds of outcomes our engagements produce."
          />
          <Button to="/case-studies" variant="secondary" className="shrink-0 self-start">
            View all
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.slice(0, 3).map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
