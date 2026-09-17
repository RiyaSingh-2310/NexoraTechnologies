import { Icon } from '@/components/common/Icon'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import { differentiators } from '@/data/home'

export function WhyChooseUs() {
  return (
    <section className="container-page py-16 lg:py-20">
      <SectionHeading
        eyebrow="Why Nexora"
        title="Differentiators that show up in the work."
        description="We optimize for durable systems, clear communication, and measurable progress."
        align="center"
        className="mx-auto"
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-soft)]">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-teal-bright">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
