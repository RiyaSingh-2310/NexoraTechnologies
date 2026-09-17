import { SEO } from '@/components/common/SEO'
import { PageHero, PageHeroCtas } from '@/components/common/PageHero'
import { CaseStudyCard } from '@/components/cards/CaseStudyCard'
import { FinalCta } from '@/components/sections/FinalCta'
import { caseStudies } from '@/data/caseStudies'

export default function CaseStudiesPage() {
  return (
    <>
      <SEO
        title="Case Studies"
        description="Explore Nexora case studies across FinTech, healthcare, commerce, logistics, education, and agriculture."
      />
      <PageHero
        eyebrow="Case Studies"
        title="Proof that careful engineering changes how teams operate."
        description="Selected fictional projects representing the problems we solve and the outcomes we target."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Case Studies' },
        ]}
        actions={<PageHeroCtas primaryLabel="Start a conversation" />}
      />
      <section className="container-page grid gap-6 py-16 md:grid-cols-2 xl:grid-cols-3">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={study.slug} study={study} index={index} />
        ))}
      </section>
      <FinalCta />
    </>
  )
}
