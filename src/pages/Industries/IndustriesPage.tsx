import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SEO } from '@/components/common/SEO'
import { PageHero, PageHeroCtas } from '@/components/common/PageHero'
import { IndustryCard } from '@/components/cards/IndustryCard'
import { FinalCta } from '@/components/sections/FinalCta'
import { industries } from '@/data/industries'

export default function IndustriesPage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash])

  return (
    <>
      <SEO
        title="Industries"
        description="Industry expertise across FinTech, healthcare, education, e-commerce, agriculture, logistics, SaaS, and enterprise."
      />
      <PageHero
        eyebrow="Industries"
        title="Domain context that makes technology decisions sharper."
        description="We understand the constraints of regulated markets, operational systems, and growth-stage products."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries' },
        ]}
        actions={<PageHeroCtas secondaryTo="/case-studies" secondaryLabel="See case studies" />}
      />
      <section className="container-page grid gap-6 py-16 md:grid-cols-2">
        {industries.map((industry, index) => (
          <IndustryCard key={industry.slug} industry={industry} index={index} />
        ))}
      </section>
      <FinalCta />
    </>
  )
}
