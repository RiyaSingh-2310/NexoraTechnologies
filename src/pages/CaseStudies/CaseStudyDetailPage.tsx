import { Navigate, useParams } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { SEO } from '@/components/common/SEO'
import { FinalCta } from '@/components/sections/FinalCta'
import { getCaseStudyBySlug } from '@/data/caseStudies'

export default function CaseStudyDetailPage() {
  const { slug } = useParams()
  const study = slug ? getCaseStudyBySlug(slug) : undefined

  if (!study) {
    return <Navigate to="/case-studies" replace />
  }

  return (
    <>
      <SEO title={study.title} description={study.summary} />
      <PageHero
        eyebrow={study.industry}
        title={study.title}
        description={study.summary}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Case Studies', href: '/case-studies' },
          { label: study.client },
        ]}
        actions={
          <Button to="/contact" variant="inverse" size="lg">
            Discuss a similar project
          </Button>
        }
      />

      <section className="container-page py-16">
        <Reveal>
          <div
            className="relative mb-10 overflow-hidden rounded-[2rem] border border-line"
            style={{ background: `linear-gradient(135deg, ${study.accent}, #0b1f33)` }}
          >
            <div className="bg-grid absolute inset-0 opacity-25" />
            <div className="relative aspect-[21/9] min-h-[220px] p-8 text-white sm:p-10">
              <p className="font-display text-sm uppercase tracking-[0.16em] text-white/70">
                Visual preview · {study.client}
              </p>
              <p className="mt-4 max-w-xl font-display text-3xl font-bold">
                A product surface shaped for operators under pressure.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2 space-y-6">
            <article className="rounded-3xl border border-line bg-white p-8 shadow-[var(--shadow-soft)]">
              <h2 className="font-display text-2xl font-semibold text-ink">Challenge</h2>
              <p className="mt-4 leading-relaxed text-slate">{study.challenge}</p>
            </article>
            <article className="rounded-3xl border border-line bg-white p-8 shadow-[var(--shadow-soft)]">
              <h2 className="font-display text-2xl font-semibold text-ink">Solution</h2>
              <p className="mt-4 leading-relaxed text-slate">{study.solution}</p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <aside className="space-y-6">
              <div className="rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-soft)]">
                <h2 className="font-display text-lg font-semibold text-ink">Results</h2>
                <ul className="mt-4 space-y-3">
                  {study.results.map((result) => (
                    <li key={result.label} className="rounded-xl bg-mist px-4 py-3">
                      <p className="font-display text-2xl font-bold text-teal">{result.value}</p>
                      <p className="text-sm text-slate">{result.label}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-line bg-ink p-6 text-white">
                <h2 className="font-display text-lg font-semibold">Technologies</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <span key={tech} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
      <FinalCta />
    </>
  )
}
