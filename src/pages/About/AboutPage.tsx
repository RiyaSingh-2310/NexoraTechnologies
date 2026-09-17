import { SEO } from '@/components/common/SEO'
import { PageHero, PageHeroCtas } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import { FinalCta } from '@/components/sections/FinalCta'
import { aboutContent, expertise, journey, team } from '@/data/about'

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Nexora Technologies—our mission, values, leadership, and journey building digital products that scale."
      />
      <PageHero
        eyebrow="About Us"
        title="Built to close the gap between vision and reliable software."
        description={aboutContent.intro}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
        actions={<PageHeroCtas secondaryTo="/careers" secondaryLabel="Join the team" />}
      />

      <section className="container-page grid gap-6 py-16 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-line bg-white p-8 shadow-[var(--shadow-soft)]">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-teal">
              Mission
            </p>
            <p className="mt-4 text-xl leading-relaxed text-ink">{aboutContent.mission}</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full rounded-3xl border border-line bg-ink p-8 text-white shadow-[var(--shadow-soft)]">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-teal-bright">
              Vision
            </p>
            <p className="mt-4 text-xl leading-relaxed text-white/85">{aboutContent.vision}</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-white/50 py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Values"
            title="Principles that shape every engagement."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {aboutContent.values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.05}>
                <div className="rounded-2xl border border-line bg-white p-6">
                  <h3 className="font-display text-xl font-semibold text-ink">{value.title}</h3>
                  <p className="mt-2 text-slate">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading eyebrow="Leadership" title="Operators who still stay close to the work." />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.05}>
              <article className="rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-soft)]">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-ink font-display text-xl font-bold text-white">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-teal">{member.role}</p>
                <p className="mt-3 text-sm text-slate">{member.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-mist/80 py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Journey" title="A decade of focused growth." />
          <ol className="mt-10 space-y-4">
            {journey.map((event, index) => (
              <Reveal key={event.year} delay={index * 0.04} as="li">
                <div className="grid gap-3 rounded-2xl border border-line bg-white p-5 md:grid-cols-[6rem_1fr] md:items-start">
                  <p className="font-display text-lg font-bold text-teal">{event.year}</p>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{event.title}</h3>
                    <p className="mt-1 text-slate">{event.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Expertise"
          title="Technology depth clients rely on."
          description="Why clients choose us: senior ownership, transparent delivery, and platforms that remain operable years later."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <div className="rounded-xl border border-line bg-white px-4 py-4 text-sm font-medium text-ink-soft">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  )
}
