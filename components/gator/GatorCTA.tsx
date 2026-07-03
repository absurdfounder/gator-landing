import { ArrowRight } from 'lucide-react'
import GatorLogo from '@/components/ui/GatorLogo'

export default function GatorCTA() {
  return (
    <section className="bg-gator-dark py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <GatorLogo variant="icon" iconClassName="mx-auto h-16 w-16 mb-6" />
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to meet your new favorite coworker?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-white/60">
          Start free. No credit card. Gator is ready to help the moment you sign up.
        </p>
        <a
          href="https://app.gator.so?ref=cta"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gator px-8 py-4 text-base font-semibold text-gator-dark transition hover:bg-gator-light"
        >
          Get started free
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
