import { Button } from '@/components/common/Button'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { services } from '@/data/services'

export function ServicesSection() {
  return (
    <section className="bg-white/50 py-16 lg:py-20">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Capabilities built for modern product organizations."
            description="End-to-end expertise across design, engineering, cloud, AI, and security."
          />
          <Button to="/services" variant="secondary" className="shrink-0 self-start sm:self-auto">
            All services
          </Button>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
