import { Button } from '@/components/common/Button'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import { company } from '@/data/company'

export function AboutPreview() {
  return (
    <section className="container-page py-16 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <SectionHeading
          eyebrow="About Nexora"
          title="A product engineering partner built for serious delivery."
          description={company.description}
        />
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-line bg-white p-8 shadow-[var(--shadow-soft)]">
            <p className="text-lg leading-relaxed text-slate">
              From discovery workshops to production operations, we stay accountable for outcomes—not
              just tickets. Our teams blend design, engineering, cloud, and delivery leadership into
              one coherent practice.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-mist p-4">
                <p className="font-display text-2xl font-bold text-ink">2016</p>
                <p className="mt-1 text-sm text-slate">Founded in San Francisco</p>
              </div>
              <div className="rounded-2xl bg-teal-soft/70 p-4">
                <p className="font-display text-2xl font-bold text-ink">Senior-led</p>
                <p className="mt-1 text-sm text-slate">Practitioners on every engagement</p>
              </div>
            </div>
            <Button to="/about" variant="secondary" className="mt-6">
              Learn about us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
