import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import { useMotionConfig } from '@/hooks/useMotionConfig'

type Props = {
  value: number
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ value, suffix = '', duration = 1600 }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true })
  const { prefersReducedMotion } = useMotionConfig()
  const [display, setDisplay] = useState(prefersReducedMotion ? value : 0)

  useEffect(() => {
    if (!inView) return
    if (prefersReducedMotion) {
      setDisplay(value)
      return
    }

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setDisplay(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration, prefersReducedMotion])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
