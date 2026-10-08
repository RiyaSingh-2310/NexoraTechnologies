import { Button } from '@/components/common/Button'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { SEO } from '@/components/common/SEO'
import { ContactForm } from '@/components/forms/ContactForm'
import { GitHubIcon, LinkedInIcon } from '@/components/common/SocialIcons'
import { company } from '@/data/company'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
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
          <div className="rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="space-y-5">
            <div className="rounded-3xl border border-line bg-ink p-8 text-white">
              <h2 className="font-display text-xl font-semibold">Contact details</h2>
              <ul className="mt-5 space-y-4 text-sm text-white/80">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-teal-bright" aria-hidden />
                  <a href={`mailto:${company.email}`} className="cursor-pointer hover:text-white">
                    {company.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-teal-bright" aria-hidden />
                  <a href={`tel:${company.phone}`} className="cursor-pointer hover:text-white">
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
                  className="cursor-pointer rounded-xl border border-white/15 p-2 hover:bg-white/10"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
                <a
                  href={company.social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="cursor-pointer rounded-xl border border-white/15 p-2 hover:bg-white/10"
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
