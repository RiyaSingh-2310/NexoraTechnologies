import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import { SEO } from '@/components/common/SEO'
import { Accordion } from '@/components/ui/Accordion'
import { FinalCta } from '@/components/sections/FinalCta'
import { faqCategories, faqs } from '@/data/faqs'

export default function FaqPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('All')
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return faqs.filter((faq) => {
      const matchesCategory = category === 'All' || faq.category === category
      const matchesQuery =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        faq.category.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <>
      <SEO
        title="FAQ"
        description="Find answers about Nexora services, pricing, process, support, and security."
      />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions."
        description="Search by topic or keyword. Still stuck? Our help center and contact team are ready."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQ' },
        ]}
      />

      <section className="container-page py-16">
        <div className="rounded-3xl border border-line bg-white p-4 shadow-[var(--shadow-soft)] sm:p-6">
          <label className="relative block">
            <span className="sr-only">Search FAQs</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions…"
              className="w-full rounded-xl border border-line bg-cloud py-3 pl-10 pr-4 text-sm text-ink"
            />
          </label>
          <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="FAQ categories">
            {['All', ...faqCategories].map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={category === item}
                onClick={() => setCategory(item)}
                className={`rounded-xl px-3 py-1.5 text-sm font-medium transition ${
                  category === item
                    ? 'bg-ink text-white'
                    : 'bg-mist text-ink-soft hover:bg-teal-soft'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-line bg-white p-10 text-center">
              <p className="font-display text-xl font-semibold text-ink">No matching questions</p>
              <p className="mt-2 text-slate">
                Try another keyword, or visit the{' '}
                <Link to="/help" className="font-semibold text-teal hover:underline">
                  Help Center
                </Link>
                .
              </p>
            </div>
          ) : (
            <Accordion
              items={filtered}
              openId={openId}
              onToggle={(id) => setOpenId((current) => (current === id ? null : id))}
            />
          )}
        </div>
      </section>
      <FinalCta />
    </>
  )
}
