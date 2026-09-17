import { useState } from 'react'
import { Button } from '@/components/common/Button'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Accordion } from '@/components/ui/Accordion'
import { faqPreviewIds, faqs } from '@/data/faqs'

export function FaqPreview() {
  const items = faqs.filter((faq) => faqPreviewIds.includes(faq.id))
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  return (
    <section className="bg-white/50 py-16 lg:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Answers before the first call."
            description="A quick look at how we work, price, and support engagements."
          />
          <Button to="/faq" variant="secondary" className="mt-6">
            Browse all FAQs
          </Button>
        </div>
        <Accordion
          items={items}
          openId={openId}
          onToggle={(id) => setOpenId((current) => (current === id ? null : id))}
        />
      </div>
    </section>
  )
}
