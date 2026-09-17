import { PageHero } from '@/components/common/PageHero'
import { SEO } from '@/components/common/SEO'
import { company } from '@/data/company'

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read how Nexora Technologies collects, uses, and protects information on this website."
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy explains how we handle information when you use the Nexora Technologies website and contact channels."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' },
        ]}
      />
      <section className="container-page prose-nexora max-w-3xl py-16">
        <article className="space-y-8 text-slate">
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">Overview</h2>
            <p className="mt-3 leading-relaxed">
              {company.name} (“we”, “us”) respects your privacy. This website is a marketing and
              information property. Forms on this site are currently processed as mock frontend
              submissions and are not transmitted to a production backend.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">Information you provide</h2>
            <p className="mt-3 leading-relaxed">
              When you use contact, careers, or newsletter forms, you may provide name, email, phone,
              company, and message details. Use these channels only for legitimate business inquiries.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">How we use information</h2>
            <p className="mt-3 leading-relaxed">
              In a production deployment, submitted information would be used to respond to inquiries,
              evaluate applications, and improve our services. We do not sell personal information.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">Cookies & analytics</h2>
            <p className="mt-3 leading-relaxed">
              This demo site does not install third-party advertising cookies. Future analytics
              integrations would be disclosed here with appropriate controls.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">Contact</h2>
            <p className="mt-3 leading-relaxed">
              Privacy questions can be sent to {company.email}. Office: {company.address}.
            </p>
          </section>
          <p className="text-sm text-slate/80">Last updated: March 2026</p>
        </article>
      </section>
    </>
  )
}
