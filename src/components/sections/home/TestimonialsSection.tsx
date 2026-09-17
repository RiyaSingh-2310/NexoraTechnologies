import { SectionHeading } from '@/components/common/SectionHeading'
import { TestimonialCard } from '@/components/cards/TestimonialCard'
import { testimonials } from '@/data/home'

export function TestimonialsSection() {
  return (
    <section className="container-page py-16 lg:py-20">
      <SectionHeading
        eyebrow="Testimonials"
        title="Partners who trust us with critical work."
        description="Voices from product, operations, and technology leaders."
        align="center"
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
        ))}
      </div>
    </section>
  )
}
