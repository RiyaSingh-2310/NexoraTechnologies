import { Check } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { Icon } from '@/components/common/Icon'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { SEO } from '@/components/common/SEO'
import { FinalCta } from '@/components/sections/FinalCta'
import { getServiceBySlug, services } from '@/data/services'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3)

  return (
    <>
      <SEO title={service.title} description={service.shortDescription} />
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
        actions={
          <>
            <Button to="/contact" variant="inverse" size="lg">
              Start a project
            </Button>
            <Button
              to="/case-studies"
              variant="secondary"
              size="lg"
              className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-ink"
            >
              See related work
            </Button>
          </>
        }
      />

      <section className="container-page grid gap-8 py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <Reveal>
            <div className="rounded-3xl border border-line bg-white p-8 shadow-[var(--shadow-soft)]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-soft text-teal">
                <Icon name={service.icon} className="h-6 w-6" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-ink">Key benefits</h2>
              <ul className="mt-5 space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-slate">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-line bg-white p-8 shadow-[var(--shadow-soft)]">
              <h2 className="font-display text-2xl font-semibold text-ink">Expected outcomes</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {service.outcomes.map((outcome) => (
                  <span
                    key={outcome}
                    className="rounded-full bg-mist px-4 py-2 text-sm font-medium text-ink-soft"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <aside className="rounded-3xl border border-line bg-ink p-8 text-white shadow-[var(--shadow-soft)] lg:sticky lg:top-28">
            <h2 className="font-display text-xl font-semibold">Technologies</h2>
            <ul className="mt-4 space-y-2">
              {service.technologies.map((tech) => (
                <li key={tech} className="rounded-xl bg-white/10 px-3 py-2 text-sm text-white/85">
                  {tech}
                </li>
              ))}
            </ul>
            <Button to="/contact" variant="inverse" className="mt-6 w-full">
              Discuss this service
            </Button>
          </aside>
        </Reveal>
      </section>

      <section className="bg-white/50 py-14">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold text-ink">Related services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="rounded-2xl border border-line bg-white p-5 transition hover:border-teal/40"
              >
                <p className="font-display font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-sm text-slate">{item.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
