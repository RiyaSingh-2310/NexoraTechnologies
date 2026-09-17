import { useReducedMotion } from 'motion/react'

export function useMotionConfig() {
  const prefersReducedMotion = useReducedMotion()

  return {
    prefersReducedMotion: Boolean(prefersReducedMotion),
    fadeUp: prefersReducedMotion
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
      : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } },
    duration: prefersReducedMotion ? 0 : 0.55,
    stagger: prefersReducedMotion ? 0 : 0.08,
  }
}
