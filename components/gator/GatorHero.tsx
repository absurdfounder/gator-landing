'use client'

import { useState } from 'react'
import { ArrowUp, Sparkles } from 'lucide-react'

const SUGGESTIONS = ['Write code', 'Summarize a doc', 'Draft an email', 'Research a topic']

export default function GatorHero() {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const q = query.trim() || 'Hello Gator'
    window.location.href = `https://app.gator.so?ref=hero&q=${encodeURIComponent(q)}`
  }

  return (
    <section className="relative overflow-hidden bg-[#fafaf9] pb-16 pt-[calc(var(--site-header-height)+3rem)] sm:pb-24 sm:pt-[calc(var(--site-header-height)+4rem)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gator/[0.07] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-gator/10 px-3 py-1 text-xs font-medium text-gator-700">
          <Sparkles className="h-3 w-3" />
          Ideas
        </p>

        <h1 className="font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
          are a chat away
        </h1>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl">
          <div className="flex items-center gap-2 rounded-2xl border border-black/[0.08] bg-white p-2 pl-5 shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition focus-within:border-gator/30 focus-within:shadow-[0_8px_40px_rgba(116,180,59,0.12)]">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask Gator"
              className="min-w-0 flex-1 bg-transparent py-3 text-base text-ink outline-none placeholder:text-ink-faint"
            />
            <button
              type="submit"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gator text-white transition hover:bg-gator-600"
              aria-label="Send"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </form>

        <a
          href="https://app.gator.so?ref=hero-cta"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-ink/90"
        >
          Get Started for FREE
        </a>

        <p className="mt-12 text-sm font-medium text-ink-muted">
          Trusted by <span className="text-ink">50K+</span> users
        </p>

        <div className="mt-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-ink-faint">
            Install on all platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: 'Chrome Web Store', href: '#' },
              { label: 'Google Play', href: '#' },
              { label: 'App Store', href: '#' },
            ].map((store) => (
              <a
                key={store.label}
                href={store.href}
                className="rounded-xl border border-black/[0.08] bg-white px-4 py-2.5 text-xs font-medium text-ink-muted shadow-sm transition hover:border-gator/20 hover:text-ink"
              >
                {store.label}
              </a>
            ))}
          </div>
        </div>

        <a
          href="#pricing"
          className="mt-10 inline-block rounded-full bg-gator/10 px-5 py-2 text-sm font-medium text-gator-700 transition hover:bg-gator/15"
        >
          $130 worth of value for just $19!
        </a>
      </div>
    </section>
  )
}
