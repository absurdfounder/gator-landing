'use client'

import { ArrowRight, MessageSquare, Sparkles, Zap } from 'lucide-react'
import GatorLogo from '@/components/ui/GatorLogo'

const TRUST_ITEMS = ['Free to start', 'No credit card', 'Works everywhere'] as const

export default function GatorHero() {
  return (
    <section className="relative overflow-hidden bg-gator-dark text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-gator/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gator-light/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(116,180,59,0.8) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-[calc(var(--site-header-height)+2.5rem)] sm:px-6 sm:pb-28 sm:pt-[calc(var(--site-header-height)+3.5rem)] lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gator/25 bg-gator/10 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-gator-light" />
              <span className="text-xs font-medium tracking-wide text-gator-light">
                Your AI that actually does things
              </span>
            </div>

            <h1 className="font-display text-[2.25rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Ask anything.
              <br />
              <span className="text-gator-light">Gator gets it done.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
              Gator is your always-on AI assistant — it writes code, answers questions,
              browses the web, sends emails, and handles tasks while you focus on what matters.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://app.gator.so?ref=landing"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gator px-6 py-3.5 text-sm font-semibold text-gator-dark transition hover:bg-gator-light"
              >
                Get started free
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-medium text-white/80 transition hover:border-white/30 hover:text-white"
              >
                See how it works
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {TRUST_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-gator-light" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gator/5 blur-2xl" />
              <div className="relative rounded-2xl border border-white/10 bg-gator-dark-elevated p-6 shadow-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <GatorLogo variant="icon" iconClassName="h-10 w-10" />
                  <div>
                    <p className="text-sm font-semibold text-white">gator</p>
                    <p className="text-xs text-white/40">Online · Ready to help</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-xl bg-white/5 px-4 py-3">
                    <p className="text-sm text-white/70">
                      Deploy the latest changes to staging and send me a summary
                    </p>
                  </div>
                  <div className="rounded-xl border border-gator/20 bg-gator/10 px-4 py-3">
                    <p className="text-sm text-white/90">
                      Done. Pushed to staging, ran tests (42 passed), and posted a summary in
                      #deploys. PR #847 is ready for review.
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/5 px-4 py-3">
                    <p className="text-sm text-white/70">
                      What were our top support issues last week?
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <MessageSquare className="h-4 w-4 text-white/30" />
                  <span className="text-sm text-white/30">Ask gator anything...</span>
                  <Zap className="ml-auto h-4 w-4 text-gator-light" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
