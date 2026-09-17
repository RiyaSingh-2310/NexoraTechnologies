import { AnimatedCounter } from '@/components/common/AnimatedCounter'
import { Reveal } from '@/components/common/Reveal'
import { company } from '@/data/company'

export function StatsSection() {
  return (
    <section className="container-page py-14 lg:py-16">
      <div className="grid gap-4 rounded-[2rem] border border-line bg-white p-6 shadow-[var(--shadow-soft)] sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
        {company.stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.05}>
            <div className="px-2 py-3 text-center lg:text-left">
              <p className="font-display text-4xl font-bold text-ink">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-slate">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
