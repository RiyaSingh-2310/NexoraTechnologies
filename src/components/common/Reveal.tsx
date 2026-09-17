import type { ReactNode } from 'react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { useMotionConfig } from '@/hooks/useMotionConfig'
import { cn } from '@/utils/cn'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article' | 'li'
}

export function Reveal({ children, className, delay = 0, as = 'div' }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { prefersReducedMotion, duration } = useMotionConfig()

  return (
    <motion.div
      ref={ref}
      role={as === 'article' ? 'article' : undefined}
      className={cn(as === 'li' ? 'list-none' : undefined, className)}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      animate={inView || prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
