import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { useMotionConfig } from '@/hooks/useMotionConfig'

export function HomeHero() {
  const { prefersReducedMotion, duration } = useMotionConfig()

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-teal-bright/15 blur-3xl" />
      <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Nexora Technologies
          </p>
          <h1 className="mt-4 max-w-xl text-balance font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            Software engineered for clarity, scale, and lasting advantage.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate">
            We design and build digital products, cloud platforms, and transformation programs for
            companies that refuse to compromise on quality.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/contact" size="lg">
              Get Started
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button to="/services" variant="secondary" size="lg">
              Explore Services
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: duration * 1.1, delay: prefersReducedMotion ? 0 : 0.15 }}
          aria-hidden
        >
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-line bg-ink shadow-[var(--shadow-lift)]">
            <div className="absolute inset-0 bg-grid opacity-25" />
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-teal-bright/30 blur-2xl" />
            <div className="absolute bottom-10 left-8 h-32 w-32 rounded-full bg-steel/40 blur-2xl" />
            {!prefersReducedMotion ? (
              <>
                <motion.div
                  className="absolute left-[12%] top-[18%] h-24 w-24 rounded-2xl border border-white/15 bg-white/10 backdrop-blur"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute right-[14%] top-[28%] h-16 w-40 rounded-full border border-teal-bright/30 bg-teal/20"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute bottom-[18%] left-[18%] right-[18%] h-28 rounded-2xl border border-white/10 bg-gradient-to-r from-teal/30 to-steel/30"
                  animate={{ opacity: [0.55, 0.9, 0.55] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </>
            ) : (
              <div className="absolute inset-10 rounded-2xl border border-white/10 bg-white/5" />
            )}
            <div className="absolute inset-0 flex items-end p-8">
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-teal-bright">
                  Platform pulse
                </p>
                <p className="mt-2 max-w-xs font-display text-2xl font-bold text-white">
                  Architecture, experience, and delivery—aligned.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
