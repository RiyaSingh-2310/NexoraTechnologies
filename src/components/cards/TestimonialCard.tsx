import { Reveal } from '@/components/common/Reveal'
import type { Testimonial } from '@/types'

type Props = {
  testimonial: Testimonial
  index?: number
}

export function TestimonialCard({ testimonial, index = 0 }: Props) {
  return (
    <Reveal delay={index * 0.06} as="article" className="h-full">
      <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-soft)]">
        <blockquote className="flex-1 text-lg leading-relaxed text-ink-soft">
          “{testimonial.quote}”
        </blockquote>
        <figcaption className="mt-6 border-t border-line pt-4">
          <p className="font-display font-semibold text-ink">{testimonial.name}</p>
          <p className="text-sm text-slate">
            {testimonial.role}, {testimonial.company}
          </p>
        </figcaption>
      </figure>
    </Reveal>
  )
}
