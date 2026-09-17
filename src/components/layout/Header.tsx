import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { Logo } from '@/components/layout/Logo'
import { mainNav } from '@/data/navigation'
import { useMotionConfig } from '@/hooks/useMotionConfig'
import { cn } from '@/utils/cn'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const location = useLocation()
  const { prefersReducedMotion, duration } = useMotionConfig()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-line/80 bg-white/80 shadow-[var(--shadow-soft)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {mainNav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className={cn(
                    'inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate transition-colors hover:bg-mist hover:text-ink',
                    location.pathname.startsWith(item.href) && 'text-ink',
                  )}
                  aria-expanded={openMenu === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden />
                </button>
                <AnimatePresence>
                  {openMenu === item.label ? (
                    <motion.div
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={prefersReducedMotion ? undefined : { opacity: 0, y: 8 }}
                      transition={{ duration: duration * 0.6 }}
                      className="absolute left-0 top-full pt-2"
                    >
                      <div className="min-w-[280px] rounded-2xl border border-line bg-white p-2 shadow-[var(--shadow-lift)]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href + child.label}
                            to={child.href}
                            className="block rounded-xl px-3 py-2.5 hover:bg-mist"
                          >
                            <span className="block text-sm font-semibold text-ink">{child.label}</span>
                            {child.description ? (
                              <span className="mt-0.5 block text-xs text-slate">
                                {child.description}
                              </span>
                            ) : null}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-2 text-sm font-medium text-slate transition-colors hover:bg-mist hover:text-ink',
                    isActive && 'bg-mist text-ink',
                  )
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button to="/contact" size="sm" className="hidden sm:inline-flex">
            Get Started
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white text-ink xl:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="fixed inset-0 top-16 z-40 xl:hidden"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-ink/40"
              aria-label="Close menu overlay"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              aria-label="Mobile"
              initial={prefersReducedMotion ? false : { x: '100%' }}
              animate={{ x: 0 }}
              exit={prefersReducedMotion ? undefined : { x: '100%' }}
              transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-[calc(100dvh-4rem)] w-[min(100%,22rem)] flex-col overflow-y-auto border-l border-line bg-white p-5 shadow-[var(--shadow-lift)]"
            >
              <div className="space-y-1">
                {mainNav.map((item) => (
                  <div key={item.label} className="border-b border-line/70 py-2">
                    <Link
                      to={item.href}
                      className="block rounded-lg px-2 py-2 font-display text-base font-semibold text-ink"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children ? (
                      <div className="mt-1 space-y-1 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href + child.label}
                            to={child.href}
                            className="block rounded-lg px-2 py-1.5 text-sm text-slate hover:text-ink"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button to="/contact" className="w-full" onClick={() => setMobileOpen(false)}>
                  Get Started
                </Button>
                <Button to="/help" variant="secondary" className="mt-3 w-full">
                  Help Center
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
