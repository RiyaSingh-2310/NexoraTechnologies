import { Reveal } from '@/components/common/Reveal'
import { trustedBrands } from '@/data/home'

export function TrustedCompanies() {
  return (
    <section className="border-b border-line bg-white/60 py-12">
      <div className="container-page">
        <Reveal>
          <p className="text-center font-display text-xs font-semibold uppercase tracking-[0.18em] text-slate">
            Trusted by product and platform teams
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {trustedBrands.map((brand, index) => (
            <Reveal key={brand} delay={index * 0.04}>
              <div className="flex h-14 items-center justify-center rounded-xl border border-line bg-mist/70 px-3 text-center font-display text-sm font-semibold text-ink-soft">
                {brand}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
