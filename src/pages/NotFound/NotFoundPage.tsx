import { Button } from '@/components/common/Button'
import { SEO } from '@/components/common/SEO'

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page not found" description="The page you requested could not be found." />
      <section className="container-page flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-teal">
          Error 404
        </p>
        <h1 className="mt-4 max-w-xl font-display text-4xl font-bold text-ink sm:text-5xl">
          This route isn’t on the map.
        </h1>
        <p className="mt-4 max-w-md text-lg text-slate">
          The page may have moved, or the link might be outdated. Let’s get you back to something useful.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/" size="lg">
            Back to home
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Contact us
          </Button>
        </div>
      </section>
    </>
  )
}
