'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import GatorLogo from '@/components/ui/GatorLogo'
import MobileMenu from '@/components/ui/mobile-menu'

const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function GatorHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`site-header fixed top-0 z-[200] w-full transition-all duration-200 ${
        scrolled
          ? 'border-b border-white/10 bg-gator-dark/95 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <GatorLogo asLink priority variant="full" />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://app.gator.so?ref=header"
            className="hidden items-center gap-1.5 rounded-lg bg-gator px-4 py-2 text-sm font-semibold text-gator-dark transition hover:bg-gator-light sm:inline-flex"
          >
            Get started
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
