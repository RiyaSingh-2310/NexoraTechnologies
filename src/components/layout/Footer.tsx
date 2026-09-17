import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '@/components/layout/Logo'
import { DribbbleIcon, GitHubIcon, LinkedInIcon, XIcon } from '@/components/common/SocialIcons'
import { company } from '@/data/company'
import { footerLinks } from '@/data/navigation'
import { delay } from '@/utils/cn'

export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function onNewsletter(e: FormEvent) {
    e.preventDefault()
    if (!email.includes('@')) {
      setStatus('error')
      return
    }
    setStatus('loading')
    await delay(900)
    setStatus('success')
    setEmail('')
  }

  return (
    <footer className="relative mt-20 border-t border-line bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
      <div className="container-page relative py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <Logo variant="dark" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {company.description}
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { href: company.social.linkedin, icon: LinkedInIcon, label: 'LinkedIn' },
                { href: company.social.twitter, icon: XIcon, label: 'X' },
                { href: company.social.github, icon: GitHubIcon, label: 'GitHub' },
                { href: company.social.dribbble, icon: DribbbleIcon, label: 'Dribbble' },
              ].map(({ href, icon: IconComp, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition hover:bg-teal hover:text-ink"
                >
                  <IconComp className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {(
            [
              ['Company', footerLinks.company],
              ['Services', footerLinks.services],
              ['Industries', footerLinks.industries],
              ['Resources', footerLinks.resources],
            ] as const
          ).map(([title, links]) => (
            <div key={title}>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-teal-bright">
                {title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link to={link.href} className="text-sm text-white/70 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 rounded-2xl border border-white/10 bg-white/5 p-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="font-display text-xl font-semibold">Stay ahead of the build</p>
            <p className="mt-2 text-sm text-white/70">
              Occasional notes on product engineering, cloud, and delivery—no spam.
            </p>
            <p className="mt-4 text-sm text-white/70">
              {company.email} · {company.phone}
              <br />
              {company.address}
            </p>
          </div>
          <form onSubmit={onNewsletter} className="flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status !== 'idle') setStatus('idle')
              }}
              placeholder="you@company.com"
              className="w-full rounded-xl border border-white/15 bg-ink-soft px-4 py-3 text-sm text-white placeholder:text-white/40 focus-visible:outline-teal-bright"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-xl bg-teal-bright px-5 py-3 font-display text-sm font-semibold text-ink transition hover:bg-teal-soft disabled:opacity-60"
            >
              {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>
          {status === 'success' ? (
            <p className="text-sm text-teal-bright lg:col-start-2">You're on the list. Welcome.</p>
          ) : null}
          {status === 'error' ? (
            <p className="text-sm text-amber-signal lg:col-start-2">Please enter a valid email.</p>
          ) : null}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
            <Link to="/help" className="hover:text-white">
              Help
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
