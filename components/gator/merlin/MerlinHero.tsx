'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Moon, Send, Sun } from 'lucide-react'
import { merlinAssets } from '@/lib/merlinAssets'
import { BRAND, BRAND_APP } from '@/lib/merlinCopy'

const ROTATING_WORDS = ['Ideas', 'Answers', 'Emails', 'Posts', 'Plans', 'Code', 'Research']
const PLACEHOLDERS = [
  'Generate a sci-fi plot',
  'Explain bitcoin simply',
  'Write a haiku about climate change',
  'Plan my weekend getaway',
  'Write a cold email',
]

function LetterWord({ word }: { word: string }) {
  return (
    <span className="inline-block whitespace-nowrap">
      {word.split('').map((ch, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, filter: 'blur(8px)', y: 10 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.04 }}
        >
          {ch}
        </motion.span>
      ))}
      <span className="inline-block">&nbsp;</span>
    </span>
  )
}

function MerlinRotatingHeadline() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING_WORDS.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="merlin-rotating-slot text-center font-serif text-4xl font-medium tracking-tight sm:text-5xl md:text-left md:text-6xl md:leading-[86px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={ROTATING_WORDS[idx]}
          className="relative z-10 inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <LetterWord word={ROTATING_WORDS[idx]} />
        </motion.div>
      </AnimatePresence>
    </div>
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
              <Image src={merlinAssets.hero.sparkles} alt="" width={20} height={20} />
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
    <div className="relative flex w-full max-w-7xl flex-col items-center justify-center gap-9 px-4 md:my-32 xl:px-0">
      <Image
        src={merlinAssets.hero.gradient}
        alt=""
        fill
        className="!bottom-0 z-[1] !h-auto object-cover"
        priority
      />
      <div className="relative z-[2] flex flex-col items-center justify-center">
        <Image
          src={merlinAssets.hero.illustration}
          alt="hero-image"
          width={196}
          height={86}
          priority
        />
        <div className="mt-2 flex flex-wrap justify-center md:mt-0 md:justify-normal">
          <MerlinRotatingHeadline />
          <h1 className="break-words text-center font-serif text-4xl font-normal italic tracking-normal text-foreground sm:text-5xl md:text-6xl md:leading-[86px]">
            are a chat away
          </h1>
        </div>
      </div>
      <MerlinAskInput />
      <div className="z-[2] hidden flex-col items-center justify-center gap-4 md:flex">
        <div className="flex items-center gap-3">
          <h3 className="text-center font-sans text-sm font-semibold uppercase tracking-wider text-foreground">
            Trusted by 20M+ users
          </h3>
          <span className="text-muted-foreground">|</span>
          <h3 className="text-center font-sans text-sm font-semibold uppercase tracking-wider text-foreground">
            Install on all platforms
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#"><Image src={merlinAssets.stores.chrome} alt="Chrome Web Store" width={180} height={52} className="h-12 w-auto" /></a>
          <a href="#"><Image src={merlinAssets.stores.googlePlay} alt="Google Play" width={180} height={52} className="h-12 w-auto" /></a>
          <a href="#"><Image src={merlinAssets.stores.apple} alt="App Store" width={140} height={44} className="h-11 w-auto" /></a>
        </div>
      </div>
      <div className="z-[2] w-full overflow-hidden md:mt-2">
        <div className="merlin-marquee flex w-max gap-12">
          {[...merlinAssets.brands, ...merlinAssets.brands].map((logo, i) => (
            <Image key={`${logo}-${i}`} src={logo} alt="" width={100} height={32} className="h-8 w-auto shrink-0 opacity-40" />
          ))}
        </div>
      </div>
      <p className="z-[2] max-w-2xl text-center font-sans text-sm text-muted-foreground md:text-base">
        People across teams love {BRAND} for delivering{' '}
        <a href="#pricing" className="font-medium text-[#a855f7] hover:underline">
          $130 worth of value for just $19!
        </a>
      </p>
      <div className="z-[2] flex flex-col items-center gap-4 md:hidden">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Trusted by 20M+ users</h3>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Install on all platforms</h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#"><Image src={merlinAssets.stores.chrome} alt="" width={180} height={52} className="h-12 w-auto" /></a>
          <a href="#"><Image src={merlinAssets.stores.googlePlay} alt="" width={180} height={52} className="h-12 w-auto" /></a>
          <a href="#"><Image src={merlinAssets.stores.apple} alt="" width={140} height={44} className="h-11 w-auto" /></a>
        </div>
      </div>
    </div>
  )
}

export function MerlinHeader() {
  const NAV = ['Pricing', 'Affiliate', 'Teams', 'Chat', 'Agent']

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center px-4 shadow-sm backdrop-blur transition-[background] duration-300 ease-out">
      <div className="relative z-50 mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex w-full items-center justify-start gap-10">
          <a href="/" className="flex items-center gap-2" aria-label="Main Navigation">
            <Image src="/images/gator-icon.png" alt="" width={28} height={28} className="w-7 rounded-lg" />
            <span className="text-3xl font-semibold lowercase text-foreground">{BRAND}</span>
          </a>
          <nav className="relative z-10 hidden max-w-max flex-1 items-center justify-center lg:flex">
            <ul className="flex list-none items-center justify-center gap-1">
              <li>
                <button
                  type="button"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium backdrop-blur-md transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Product <ChevronDown className="ml-1 size-3" />
                </button>
              </li>
              {NAV.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium backdrop-blur-md transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <span className="flex items-center gap-4">
          <a
            href={BRAND_APP}
            className="hidden h-9 items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow transition hover:bg-secondary/80 lg:inline-flex"
          >
            <Image src={merlinAssets.stores.chrome} alt="" width={14} height={14} className="mr-1.5 size-3.5 shrink-0" />
            <span className="hidden xl:inline">Add {BRAND} Extension</span>
            <span className="xl:hidden">Extension</span>
          </a>
          <button
            type="button"
            className="relative hidden size-9 items-center justify-center rounded-md transition hover:bg-accent hover:text-accent-foreground lg:inline-flex"
            aria-label="Toggle theme"
          >
            <Sun className="size-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute size-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
          </button>
          <a
            href={BRAND_APP}
            className="hidden h-9 items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium shadow transition hover:bg-accent md:inline-flex"
          >
            Log in
          </a>
        </span>
      </div>
    </header>
  )
}
