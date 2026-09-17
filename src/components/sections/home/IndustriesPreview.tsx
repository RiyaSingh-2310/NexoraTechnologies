import { Link } from 'react-router-dom'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import { industries } from '@/data/industries'

export function IndustriesPreview() {
  return (
    <section className="border-y border-line bg-ink py-16 text-white lg:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Industries"
          title="Domain fluency across high-stakes markets."
          description="We bring pattern recognition from FinTech, healthcare, commerce, logistics, and more."
          className="[&_h2]:text-white [&_p]:text-white/70"
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <Reveal key={industry.slug} delay={index * 0.04}>
              <Link
                to={`/industries#${industry.slug}`}
                className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-6 transition hover:border-teal-bright/40 hover:bg-white/10"
              >
                <h3 className="font-display text-lg font-semibold text-white">{industry.title}</h3>
                <p className="mt-2 text-sm text-white/65">{industry.shortDescription}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
