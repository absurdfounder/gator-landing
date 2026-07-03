'use client'

import { useEffect, useRef, useState } from 'react'
import MerlinImage from '@/components/gator/merlin/MerlinImage'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Menu, Moon, Send, Sun, X } from 'lucide-react'
import { merlinAssets } from '@/lib/merlinAssets'
import { BRAND, BRAND_APP } from '@/lib/merlinCopy'
import { NAV_LINKS, PRODUCT_MENU } from '@/lib/merlinNav'

const ROTATING_WORDS = ['Ideas', 'Answers', 'Emails', 'Posts', 'Plans', 'Code', 'Research']
const PLACEHOLDERS = [
  'Generate a sci-fi plot',
  'Explain bitcoin simply',
  'Write a haiku about climate change',
  'Plan my weekend getaway',
  'Write a cold email',
]

function LetterWord({ word }: { word: string }) {
  return <span className="inline-block whitespace-nowrap">{word}</span>
}

function MerlinRotatingHeadline() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING_WORDS.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <span className="merlin-rotating-slot inline-block font-medium not-italic">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROTATING_WORDS[idx]}
          className="inline-block text-foreground"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <LetterWord word={ROTATING_WORDS[idx]} />
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function MerlinAskInput() {
  const [query, setQuery] = useState('')
  const [placeholderIdx, setPlaceholderIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setPlaceholderIdx((i) => (i + 1) % PLACEHOLDERS.length), 3200)
    return () => clearInterval(t)
  }, [])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `${BRAND_APP}?q=${encodeURIComponent(query.trim() || 'Hello')}`
  }

  return (
    <div className="z-[2] flex w-full items-center justify-center">
      <div className="hidden w-full items-center justify-center md:flex">
        <div className="relative w-full max-w-3xl overflow-hidden rounded-xl border border-border p-[1.5px] backdrop-blur-3xl">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EFD6FE_0%,#FF9BFB_0%,#8383FF_70%)]" />
          <form
            onSubmit={submit}
            className="relative mx-auto h-12 w-full max-w-3xl overflow-hidden rounded-[10px] bg-background transition duration-200 md:h-16"
          >
            <div className="absolute left-2 top-1/2 z-[60] flex size-10 -translate-y-1/2 items-center justify-center">
              <MerlinImage src={merlinAssets.hero.sparkles} alt="" width={20} height={20} />
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="relative z-50 h-full w-full rounded-full border-none bg-transparent pl-12 pr-[72px] text-sm text-foreground focus:outline-none focus:ring-0 sm:pl-14 sm:pr-16 sm:text-base"
              type="text"
            />
            {!query && (
              <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden rounded-full">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={PLACEHOLDERS[placeholderIdx]}
                    className="w-[calc(100%-2rem)] truncate pl-12 text-left text-sm font-normal text-muted-foreground sm:pl-[57px] sm:text-base"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35 }}
                  >
                    {PLACEHOLDERS[placeholderIdx]}
                  </motion.p>
                </AnimatePresence>
              </div>
            )}
            <button
              type="submit"
              className="absolute right-3 top-1/2 z-50 flex size-9 -translate-y-1/2 items-center justify-center rounded-md bg-secondary text-secondary-foreground shadow transition hover:bg-secondary/80"
            >
              <Send className="size-5 text-muted-foreground" />
            </button>
          </form>
        </div>
      </div>
      <div className="block w-full md:hidden">
        <a
          href={BRAND_APP}
          className="flex h-12 w-full items-center justify-center gap-3 rounded-md bg-primary px-4 py-2 text-base font-medium text-primary-foreground shadow hover:bg-primary/90"
        >
          Get Started for FREE
          <ArrowUpRight className="size-5" />
        </a>
      </div>
    </div>
  )
}

export function MerlinHeroBlock() {
  return (
    <section className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-4 pb-4 pt-10 md:my-28 md:gap-10 md:pb-0 md:pt-0 xl:px-0">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] z-[1] h-[min(420px,55vw)] w-[min(720px,92vw)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full opacity-50 md:top-[42%] md:opacity-60"
      >
        <MerlinImage
          src={merlinAssets.hero.gradient}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-[3] flex w-full flex-col items-center justify-center text-center">
        <MerlinImage
          src={merlinAssets.hero.illustration}
          alt="hero-image"
          width={196}
          height={86}
          className="mb-2 md:mb-0"
          priority
        />
        <h1 className="max-w-4xl font-serif text-[2rem] font-medium leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.1] lg:text-[4.25rem] lg:leading-[86px]">
          <MerlinRotatingHeadline />
          <span className="italic font-normal"> are a chat away</span>
        </h1>
      </div>

      <div className="relative z-[3] w-full">
        <MerlinAskInput />
      </div>

      <div className="relative z-[3] flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <h3 className="text-center font-sans text-xs font-semibold uppercase tracking-wider text-foreground sm:text-sm">
            Trusted by 20M+ users
          </h3>
          <span className="hidden text-muted-foreground sm:inline">|</span>
          <h3 className="text-center font-sans text-xs font-semibold uppercase tracking-wider text-foreground sm:text-sm">
            Install on all platforms
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a href={BRAND_APP}><MerlinImage src={merlinAssets.stores.chrome} alt="Chrome Web Store" width={180} height={52} className="h-10 w-auto sm:h-12" /></a>
          <a href={BRAND_APP}><MerlinImage src={merlinAssets.stores.googlePlay} alt="Google Play" width={180} height={52} className="h-10 w-auto sm:h-12" /></a>
          <a href={BRAND_APP}><MerlinImage src={merlinAssets.stores.apple} alt="App Store" width={140} height={44} className="h-9 w-auto sm:h-11" /></a>
        </div>
      </div>

      <div className="relative z-[3] w-full overflow-hidden">
        <div className="merlin-marquee flex w-max gap-10 sm:gap-12">
          {[...merlinAssets.brands, ...merlinAssets.brands].map((logo, i) => (
            <MerlinImage key={`${logo}-${i}`} src={logo} alt="" width={100} height={32} className="merlin-brand-logo h-7 w-auto shrink-0 sm:h-8" />
          ))}
        </div>
      </div>

      <p className="relative z-[3] max-w-2xl px-2 text-center font-sans text-sm text-muted-foreground md:text-base">
        People across teams love {BRAND} for delivering{' '}
        <a href="#pricing" className="font-medium text-[#a855f7] hover:underline">
          $130 worth of value for just $19!
        </a>
      </p>
    </section>
  )
}

export function MerlinHeader() {
  const [productOpen, setProductOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const productRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (productRef.current && !productRef.current.contains(e.target as Node)) {
        setProductOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setProductOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center border-b border-border bg-background/90 px-4 shadow-sm backdrop-blur-md">
      <div className="relative z-50 mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex w-full items-center justify-start gap-6 lg:gap-10">
          <a href="/" className="flex shrink-0 items-center gap-2" aria-label="Main Navigation">
            <MerlinImage src="/images/gator-icon.png" alt="" width={28} height={28} className="w-7 rounded-lg" />
            <span className="text-2xl font-semibold lowercase text-foreground sm:text-3xl">{BRAND}</span>
          </a>
          <nav className="relative z-10 hidden max-w-max flex-1 items-center justify-center lg:flex">
            <ul className="flex list-none items-center justify-center gap-1">
              <li ref={productRef} className="relative">
                <button
                  type="button"
                  aria-expanded={productOpen}
                  aria-haspopup="true"
                  onClick={() => setProductOpen((o) => !o)}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent"
                  data-state={productOpen ? 'open' : 'closed'}
                >
                  Product
                  <ChevronDown className={`ml-1 size-3 transition-transform duration-200 ${productOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {productOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="merlin-nav-dropdown absolute left-0 top-full z-[100] mt-2 w-[320px] overflow-hidden rounded-xl border border-border bg-white p-2 shadow-lg dark:bg-[hsl(var(--popover))]"
                    >
                      {PRODUCT_MENU.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={() => setProductOpen(false)}
                          className="flex flex-col gap-0.5 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
                        >
                          <span className="text-sm font-medium text-foreground">{item.title}</span>
                          <span className="text-xs text-muted-foreground">{item.description}</span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <span className="flex items-center gap-2 sm:gap-4">
          <a
            href={BRAND_APP}
            className="hidden h-9 items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow transition hover:bg-secondary/80 lg:inline-flex"
          >
            <MerlinImage src={merlinAssets.stores.chrome} alt="" width={14} height={14} className="mr-1.5 size-3.5 shrink-0" />
            <span className="hidden xl:inline">Add {BRAND} Extension</span>
            <span className="xl:hidden">Extension</span>
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="relative hidden size-9 items-center justify-center rounded-md transition hover:bg-accent hover:text-accent-foreground lg:inline-flex"
            aria-label="Toggle theme"
          >
            <Sun className={`size-[1.2rem] transition-all ${theme === 'light' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
            <Moon className={`absolute size-[1.2rem] transition-all ${theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
          </button>
          <a
            href={BRAND_APP}
            className="hidden h-9 items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium shadow transition hover:bg-accent md:inline-flex"
          >
            Log in
          </a>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md transition hover:bg-accent lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </span>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50 lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.2 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col gap-6 overflow-y-auto border-l border-border bg-background p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Menu</span>
                <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)} className="rounded-md p-1 hover:bg-accent">
                  <X className="size-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Product</p>
                {PRODUCT_MENU.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-2 py-2 text-sm font-medium hover:bg-accent"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-1 border-t border-border pt-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-2 py-2 text-sm font-medium hover:bg-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <button type="button" onClick={toggleTheme} className="flex h-9 items-center justify-center gap-2 rounded-md border border-border text-sm hover:bg-accent">
                  {theme === 'light' ? <Moon className="size-4" /> : <Sun className="size-4" />}
                  {theme === 'light' ? 'Dark mode' : 'Light mode'}
                </button>
                <a href={BRAND_APP} className="flex h-9 items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground">
                  Log in
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
