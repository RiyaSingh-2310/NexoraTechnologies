import { PageHero } from '@/components/common/PageHero'
import { SEO } from '@/components/common/SEO'
import { company } from '@/data/company'

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Terms and conditions for using the Nexora Technologies website and requesting services."
      />
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="These terms govern your use of the Nexora Technologies website and related communications."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Terms' },
        ]}
      />
      <section className="container-page max-w-3xl py-16">
        <article className="space-y-8 text-slate">
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">Acceptance</h2>
            <p className="mt-3 leading-relaxed">
              By accessing this website, you agree to these terms. If you do not agree, please discontinue
              use of the site.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">Services</h2>
            <p className="mt-3 leading-relaxed">
              Descriptions of services, case studies, and outcomes on this site are for informational
              purposes. Binding commercial terms are established only through a signed agreement with{' '}
              {company.name}.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">Intellectual property</h2>
            <p className="mt-3 leading-relaxed">
              Site content, branding, and design elements are owned by {company.name} or its licensors
              and may not be copied for commercial use without permission.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">Limitation of liability</h2>
            <p className="mt-3 leading-relaxed">
              The website is provided as-is. To the fullest extent permitted by law, we disclaim
              liability for indirect or consequential damages arising from site use.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">Contact</h2>
            <p className="mt-3 leading-relaxed">
              Questions about these terms: {company.email}.
            </p>
          </section>
          <p className="text-sm text-slate/80">Last updated: March 2026</p>
        </article>
      </section>
    </>
  )
}
