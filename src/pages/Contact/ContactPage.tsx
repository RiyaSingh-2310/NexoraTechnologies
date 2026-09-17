import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { SEO } from '@/components/common/SEO'
import { GitHubIcon, LinkedInIcon } from '@/components/common/SocialIcons'
import { company } from '@/data/company'
import { services } from '@/data/services'
import { useMockSubmit } from '@/hooks/useMockSubmit'

type FormState = {
  name: string
  email: string
  phone: string
  companyName: string
  service: string
  message: string
}

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  companyName: '',
  service: '',
  message: '',
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const { status, submit, reset, isLoading } = useMockSubmit()

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email'
    if (form.phone && form.phone.replace(/\D/g, '').length < 7) next.phone = 'Enter a valid phone'
    if (!form.service) next.service = 'Select a service'
    if (form.message.trim().length < 20) next.message = 'Message should be at least 20 characters'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    const ok = await submit()
    if (ok) setForm(initial)
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
    if (status !== 'idle') reset()
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact Nexora Technologies to discuss your next product, platform, or transformation initiative."
      />
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to build."
        description="Share a few details and we’ll follow up with next steps—usually within one business day."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className="container-page grid gap-8 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8"
          >
            {status === 'success' ? (
              <div className="rounded-2xl bg-teal-soft/70 p-6">
                <p className="font-display text-2xl font-semibold text-ink">Message sent</p>
                <p className="mt-2 text-slate">
                  Thanks for reaching out. A Nexora teammate will respond shortly.
                </p>
                <Button type="button" className="mt-5" onClick={reset}>
                  Send another message
                </Button>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  {(
                    [
                      ['name', 'Full name', 'text'],
                      ['email', 'Work email', 'email'],
                      ['phone', 'Phone', 'tel'],
                      ['companyName', 'Company', 'text'],
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
                        onChange={(e) => update(key, e.target.value)}
                        className="w-full rounded-xl border border-line bg-cloud px-3 py-2.5 text-sm"
                        aria-invalid={Boolean(errors[key])}
                      />
                      {errors[key] ? (
                        <p className="mt-1 text-sm text-amber-signal">{errors[key]}</p>
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
                    Service interest
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => update('service', e.target.value)}
                    className="w-full rounded-xl border border-line bg-cloud px-3 py-2.5 text-sm"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  {errors.service ? (
                    <p className="mt-1 text-sm text-amber-signal">{errors.service}</p>
                  ) : null}
                </div>

                <div className="mt-4">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="w-full rounded-xl border border-line bg-cloud px-3 py-2.5 text-sm"
                  />
                  {errors.message ? (
                    <p className="mt-1 text-sm text-amber-signal">{errors.message}</p>
                  ) : null}
                </div>

                {status === 'error' ? (
                  <p className="mt-4 text-sm text-amber-signal" role="alert">
                    We couldn’t send your message just now. Please try again.
                  </p>
                ) : null}

                <Button type="submit" size="lg" className="mt-6" disabled={isLoading}>
                  {isLoading ? 'Sending…' : 'Send message'}
                </Button>
              </>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="space-y-5">
            <div className="rounded-3xl border border-line bg-ink p-8 text-white">
              <h2 className="font-display text-xl font-semibold">Contact details</h2>
              <ul className="mt-5 space-y-4 text-sm text-white/80">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-teal-bright" aria-hidden />
                  <a href={`mailto:${company.email}`} className="hover:text-white">
                    {company.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-teal-bright" aria-hidden />
                  <a href={`tel:${company.phone}`} className="hover:text-white">
                    {company.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-teal-bright" aria-hidden />
                  <span>{company.address}</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 text-teal-bright" aria-hidden />
                  <span>{company.hours}</span>
                </li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a
                  href={company.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-xl border border-white/15 p-2 hover:bg-white/10"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
                <a
                  href={company.social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-xl border border-white/15 p-2 hover:bg-white/10"
                >
                  <GitHubIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-soft)]">
              <p className="font-display text-lg font-semibold text-ink">Prefer a quick briefing?</p>
              <p className="mt-2 text-sm text-slate">
                Browse our services first, then come back with a clearer brief—or just send what you
                have. We’ll help shape it.
              </p>
              <Button to="/services" variant="secondary" className="mt-4">
                Explore services
              </Button>
            </div>
          </aside>
        </Reveal>
      </section>
    </>
  )
}
