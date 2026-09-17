import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { Icon } from '@/components/common/Icon'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { SEO } from '@/components/common/SEO'
import { helpTopics, popularHelpLinks } from '@/data/about'
import { company } from '@/data/company'
import { faqs } from '@/data/faqs'

export default function HelpPage() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return faqs
      .filter(
        (faq) =>
          faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q),
      )
      .slice(0, 6)
  }, [query])

  return (
    <>
      <SEO
        title="Help Center"
        description="Nexora Help Center—popular topics, support categories, and ways to contact our team."
      />
      <PageHero
        eyebrow="Help Center"
        title="How can we help you today?"
        description="Browse popular topics or search for guidance on engagements, support, and account questions."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Help' },
        ]}
      />

      <section className="container-page py-16">
        <div className="mx-auto max-w-3xl">
          <label className="relative block">
            <span className="sr-only">Search help topics</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search help articles and FAQs…"
              className="w-full rounded-2xl border border-line bg-white py-4 pl-12 pr-4 text-base shadow-[var(--shadow-soft)]"
            />
          </label>
          {query.trim() ? (
            <div className="mt-4 rounded-2xl border border-line bg-white p-4">
              {results.length === 0 ? (
                <p className="text-sm text-slate">No results. Try the FAQ page or contact support.</p>
              ) : (
                <ul className="space-y-2">
                  {results.map((faq) => (
                    <li key={faq.id}>
                      <Link to="/faq" className="block rounded-xl px-3 py-2 hover:bg-mist">
                        <p className="text-sm font-semibold text-ink">{faq.question}</p>
                        <p className="mt-1 line-clamp-2 text-xs text-slate">{faq.answer}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : null}
        </div>

        <div className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-ink">Support categories</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {helpTopics.map((topic, index) => (
              <Reveal key={topic.id} delay={index * 0.04}>
                <Link
                  to={topic.href}
                  className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-teal/30"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal">
                    <Icon name={topic.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">{topic.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-slate">{topic.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-line bg-white p-8 shadow-[var(--shadow-soft)]">
            <h2 className="font-display text-xl font-semibold text-ink">Popular topics</h2>
            <ul className="mt-4 space-y-3">
              {popularHelpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-teal hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-line bg-ink p-8 text-white shadow-[var(--shadow-soft)]">
            <h2 className="font-display text-xl font-semibold">Contact support</h2>
            <p className="mt-3 text-white/70">
              Email {company.supportEmail} or reach us during {company.hours}.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/contact" variant="inverse">
                Contact support
              </Button>
              <Button
                to="/faq"
                variant="secondary"
                className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-ink"
              >
                Browse FAQ
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
