import { SEO } from '@/components/common/SEO'
import { PageHero, PageHeroCtas } from '@/components/common/PageHero'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { FinalCta } from '@/components/sections/FinalCta'
import { services } from '@/data/services'

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore Nexora services including web, mobile, cloud, AI, design, consulting, and cybersecurity."
      />
      <PageHero
        eyebrow="Services"
        title="Capabilities that move products from idea to resilient operations."
        description="Every service is delivered by practitioners who stay accountable through launch and beyond."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
        actions={<PageHeroCtas secondaryTo="/solutions" secondaryLabel="Explore solutions" />}
      />
      <section className="container-page py-16">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  )
}
