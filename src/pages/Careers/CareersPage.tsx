import { useState, type FormEvent } from 'react'
import { Button } from '@/components/common/Button'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { SEO } from '@/components/common/SEO'
import { SectionHeading } from '@/components/common/SectionHeading'
import { JobCard } from '@/components/cards/JobCard'
import { FinalCta } from '@/components/sections/FinalCta'
import { careerBenefits, jobs } from '@/data/careers'
import { useMockSubmit } from '@/hooks/useMockSubmit'
import type { Job } from '@/types'

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [form, setForm] = useState({ name: '', email: '', portfolio: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { status, submit, reset, isLoading } = useMockSubmit({ failRate: 0.05 })

  function validate() {
    const next: Record<string, string> = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.includes('@')) next.email = 'Enter a valid email'
    if (form.message.trim().length < 20) next.message = 'Tell us a bit more (20+ characters)'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    await submit()
  }

  function closeModal() {
    setSelectedJob(null)
    reset()
    setForm({ name: '', email: '', portfolio: '', message: '' })
    setErrors({})
  }

  return (
    <>
      <SEO
        title="Careers"
        description="Join Nexora Technologies. Explore open roles, culture, benefits, and apply directly from the careers page."
      />
      <PageHero
        eyebrow="Careers"
        title="Build ambitious products with people who care about craft."
        description="We hire operators, designers, and engineers who want ownership, clarity, and thoughtful collaboration."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers' },
        ]}
      />

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Why Nexora"
          title="Culture built for focused makers."
          description="Small enough to move quickly. Senior enough to handle complexity without chaos."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {careerBenefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.04}>
              <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-soft)]">
                <h3 className="font-display text-lg font-semibold text-ink">{benefit.title}</h3>
                <p className="mt-2 text-sm text-slate">{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white/50 py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Open roles" title="Positions hiring now." />
          <div className="mt-8 space-y-4">
            {jobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} onApply={setSelectedJob} />
            ))}
          </div>
        </div>
      </section>

      {selectedJob ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-4 sm:items-center">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="apply-title"
            className="max-h-[90dvh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-[var(--shadow-lift)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="apply-title" className="font-display text-xl font-semibold text-ink">
                  Apply · {selectedJob.title}
                </h2>
                <p className="mt-1 text-sm text-slate">{selectedJob.location}</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-lg px-2 py-1 text-sm text-slate hover:bg-mist"
              >
                Close
              </button>
            </div>

            {status === 'success' ? (
              <div className="mt-6 rounded-2xl bg-teal-soft/70 p-5 text-ink">
                <p className="font-display text-lg font-semibold">Application received</p>
                <p className="mt-2 text-sm">
                  Thanks for your interest. Our recruiting team will review your note and follow up if
                  there’s a fit.
                </p>
                <Button type="button" className="mt-4" onClick={closeModal}>
                  Done
                </Button>
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
                {(
                  [
                    ['name', 'Full name', 'text'],
                    ['email', 'Email', 'email'],
                    ['portfolio', 'Portfolio or LinkedIn (optional)', 'url'],
                  ] as const
                ).map(([key, label, type]) => (
                  <div key={key}>
                    <label htmlFor={key} className="mb-1.5 block text-sm font-medium text-ink">
                      {label}
                    </label>
                    <input
                      id={key}
                      type={type}
                      value={form[key]}
                      onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                      className="w-full rounded-xl border border-line bg-cloud px-3 py-2.5 text-sm text-ink"
                    />
                    {errors[key] ? <p className="mt-1 text-sm text-amber-signal">{errors[key]}</p> : null}
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                    Why Nexora?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full rounded-xl border border-line bg-cloud px-3 py-2.5 text-sm text-ink"
                  />
                  {errors.message ? (
                    <p className="mt-1 text-sm text-amber-signal">{errors.message}</p>
                  ) : null}
                </div>
                {status === 'error' ? (
                  <p className="text-sm text-amber-signal">
                    Something went wrong sending your application. Please try again.
                  </p>
                ) : null}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Submitting…' : 'Submit application'}
                </Button>
              </form>
            )}
          </div>
        </div>
      ) : null}

      <FinalCta />
    </>
  )
}
