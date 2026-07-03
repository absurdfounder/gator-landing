'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUp } from 'lucide-react'
import { merlinAssets } from '@/lib/merlinAssets'

export default function GatorHero() {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const q = query.trim() || 'Hello Gator'
    window.location.href = `https://app.gator.so?ref=hero&q=${encodeURIComponent(q)}`
  }

  return (
    <section className="relative overflow-hidden bg-[#fafaf9] pb-10 pt-[calc(var(--site-header-height)+2rem)] sm:pb-16 sm:pt-[calc(var(--site-header-height)+3rem)]">
      <Image
        src={merlinAssets.hero.gradient}
        alt=""
        width={1920}
        height={1080}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
        priority
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-ink-muted">
          <Image src={merlinAssets.hero.sparkles} alt="" width={16} height={16} className="h-4 w-4" />
          Ideas
        </p>

        <h1 className="font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-[5.5rem]">
          are a chat away
        </h1>

        <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-2xl">
          <div className="flex items-center gap-2 rounded-2xl border border-black/[0.08] bg-white/90 p-2 pl-5 shadow-[0_8px_40px_rgba(0,0,0,0.08)] backdrop-blur-sm">
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
          className="mt-5 inline-flex rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-ink/90"
        >
          Get Started for FREE
        </a>

        <div className="relative mx-auto mt-10 max-w-3xl">
          <Image
            src={merlinAssets.hero.illustration}
            alt="Gator AI chat interface"
            width={1200}
            height={800}
            className="mx-auto w-full max-w-2xl drop-shadow-2xl"
            priority
          />
        </div>

        <p className="mt-10 text-sm font-medium text-ink-muted">
          Trusted by <span className="font-semibold text-ink">20M+</span> users
        </p>

        <div className="mt-6 overflow-hidden">
          <div className="flex animate-[heroMarqueeScroll_30s_linear_infinite] gap-10 whitespace-nowrap">
            {[...merlinAssets.brands, ...merlinAssets.brands].map((logo, i) => (
              <Image
                key={`${logo}-${i}`}
                src={logo}
                alt=""
                width={120}
                height={40}
                className="h-8 w-auto shrink-0 opacity-50 grayscale transition hover:opacity-80 hover:grayscale-0"
              />
            ))}
          </div>
        </div>

        <p className="mt-10 text-xs font-semibold uppercase tracking-wider text-ink-faint">
          Install on all platforms
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <a href="#" className="transition hover:opacity-80">
            <Image src={merlinAssets.stores.chrome} alt="Chrome Web Store" width={160} height={48} className="h-10 w-auto" />
          </a>
          <a href="#" className="transition hover:opacity-80">
            <Image src={merlinAssets.stores.googlePlay} alt="Google Play" width={160} height={48} className="h-10 w-auto" />
          </a>
          <a href="#" className="transition hover:opacity-80">
            <Image src={merlinAssets.stores.apple} alt="App Store" width={120} height={40} className="h-10 w-auto" />
          </a>
        </div>

        <a
          href="#pricing"
          className="mt-8 inline-block rounded-full bg-gator/10 px-5 py-2 text-sm font-medium text-gator-700 transition hover:bg-gator/15"
        >
          $130 worth of value for just $19!
        </a>
      </div>
    </section>
  )
}
