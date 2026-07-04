'use client'

import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'

import GatorLogo from '@/components/ui/GatorLogo'
import MobileMenu from './mobile-menu'
import PixelButton from '@/components/ui/PixelButton'
import {
  GATOR_EXTENSION_URL,
  GATOR_SIGN_IN_URL,
  headerNavLinks,
} from '@/lib/gatorBrand'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const darkNav = false

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      translate="no"
      className="notranslate site-header fixed top-0 z-[200] w-full transition-all duration-200"
    >
      <div
        className={`transition-colors duration-200 transition-shadow duration-200 ${
          darkNav
            ? 'border-b border-white/[0.06] bg-split'
            : `border-b border-[var(--color-line)] bg-canvas ${scrolled ? 'shadow-sm' : ''}`
        }`}
      >
        <div
          className={`relative mx-auto grid h-14 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-2 border-l border-r px-3 sm:h-16 sm:gap-3 sm:px-6 lg:grid-cols-[1fr_auto_1fr] ${
            darkNav ? 'border-white/[0.06]' : 'border-[var(--color-line)]'
          }`}
        >
          <GatorLogo
            asLink
            priority
            variant="wordmark"
            theme={darkNav ? 'dark' : 'light'}
            className="shrink-0 justify-self-start"
            iconClassName="h-8 w-8 sm:h-10 sm:w-10 object-contain"
          />

          <nav
            className="hidden items-center justify-center lg:flex lg:col-start-2"
            aria-label="Primary"
          >
            <ul className="flex items-center gap-0.5">
              {headerNavLinks.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} label={link.label} dark={darkNav} />
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative z-[220] col-start-2 flex items-center justify-end gap-2 justify-self-end sm:gap-2.5 lg:col-start-3">
            <PixelButton
              href={GATOR_SIGN_IN_URL}
              external
              size="sm"
              variant="outline"
              tone="dark"
              className={`hidden sm:inline-flex ${
                darkNav
                  ? '!border-white/25 !text-white hover:!bg-white/10 focus-visible:!ring-offset-[#141a10]'
                  : ''
              }`}
            >
              Sign in
            </PixelButton>

            <PixelButton
              href={GATOR_EXTENSION_URL}
              external
              size="sm"
              tone="dark"
              className={`hidden md:inline-flex ${darkNav ? 'focus-visible:!ring-offset-split' : ''}`}
              icon={<Download className="h-3.5 w-3.5" strokeWidth={2.5} />}
            >
              Download extension
            </PixelButton>

            <MobileMenu dark={darkNav} />
          </div>
        </div>
      </div>
    </header>
  )
}

function NavLink({
  href,
  label,
  dark = false,
}: {
  href: string
  label: string
  dark?: boolean
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
        dark
          ? 'text-white/75 hover:bg-white/10 hover:text-white'
          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
      }`}
    >
      {label}
    </a>
  )
}
