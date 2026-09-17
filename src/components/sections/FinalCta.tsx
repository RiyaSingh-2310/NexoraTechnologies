import { Button } from '@/components/common/Button'
import { Reveal } from '@/components/common/Reveal'

export function FinalCta() {
  return (
    <section className="container-page py-16 lg:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-ink px-6 py-14 text-center text-white sm:px-10 lg:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
          <div className="pointer-events-none absolute -left-10 top-0 h-56 w-56 rounded-full bg-teal-bright/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-8 bottom-0 h-56 w-56 rounded-full bg-steel/30 blur-3xl" />
          <div className="relative">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-teal-bright">
              Next step
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-balance font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Have an idea? Let’s build it together.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Tell us about your product, platform, or transformation goal. We’ll respond with a clear
              path from discovery to delivery.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button to="/contact" variant="inverse" size="lg">
                Get Started
              </Button>
              <Button
                to="/case-studies"
                variant="secondary"
                size="lg"
                className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-ink"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
