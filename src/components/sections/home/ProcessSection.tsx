import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import { processSteps } from '@/data/home'

export function ProcessSection() {
  return (
    <section className="container-page py-16 lg:py-20">
      <SectionHeading
        eyebrow="Process"
        title="A delivery rhythm designed for clarity."
        description="Seven stages from first conversation to sustained scale—each with tangible outputs."
      />
      <div className="relative mt-12">
        <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-teal via-line to-transparent md:left-1/2 md:block" />
        <ol className="space-y-5">
          {processSteps.map((step, index) => (
            <li key={step.title} className="relative">
              <Reveal delay={index * 0.04}>
                <div
                  className={`relative grid gap-4 md:grid-cols-2 md:gap-10 ${
                    index % 2 === 1 ? 'md:text-right' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                    <div className="rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-soft)] md:inline-block md:min-w-[85%]">
                      <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                        Step {step.step}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-semibold text-ink">{step.title}</h3>
                      <p className="mt-2 text-sm text-slate">{step.description}</p>
                    </div>
                  </div>
                  <span className="absolute left-4 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-teal shadow md:left-1/2 md:block" />
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
