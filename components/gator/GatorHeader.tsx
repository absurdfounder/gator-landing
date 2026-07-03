'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, ChevronDown, Moon, Sun } from 'lucide-react'
import GatorLogo from '@/components/ui/GatorLogo'

const NAV_LINKS = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Teams', href: '#teams' },
  { label: 'Chat', href: 'https://app.gator.so' },
]

export default function GatorHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`site-header fixed top-0 z-[200] w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-black/[0.06] bg-white/90 shadow-sm backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-[60px] sm:px-6">
        <GatorLogo asLink priority variant="full" theme="light" />

        <nav className="hidden items-center gap-1 md:flex">
          <button
            type="button"
            className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-ink-muted transition hover:bg-black/[0.04] hover:text-ink"
          >
            Product
            <ChevronDown className="h-3.5 w-3.5 opacity-50" />
          </button>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-ink-muted transition hover:bg-black/[0.04] hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDark(!dark)}
            className="hidden rounded-lg p-2 text-ink-muted transition hover:bg-black/[0.04] sm:block"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="https://app.gator.so?ref=header"
            className="hidden items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm transition hover:shadow-md sm:inline-flex"
          >
            Add Gator
          </a>
          <a
            href="https://app.gator.so?ref=header-cta"
            className="inline-flex items-center gap-1.5 rounded-full bg-gator px-4 py-2 text-sm font-semibold text-white transition hover:bg-gator-600"
          >
            Get started
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  )
}
