import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SEO } from '@/components/common/SEO'
import { PageHero, PageHeroCtas } from '@/components/common/PageHero'
import { SolutionCard } from '@/components/cards/SolutionCard'
import { FinalCta } from '@/components/sections/FinalCta'
import { solutions } from '@/data/solutions'

export default function SolutionsPage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.hash])

  return (
    <>
      <SEO
        title="Solutions"
        description="Business solutions from Nexora: digital transformation, product engineering, platform modernization, and more."
      />
      <PageHero
        eyebrow="Solutions"
        title="Business outcomes powered by deliberate technology choices."
        description="Each solution blends strategy, design, and engineering so change sticks beyond the launch date."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Solutions' },
        ]}
        actions={<PageHeroCtas secondaryTo="/industries" secondaryLabel="Browse industries" />}
      />
      <section className="container-page grid gap-6 py-16 lg:grid-cols-2">
        {solutions.map((solution, index) => (
          <SolutionCard key={solution.slug} solution={solution} index={index} />
        ))}
      </section>
      <FinalCta />
    </>
  )
}
