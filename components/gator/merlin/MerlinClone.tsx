'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Moon,
  Send,
  Sun,
} from 'lucide-react'
import { merlinAssets } from '@/lib/merlinAssets'
import {
  BRAND,
  BRAND_APP,
  BRAND_DOMAIN,
  featureTabs,
  merlinFaqs,
  merlinReviews,
  merlinWorkflows,
} from '@/lib/merlinCopy'

const ROTATING_WORDS = ['Ideas', 'Answers', 'Emails', 'Code', 'Research']
const PLACEHOLDERS = ['Ask Gator', 'Explain bitcoin simply', 'Write a cold email', 'Summarize this article']

const NAV = ['Pricing', 'Affiliate', 'Teams', 'Chat', 'Agent']

function GatorMark() {
  return (
    <a href="/" className="flex items-center gap-2" aria-label="Main Navigation">
      <Image src="/images/gator-icon.png" alt="" width={28} height={28} className="w-7 rounded-lg" />
      <span className="text-3xl font-semibold lowercase text-foreground">{BRAND}</span>
    </a>
  )
}

function RotatingWord({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % words.length), 2800)
    return () => clearInterval(t)
  }, [words.length])

  return (
    <div className="relative z-10 inline-block text-center font-serif text-4xl font-medium tracking-tight sm:text-5xl md:text-left md:text-6xl md:leading-[86px]">
      <span className="inline-block whitespace-nowrap transition-opacity duration-500">
        {words[idx]}&nbsp;
      </span>
    </div>
  )
}

function MerlinAskInput() {
  const [query, setQuery] = useState('')
  const [placeholderIdx, setPlaceholderIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setPlaceholderIdx((i) => (i + 1) % PLACEHOLDERS.length), 3000)
    return () => clearInterval(t)
  }, [])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `${BRAND_APP}?q=${encodeURIComponent(query.trim() || 'Hello')}`
  }

  return (
    <>
      <div className="z-[2] hidden w-full items-center justify-center md:flex">
        <div className="relative w-full max-w-3xl overflow-hidden rounded-xl border p-[1.5px] backdrop-blur-3xl">
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
              className="relative z-50 h-full w-full rounded-full border-none bg-transparent pl-12 pr-[72px] text-sm text-white focus:outline-none focus:ring-0 sm:pl-14 sm:pr-16 sm:text-base"
              type="text"
            />
            {!query && (
              <div className="pointer-events-none absolute inset-0 flex items-center rounded-full">
                <p className="w-[calc(100%-2rem)] truncate pl-12 text-left text-sm font-normal text-muted-foreground sm:pl-[57px] sm:text-base">
                  {PLACEHOLDERS[placeholderIdx]}
                </p>
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
      <div className="z-[2] block w-full md:hidden">
        <a
          href={BRAND_APP}
          className="flex h-12 w-full items-center justify-center gap-3 rounded-md bg-primary px-4 py-2 text-base font-medium text-primary-foreground shadow hover:bg-primary/90"
        >
          Get Started for FREE
        </a>
      </div>
    </>
  )
}

export default function MerlinClone() {
  const [extIdx, setExtIdx] = useState(0)
  const [chatIdx, setChatIdx] = useState(0)
  const [tab, setTab] = useState<keyof typeof featureTabs>('Create')
  const [faqOpen, setFaqOpen] = useState<number | null>(0)

  const extFeatures = [
    { title: "Don't switch tabs. Just ask", desc: 'Summarize, search, repurpose and create content out of any website you visit.', image: merlinAssets.extension.webpage },
    { title: 'Search better and get answers at a glance.', desc: 'Avoid spending time going through each search result on Google. Instead, get a summary and ask for specific details.', image: merlinAssets.extension.search },
    { title: 'Add context with...anything', desc: 'Writing a contract or making a quiz? Just upload guidebooks or lecture PDFs, let Gator learn from them and respond.', image: merlinAssets.extension.context },
    { title: 'Learn smart, not in a rush', desc: 'Spend time actively learning using video summaries and chat with the video, instead of rushing videos on 2x.', image: merlinAssets.extension.learn },
  ]

  const chatCards = [
    { title: 'Use your own knowledge to research', desc: 'With Projects, add any context, create reusable knowledge bases and query repeatedly for tailored responses.', image: merlinAssets.chat.projects },
    { title: 'Turn words into infographics', desc: 'With Crafts, generate a variety of diagrams and interactive charts with just a prompt.', image: merlinAssets.chat.infographics },
    { title: 'Create working app snippets', desc: 'Prototype rapidly with React and Shadcn based app snippets and edit code on the fly.', image: merlinAssets.chat.appsnip },
    { title: 'Use OpenAI o1 with realtime web', desc: 'Use chain-of-thought reasoning with realtime web sources to get a powerful research machine in your hands', image: merlinAssets.chat.reasoning },
  ]
  return (
    <div className="merlin-site min-h-screen overflow-x-hidden font-sans dark">
      {/* HEADER — exact Merlin classes */}
      <header className="sticky top-0 z-50 flex h-16 w-full items-center px-4 shadow-sm backdrop-blur transition-[background] duration-300 ease-out">
        <div className="relative z-50 mx-auto flex w-full max-w-7xl items-center justify-between">
          <div className="flex w-full items-center justify-start gap-10">
            <GatorMark />
            <nav className="relative z-10 hidden max-w-max flex-1 items-center justify-center lg:flex">
              <ul className="flex list-none items-center justify-center gap-1">
                <li>
                  <button type="button" className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium backdrop-blur-md transition-colors hover:bg-accent hover:text-accent-foreground">
                    Product <ChevronDown className="ml-1 size-3" />
                  </button>
                </li>
                {NAV.map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase()}`} className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium backdrop-blur-md transition-colors hover:bg-accent hover:text-accent-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <span className="flex items-center justify-between gap-4">
            <span className="hidden items-center justify-between gap-4 lg:flex">
              <a href={BRAND_APP} className="inline-flex h-9 items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow transition hover:bg-secondary/80">
                <Image src={merlinAssets.stores.chrome} alt="" width={14} height={14} className="mr-1.5 size-3.5 shrink-0" />
                <span className="hidden xl:inline">Add {BRAND} Extension</span>
                <span className="xl:hidden">Extension</span>
              </a>
              <button type="button" className="inline-flex size-9 items-center justify-center rounded-md transition hover:bg-accent hover:text-accent-foreground" aria-label="Toggle theme">
                <Sun className="size-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute size-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
              </button>
            </span>
          </span>
        </div>
      </header>

      {/* HERO — exact Merlin structure */}
      <div className="relative mt-32 flex w-full max-w-7xl flex-col items-center justify-center gap-9 px-4 md:my-32 xl:px-0 mx-auto">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[480px] overflow-hidden">
          <Image src={merlinAssets.hero.gradient} alt="" fill className="object-cover object-bottom" priority />
        </div>
        <div className="relative z-[2] flex flex-col items-center justify-center">
          <Image src={merlinAssets.hero.illustration} alt="hero-image" width={196} height={86} className="mb-2" priority />
          <div className="mt-2 flex flex-wrap justify-center md:mt-0 md:justify-normal">
            <RotatingWord words={ROTATING_WORDS} />
            <h1 className="break-words text-center font-serif text-4xl font-normal italic tracking-normal text-foreground sm:text-5xl md:text-6xl md:leading-[86px]">
              are a chat away
            </h1>
          </div>
        </div>
        <MerlinAskInput />
        <h3 className="z-[2] text-sm font-semibold uppercase tracking-wider text-muted-foreground">Trusted by 20M+ users</h3>
        <div className="z-[2] w-full overflow-hidden">
          <div className="merlin-marquee flex w-max gap-12">
            {[...merlinAssets.brands, ...merlinAssets.brands].map((logo, i) => (
              <Image key={`${logo}-${i}`} src={logo} alt="" width={100} height={32} className="h-8 w-auto shrink-0 opacity-40" />
            ))}
          </div>
        </div>
        <h3 className="z-[2] text-sm font-semibold uppercase tracking-wider text-muted-foreground">Install on all platforms</h3>
        <div className="z-[2] flex flex-wrap items-center justify-center gap-4">
          <a href="#"><Image src={merlinAssets.stores.chrome} alt="Chrome Web Store" width={180} height={52} className="h-12 w-auto" /></a>
          <a href="#"><Image src={merlinAssets.stores.googlePlay} alt="Google Play" width={180} height={52} className="h-12 w-auto" /></a>
          <a href="#"><Image src={merlinAssets.stores.apple} alt="App Store" width={140} height={44} className="h-11 w-auto" /></a>
        </div>
        <a href="#pricing" className="z-[2] rounded-full border border-border bg-muted/50 px-5 py-2 text-sm text-foreground hover:bg-accent">
          $130 worth of value for just $19!
        </a>
        <p className="z-[2] max-w-xl text-center text-sm text-muted-foreground">
          People across teams love {BRAND} for delivering <span className="text-foreground">$130 worth of value for just $19!</span>
        </p>
      </div>

      {/* EXTENSION */}
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-16 xl:px-0 md:flex-row md:items-center md:py-24">
        <Image src={extFeatures[extIdx].image} alt="" width={700} height={520} className="w-full rounded-2xl" />
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">{BRAND} Chrome Extension</p>
          <h2 className="mt-2 font-serif text-3xl font-normal text-foreground md:text-4xl">One-click answers in realtime</h2>
          <p className="mt-3 text-muted-foreground">Get context from wherever you are, and just ask with one click.</p>
          <div className="mt-8 space-y-6">
            {extFeatures.map((f, i) => (
              <button key={f.title} type="button" onClick={() => setExtIdx(i)} className={`block w-full text-left transition ${extIdx === i ? 'text-foreground' : 'text-muted-foreground hover:text-foreground/80'}`}>
                <p className="font-medium">{f.title}</p>
                <p className="mt-1 text-sm">{f.desc}</p>
              </button>
            ))}
          </div>
          <a href={BRAND_APP} className="mt-8 inline-block text-sm font-medium text-foreground hover:underline">Get the extension →</a>
          <div className="mt-6 flex gap-2">
            <button type="button" onClick={() => setExtIdx((i) => Math.max(0, i - 1))} className="rounded-full border border-border p-2 hover:bg-accent"><ChevronLeft className="h-4 w-4" /></button>
            <button type="button" onClick={() => setExtIdx((i) => Math.min(extFeatures.length - 1, i + 1))} className="rounded-full border border-border p-2 hover:bg-accent"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
      </section>

      {/* CHAT */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 xl:px-0">
          <div className="text-center">
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">NEW · {BRAND} Chat</span>
            <h2 className="mt-4 font-serif text-3xl font-normal text-foreground md:text-4xl">For those who build</h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">Research with realtime info, visualise insights and build products with words.</p>
            <a href={BRAND_APP} className="mt-6 inline-flex h-9 items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow hover:bg-secondary/80">Explore now</a>
          </div>
          <Image src={chatCards[chatIdx].image} alt="" width={900} height={500} className="mx-auto mt-14 w-full max-w-4xl rounded-2xl" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {chatCards.map((c, i) => (
              <button key={c.title} type="button" onClick={() => setChatIdx(i)} className={`rounded-2xl border p-4 text-left transition ${chatIdx === i ? 'border-foreground/30 bg-accent' : 'border-border hover:border-foreground/20'}`}>
                <h4 className="text-sm font-semibold text-foreground">{c.title}</h4>
                <p className="mt-2 text-xs text-muted-foreground">{c.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Remaining sections use same shadcn tokens */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 xl:px-0 lg:grid-cols-2">
          <Image src={merlinAssets.social.globe} alt="" width={480} height={480} className="mx-auto max-w-md" />
          <div>
            <h2 className="font-serif text-3xl font-normal text-foreground md:text-4xl">Available in 200+ countries</h2>
            <p className="mt-3 text-muted-foreground">Experience the best of AI with {BRAND}, even in regions where ChatGPT and other LLMs are restricted.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center xl:px-0">
          <h2 className="font-serif text-3xl font-normal text-foreground md:text-4xl">All top AI Models in one</h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {merlinAssets.models.map((m) => (
              <div key={m.name} className="flex items-center gap-4 rounded-2xl border border-border p-4 text-left">
                <Image src={m.icon} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
                <span className="text-sm text-foreground">{m.name}</span>
              </div>
            ))}
          </div>
          <a href={BRAND_APP} className="mt-10 inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow hover:bg-secondary/80">Hell yeah, I want this!</a>
        </div>
      </section>

      <section id="features" className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center xl:px-0">
          <h2 className="font-serif text-3xl font-normal text-foreground">All that... and more</h2>
          <div className="mt-8 flex justify-center gap-2">
            {(Object.keys(featureTabs) as Array<keyof typeof featureTabs>).map((t) => (
              <button key={t} type="button" onClick={() => setTab(t)} className={`rounded-full px-5 py-2 text-sm transition ${tab === t ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'}`}>{t}</button>
            ))}
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-2 text-left">
            {featureTabs[tab].map((f) => (
              <div key={f} className="rounded-xl border border-border px-5 py-4 text-sm text-foreground/80">{f}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 xl:px-0">
          <h2 className="text-center font-serif text-3xl font-normal text-foreground">Your workflow, our magic</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {merlinWorkflows.map((w) => (
              <div key={w.role} className="merlin-workflow-card relative min-h-[220px] overflow-hidden rounded-2xl border border-border p-6">
                <h4 className="font-semibold text-foreground">{w.role}</h4>
                <p className="mt-3 text-sm text-muted-foreground">{w.question}</p>
                <p className="mt-6 text-xs text-muted-foreground/60">Hover to see how {BRAND} solves this</p>
                <div className="merlin-workflow-answer whitespace-pre-line">{w.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center xl:px-0">
          <h2 className="font-serif text-3xl font-normal text-foreground">Most valuable AI subscription ever</h2>
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border p-8 text-left">
              <p className="text-sm text-muted-foreground">Other</p>
              <h3 className="mt-2 text-5xl text-foreground">$130</h3>
              <p className="text-sm text-muted-foreground">per month for multiple tools</p>
            </div>
            <div className="rounded-2xl border border-foreground/30 p-8 text-left">
              <p className="text-sm font-medium text-foreground">{BRAND}</p>
              <h3 className="mt-2 text-5xl text-foreground">$19</h3>
              <p className="text-sm text-muted-foreground">per month billed annually</p>
              <a href={BRAND_APP} className="mt-8 inline-flex h-10 w-full items-center justify-center rounded-md bg-secondary text-sm font-medium text-secondary-foreground shadow hover:bg-secondary/80">Buy now</a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center font-serif text-3xl font-normal text-foreground">Want to know more?</h2>
          <div className="mt-12">
            {merlinFaqs.map((faq, i) => (
              <div key={faq.q} className="border-b border-border py-5">
                <button type="button" onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="flex w-full items-center justify-between text-left">
                  <h3 className="pr-4 text-base font-medium text-foreground">{faq.q}</h3>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition ${faqOpen === i ? 'rotate-180' : ''}`} />
                </button>
                {faqOpen === i && <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 xl:px-0">
          <h2 className="text-center font-serif text-3xl font-normal text-foreground">1M+ and counting</h2>
          <div className="mt-14 overflow-hidden">
            <div className="merlin-review-marquee flex w-max gap-4">
              {[...merlinReviews, ...merlinReviews].map((r, i) => (
                <div key={`${r.author}-${i}`} className="w-[320px] shrink-0 rounded-2xl border border-border p-6">
                  <h4 className="text-sm font-semibold text-foreground">{r.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
                  <p className="mt-4 text-xs text-muted-foreground">{r.author} · {r.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-16">
        <div className="mx-auto max-w-7xl px-4 xl:px-0">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
            <GatorMark />
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {BRAND}. {BRAND_DOMAIN}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
