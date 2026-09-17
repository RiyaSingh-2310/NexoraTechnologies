import { AnimatePresence, motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { useMotionConfig } from '@/hooks/useMotionConfig'
import { cn } from '@/utils/cn'

type Item = {
  id: string
  question: string
  answer: string
}

type Props = {
  items: Item[]
  openId: string | null
  onToggle: (id: string) => void
}

export function Accordion({ items, openId, onToggle }: Props) {
  const { prefersReducedMotion, duration } = useMotionConfig()

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const open = openId === item.id
        return (
          <div
            key={item.id}
            className={cn(
              'overflow-hidden rounded-2xl border bg-white shadow-[var(--shadow-soft)] transition-colors',
              open ? 'border-teal/40' : 'border-line',
            )}
          >
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`faq-panel-${item.id}`}
                id={`faq-button-${item.id}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-semibold text-ink sm:text-lg"
                onClick={() => onToggle(item.id)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-teal transition-transform duration-300',
                    open && 'rotate-180',
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-button-${item.id}`}
                  initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="border-t border-line px-5 py-4 text-slate">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
