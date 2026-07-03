'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Calendar, ChevronDown, ChevronLeft, ChevronRight, ChevronRight as ChevronRightIcon, Globe } from 'lucide-react'
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
import GatorLogo from '@/components/ui/GatorLogo'

const EXT_FEATURES = [
  { title: "Don't switch tabs. Just ask", desc: 'Summarize, search, repurpose and create content out of any website you visit.', image: merlinAssets.extension.webpage },
  { title: 'Search better and get answers at a glance.', desc: 'Avoid spending time going through each search result on Google. Instead, get a summary and ask for specific details.', image: merlinAssets.extension.search },
  { title: 'Add context with...anything', desc: 'Writing a contract or making a quiz? Just upload guidebooks or lecture PDFs, let Gator learn from them and respond.', image: merlinAssets.extension.context },
  { title: 'Learn smart, not in a rush', desc: 'Spend time actively learning using video summaries and chat with the video, instead of rushing videos on 2x.', image: merlinAssets.extension.learn },
]

const CHAT_CARDS = [
  { title: 'Use your own knowledge to research', desc: 'With Projects, add any context, create reusable knowledge bases and query repeatedly for tailored responses.', image: merlinAssets.chat.projects },
  { title: 'Turn words into infographics', desc: 'With Crafts, generate a variety of diagrams and interactive charts with just a prompt.', image: merlinAssets.chat.infographics },
  { title: 'Create working app snippets', desc: 'Prototype rapidly with React and Shadcn based app snippets and edit code on the fly.', image: merlinAssets.chat.appsnip },
  { title: 'Use OpenAI o1 with realtime web', desc: 'Use chain-of-thought reasoning with realtime web sources to get a powerful research machine in your hands', image: merlinAssets.chat.reasoning },
]

const SOCIAL_SLIDES = [
  { title: 'Write mails effortlessly', desc: 'Compose mails with AI and generate replies in the context of the previous mail.', image: merlinAssets.social.gmail },
  { title: 'Draft posts and replies on social media', desc: 'Generate with prompts and save them for repeated use. Engagement on top.', image: merlinAssets.social.socialMedia },
  { title: 'Create content from videos', desc: 'Blogs, X posts, articles - you name it, from any YouTube video.', image: merlinAssets.social.video },
  { title: 'Get the perfect poster image', desc: 'Generate images with 20+ image models and aspect ratios for web and social media.', image: merlinAssets.social.imageGen },
]

const FEATURE_NEW = new Set([
  'Generate images with Flux 1.1 Pro',
  'Brand voice content with custom knowledge bases',
  'Flowcharts, mindmaps and 20+ infographic types',
  'Working app snippets, web code and components',
])

const FOOTER_TOOLS = [
  'AI for Google', 'AI for Twitter', 'AI for LinkedIn', 'AI Transformation', 'Text to Image - Bonkers',
  'AI Email Writer', 'Question AI', `Chat with ${BRAND}`, 'Free GPT-4o', 'Chat with Web Access',
  'Chat with PDF', 'Chat with Websites', 'Chat with Image', 'Ask AI', 'AI Detector',
  'AI Essay Writer', 'Plagiarism Checker', 'AI Translator', 'Bible GPT', '70+ More AI Tools',
  'YouTube Summarizer', 'Article Summaizer',
]

const FOOTER_COMPANY = [
  'Team', 'Privacy Policy', 'Legal', 'Cookie Policy', 'Terms and Conditions', 'Data Protection',
  'Careers', 'Refund Policy', 'Query Standards', 'Product Wiki', 'Newsroom', 'Blogs',
  'Change Shortcut', 'How It Works', 'Feature Request',
]

function PrimaryBtn({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={`inline-flex w-max items-center rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground shadow transition hover:bg-primary/90 ${className}`}>
      {children}
    </a>
  )
}

type SlideItem = { title: string; desc: string; image: string }

function SlideCarousel({ items, tall = true }: { items: SlideItem[]; tall?: boolean }) {
  const [idx, setIdx] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const scroll = (dir: number) => {
    const next = Math.max(0, Math.min(items.length - 1, idx + dir))
    setIdx(next)
    ref.current?.children[next]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-6">
      <div className="relative w-full overflow-hidden">
        <div
          ref={ref}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 pl-[max(1rem,calc(50%-163px))] pr-[max(1rem,calc(50%-163px))] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <div key={item.title} className="w-[326px] shrink-0 snap-center">
              <div className="flex w-[326px] flex-col gap-4">
                <div className={`relative w-full overflow-hidden rounded-lg ${tall ? 'h-[366px]' : 'h-44'}`}>
                  <Image src={item.image} alt="" fill className="rounded-lg object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="line-clamp-2 font-serif text-xl font-medium leading-8 text-foreground">{item.title}</h4>
                  <p className="font-sans text-base font-medium leading-relaxed text-muted-foreground md:text-lg">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <button type="button" onClick={() => scroll(-1)} disabled={idx === 0} className="rounded-full border border-border p-2 transition hover:bg-accent disabled:opacity-40"><ChevronLeft className="h-4 w-4" /></button>
        <button type="button" onClick={() => scroll(1)} disabled={idx === items.length - 1} className="rounded-full border border-border p-2 transition hover:bg-accent disabled:opacity-40"><ChevronRight className="h-4 w-4" /></button>
      </div>
    </div>
  )
}

export default function MerlinSections() {
  const [tab, setTab] = useState<keyof typeof featureTabs>('Create')
  const [faqOpen, setFaqOpen] = useState<number | null>(0)

  return (
    <>
      {/* EXTENSION — Merlin 2x2 feature grid */}
      <div className="container flex w-full flex-col gap-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 pb-1 md:flex-row md:items-start md:pb-2">
          <div className="flex w-full flex-col gap-2 md:flex-1">
            <div className="flex justify-center md:justify-normal">
              <span className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-sm font-medium text-secondary-foreground">
                {BRAND} Chrome Extension
              </span>
            </div>
            <h2 className="w-full text-center font-serif text-3xl font-medium leading-[44px] tracking-tight text-foreground md:text-left md:text-5xl md:leading-[58px]">
              One-click answers in realtime
            </h2>
          </div>
          <div className="flex w-full flex-col gap-9 md:flex-1">
            <p className="text-center font-sans text-lg font-light leading-8 text-muted-foreground md:text-left md:text-2xl md:leading-[38px]">
              Get context from wherever you are, and just ask with one click.
            </p>
            <div className="mx-auto md:mx-0">
              <PrimaryBtn href={BRAND_APP}>
                Get the extension <ArrowUpRight className="size-4" />
              </PrimaryBtn>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-20">
          {EXT_FEATURES.map((f) => (
            <div key={f.title} className="flex flex-col gap-4">
              <div className="relative h-72 w-full overflow-hidden rounded-lg">
                <Image src={f.image} alt={f.title} fill className="rounded-lg object-cover" />
              </div>
              <p className="font-sans text-lg font-light leading-8 text-muted-foreground md:text-2xl md:leading-[38px]">
                <span className="mr-1.5 font-serif text-lg font-medium text-foreground md:text-2xl">{f.title}</span>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CHAT */}
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 xl:px-0">
        <div className="flex w-full flex-col items-center justify-center gap-6 text-center">
          <span className="inline-flex items-center rounded-sm border border-blue-600 bg-background px-3 py-0.5 text-xs font-semibold text-blue-400">
            NEW · {BRAND} Chat
          </span>
          <h2 className="w-full font-serif text-3xl font-medium tracking-normal text-foreground md:text-5xl">
            For those who build
          </h2>
          <h4 className="max-w-2xl font-sans text-lg font-medium text-muted-foreground md:text-2xl">
            Research with realtime info, visualise insights and build products with words.
          </h4>
          <PrimaryBtn href={BRAND_APP}>
            Explore now <ChevronRightIcon className="ml-2 size-5" />
          </PrimaryBtn>
        </div>
        <SlideCarousel items={CHAT_CARDS} />
        <blockquote className="mx-auto flex max-w-2xl items-center gap-4">
          <Image src={merlinAssets.chat.testimonial} alt="" width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
          <div className="text-left">
            <p className="text-foreground/80">&ldquo;{BRAND} is my go-to AI assistant. It understands Chinese and helps with translations. A true multilingual gem!&rdquo;</p>
            <p className="mt-2 text-sm font-medium text-foreground">Liang Wei <span className="text-muted-foreground">@weiliang</span></p>
          </div>
        </blockquote>
      </div>

      {/* GLOBE */}
      <div className="mx-auto flex w-full max-w-7xl flex-col overflow-hidden px-4 xl:px-0">
        <div className="flex w-full flex-col overflow-hidden rounded-[32px] border border-border bg-card md:grid md:grid-cols-3">
          <div className="relative col-span-1 block h-[600px] w-full overflow-hidden bg-yellow-400">
            <div className="absolute -left-32 sm:-left-20">
              <Image src={merlinAssets.social.globe} alt="" width={500} height={600} className="h-[600px] w-full object-cover" />
            </div>
            <div className="absolute bottom-14 right-4 z-20 max-w-52 rounded-xl border border-border bg-card p-0 shadow">
              <div className="flex flex-col gap-2 px-4 py-3">
                <p className="line-clamp-5 font-sans text-sm font-light text-foreground">
                  {BRAND} summarizes videos, helps draft tweets, and lets me chat with websites in Spanish. It&apos;s incredibly versatile!
                </p>
                <div className="flex items-center gap-2">
                  <Image src={merlinAssets.chat.testimonial} alt="" width={28} height={28} className="size-7 rounded-full object-cover" />
                  <div>
                    <p className="text-xs font-light text-foreground">Maria</p>
                    <p className="text-xs font-light text-muted-foreground">@maria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex items-center justify-center p-6 lg:p-12">
            <div className="flex w-full max-w-lg flex-col gap-8">
              <h2 className="font-serif text-3xl font-medium tracking-normal text-foreground md:text-5xl">
                Available in 200+ countries
              </h2>
              <p className="font-sans text-lg font-medium text-muted-foreground">
                Experience the best of AI with {BRAND}, even in regions where ChatGPT and other LLMs are restricted.
              </p>
              <div className="flex flex-wrap gap-10">
                {[
                  { score: '4.8', label: 'on Chrome Store', icon: merlinAssets.ratings.chrome },
                  { score: '4.3', label: 'by AppSumo users', icon: merlinAssets.ratings.appsumo },
                ].map((r) => (
                  <div key={r.label} className="flex items-center gap-3">
                    <Image src={r.icon} alt="" width={36} height={36} className="h-9 w-9" />
                    <div>
                      <p className="text-4xl font-normal text-foreground">{r.score}</p>
                      <p className="text-xs text-muted-foreground">{r.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <PrimaryBtn href={BRAND_APP}>
                Get {BRAND} AI <ArrowUpRight className="ml-1 size-4" />
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </div>

      {/* SOCIAL */}
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 xl:px-0">
        <div className="flex flex-col gap-4 text-center">
          <span className="mx-auto inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-sm font-medium text-secondary-foreground">
            {BRAND} Chrome Extension
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-normal text-foreground md:text-5xl">
            Stay social, not drained
          </h2>
          <p className="mx-auto max-w-4xl font-sans text-lg font-medium text-muted-foreground md:text-2xl">
            With {BRAND}&apos;s Chrome Extension, be digitally present effortlessly. Engage, reach out and express better with the world.
          </p>
        </div>
        <div className="mx-auto">
          <PrimaryBtn href={BRAND_APP} className="text-base">
            Start creating for free! <ChevronRightIcon className="ml-1 size-5" />
          </PrimaryBtn>
        </div>
        <SlideCarousel items={SOCIAL_SLIDES} tall={false} />
      </div>

      {/* MODELS */}
      <div className="mx-auto flex w-full max-w-7xl flex-col overflow-hidden px-4 xl:px-0">
        <div className="flex w-full flex-col overflow-hidden rounded-[32px] border border-border bg-card md:grid md:grid-cols-3">
          <div className="col-span-2 flex items-center justify-center p-6 lg:p-12">
            <div className="flex max-w-2xl flex-col gap-8">
              <h2 className="font-serif text-3xl font-medium tracking-normal text-foreground md:text-5xl">
                All top AI Models in one
              </h2>
              <div className="flex w-full max-w-md flex-col gap-4">
                <p className="font-serif text-lg font-medium tracking-normal text-foreground">
                  Instant access to latest models as soon as they&apos;re live for FREE.
                </p>
                {merlinAssets.models.map((m) => (
                  <div key={m.name} className="flex items-center gap-6">
                    <Image src={m.icon} alt="" width={32} height={32} className="size-8 shrink-0 object-contain" />
                    <span className="text-lg text-foreground">{m.name}</span>
                  </div>
                ))}
              </div>
              <PrimaryBtn href={BRAND_APP}>
                Hell yeah, I want this! <ChevronRightIcon className="ml-1 size-5" />
              </PrimaryBtn>
            </div>
          </div>
          <div className="col-span-1 flex h-[644px] justify-center overflow-hidden bg-sky-400">
            <div className="relative flex w-full flex-col items-center justify-center gap-6 overflow-hidden p-4">
              <div className="animate-marquee-reverse flex w-max gap-4">
                {[...merlinAssets.models, ...merlinAssets.models].map((m, i) => (
                  <div key={`${m.name}-${i}`} className="mx-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-card p-2 shadow-md">
                    <Image src={m.icon} alt="" width={28} height={28} className="size-7 object-contain" />
                  </div>
                ))}
              </div>
              <div className="animate-marquee flex w-max gap-4">
                {[...merlinAssets.models.slice().reverse(), ...merlinAssets.models.slice().reverse()].map((m, i) => (
                  <div key={`r-${m.name}-${i}`} className="mx-3 flex h-12 w-12 shrink-0 rotate-12 items-center justify-center rounded-md bg-card p-2 shadow-md">
                    <Image src={m.icon} alt="" width={28} height={28} className="size-7 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECURITY */}
      <div className="flex w-full max-w-5xl flex-col items-center gap-12 px-4 xl:px-0">
        <div className="flex w-full flex-col items-center px-4 md:flex-row md:justify-between xl:px-0">
          <h2 className="mb-6 w-full max-w-md text-center font-serif text-3xl font-medium tracking-wide text-foreground md:mb-0 md:text-left md:text-5xl">
            Secure and customizable
          </h2>
          <p className="w-full max-w-md text-center font-sans text-lg font-light text-muted-foreground md:text-left md:text-2xl">
            Build custom solutions that adapt to your context, knowledge or brand voice, with industry-leading security.
          </p>
        </div>
        <div className="flex flex-wrap items-stretch justify-center gap-8">
          {[
            { title: 'Industry-grade data security', desc: 'GDPR, ISO 27001, AICPA SOC 2 certification for industry-standard data security.', image: merlinAssets.security[0] },
            { title: 'Make your own prompt library', desc: 'Automate generation of text, comments and posts with one click.', image: merlinAssets.security[1] },
            { title: 'Create custom bots', desc: 'String instructions, context and knowledge together to create custom chatbots.', image: merlinAssets.security[2] },
          ].map((item) => (
            <div key={item.title} className="flex w-full max-w-xs flex-col">
              <div className="relative h-48 w-full shrink-0">
                <Image src={item.image} alt="" fill className="rounded-lg object-cover" />
              </div>
              <div className="flex grow flex-col gap-4 pt-4">
                <h4 className="font-serif text-2xl font-medium tracking-normal text-foreground sm:min-h-16">{item.title}</h4>
                <p className="flex min-h-[84px] items-start font-sans text-lg font-medium text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DEVICES */}
      <div className="mx-auto flex w-full max-w-7xl flex-col overflow-hidden px-4 xl:px-0">
        <div className="flex w-full flex-col overflow-hidden rounded-[32px] border border-border bg-card md:grid md:grid-cols-3">
          <div className="col-span-1 flex h-[644px] items-center justify-center bg-[#C4B5FD]">
            <div className="relative w-full animate-float px-8">
              <Image src={merlinAssets.devices.macbook} alt="" width={482} height={492} className="w-full" />
            </div>
          </div>
          <div className="col-span-2 flex items-center justify-center p-6 lg:p-12">
            <div className="flex w-full max-w-[520px] flex-col gap-8">
              <h2 className="font-serif text-3xl font-medium tracking-normal text-foreground md:text-5xl">
                On all your devices
              </h2>
              <p className="font-sans text-lg font-light text-muted-foreground md:text-2xl md:leading-[38px]">
                Work with {BRAND} across all devices with synced history, access to your custom prompts and chatbots and all the great {BRAND} magic - effortlessly!
              </p>
              <div className="flex max-w-[346px] flex-wrap gap-2">
                {[
                  { label: 'Web app', icon: null },
                  { label: 'Chrome extension', icon: merlinAssets.devices.chrome },
                  { label: 'iOS app', icon: merlinAssets.devices.apple },
                  { label: 'Android app', icon: merlinAssets.devices.playstore },
                ].map((d) => (
                  <a key={d.label} href={BRAND_APP} className="flex cursor-pointer items-center gap-2 rounded-full bg-primary px-3 py-2 text-sm text-primary-foreground shadow-md">
                    {d.icon ? <Image src={d.icon} alt="" width={20} height={20} className="size-5 shrink-0" /> : <Globe className="size-5 shrink-0" />}
                    <span>{d.label}</span>
                  </a>
                ))}
              </div>
              <PrimaryBtn href={BRAND_APP}>Start using {BRAND}</PrimaryBtn>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE TABS */}
      <div id="features" className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 xl:px-0">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-normal text-foreground md:text-5xl">
            All that... and more
          </h2>
          <p className="font-sans text-lg font-medium text-muted-foreground">
            Here&apos;s everything {BRAND} has to offer. P.S. This list grows on every week!
          </p>
        </div>
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-8">
          <div className="flex items-center justify-center gap-3 overflow-x-auto py-2">
            {(Object.keys(featureTabs) as Array<keyof typeof featureTabs>).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`shrink-0 rounded-full border px-4 py-2 font-serif text-xl transition-all duration-200 ${
                  tab === t ? 'border-transparent bg-primary text-primary-foreground' : 'bg-background hover:bg-secondary'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <ul className="mx-auto w-full max-w-3xl border-t border-border">
            {featureTabs[tab].map((f) => (
              <li key={f} className="group border-b border-border">
                <div className="flex items-center px-6 py-4">
                  <h3 className="flex items-center text-base font-medium text-muted-foreground">
                    {f}
                    {FEATURE_NEW.has(f) && (
                      <span className="mx-2 rounded-sm border border-blue-600 bg-background px-2.5 py-0.5 text-xs text-blue-400">
                        NEW
                      </span>
                    )}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* WORKFLOW */}
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 xl:px-0">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-medium tracking-normal text-foreground md:text-5xl">
            Your workflow, our magic
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-lg font-medium text-muted-foreground">
            Whether you&apos;re a student, marketer, tech pro or even a founder, {BRAND} can make your life much easier at work.
          </p>
          <a href="#features" className="mt-4 inline-block text-sm text-muted-foreground hover:text-foreground">
            See how {BRAND} fits your workflow →
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {merlinWorkflows.map((w) => (
            <div key={w.role} className="merlin-workflow-card relative min-h-[220px] overflow-hidden rounded-2xl border border-border bg-card p-6">
              <h4 className="font-semibold text-foreground">{w.role}</h4>
              <p className="mt-3 text-sm text-muted-foreground">{w.question}</p>
              <p className="mt-6 text-xs text-muted-foreground/60">Hover to see how {BRAND} solves this</p>
              <div className="merlin-workflow-answer whitespace-pre-line">{w.answer}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PRICING */}
      <div id="pricing" className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 text-center xl:px-0">
        <h2 className="font-serif text-3xl font-medium tracking-normal text-foreground md:text-5xl">
          Most valuable AI subscription ever
        </h2>
        <p className="mx-auto max-w-lg font-sans text-lg font-medium text-muted-foreground">
          Untrap yourself from thousands of tools with overlapping features.
        </p>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 text-left">
            <p className="text-sm text-muted-foreground">Other</p>
            <h3 className="mt-2 font-serif text-5xl text-foreground">$130</h3>
            <p className="text-sm text-muted-foreground">per month for multiple tools</p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {['Claude AI $30/m', 'OpenAI $20/m', 'Gemini Advanced $20/m', 'Mistral AI $20/m', 'Open source model hosting $40/m'].map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-foreground/30 bg-card p-8 text-left">
            <p className="text-sm font-medium text-foreground">{BRAND}</p>
            <h3 className="mt-2 font-serif text-5xl text-foreground">$19</h3>
            <p className="text-sm text-muted-foreground">per month billed annually</p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/80">
              {['All data in one place', '24x7 support at your service', 'Great value for money'].map((l) => (
                <li key={l}>✓ {l}</li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <PrimaryBtn href={BRAND_APP} className="flex-1 justify-center">Buy now</PrimaryBtn>
              <a href="#faq" className="flex flex-1 items-center justify-center rounded-md border border-border px-3 py-2 text-sm hover:bg-accent">
                Explore plans
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="flex w-full max-w-3xl flex-col gap-8 px-4">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-medium tracking-normal text-foreground md:text-5xl">
            Want to know more?
          </h2>
          <p className="mt-3 font-sans text-lg font-medium text-muted-foreground">
            Here&apos;s a list of FAQs to help you get started!
          </p>
        </div>
        <div>
          {merlinFaqs.map((faq, i) => (
            <div key={faq.q} className="merlin-faq-item">
              <button type="button" onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="flex w-full items-center justify-between text-left">
                <h3 className="pr-4 text-base font-medium text-foreground">{faq.q}</h3>
                <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition ${faqOpen === i ? 'rotate-180' : ''}`} />
              </button>
              {faqOpen === i && <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* REVIEWS */}
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 xl:px-0">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-medium tracking-normal text-foreground md:text-5xl">
            1M+ and counting
          </h2>
          <p className="mt-3 font-sans text-lg font-medium text-muted-foreground">Love for {BRAND} is only growing multifold!</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { score: '4.8', label: 'Chrome Store', icon: merlinAssets.ratings.chrome },
            { score: '4.3', label: 'AppSumo', icon: merlinAssets.ratings.appsumo },
            { score: '4.3', label: 'Play Store', icon: merlinAssets.ratings.playstore },
            { score: '4.7', label: 'App Store', icon: merlinAssets.ratings.apple },
          ].map((r) => (
            <div key={r.label} className="text-center">
              <Image src={r.icon} alt="" width={40} height={40} className="mx-auto h-10 w-10" />
              <p className="mt-2 text-2xl text-foreground">{r.score}</p>
              <p className="text-xs text-muted-foreground">{r.label}</p>
            </div>
          ))}
        </div>
        <div className="overflow-hidden">
          <div className="merlin-review-marquee flex w-max gap-4">
            {[...merlinReviews, ...merlinReviews].map((r, i) => (
              <div key={`${r.author}-${i}`} className="w-[320px] shrink-0 rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Image src={merlinAssets.avatars[i % merlinAssets.avatars.length]} alt="" width={36} height={36} className="h-9 w-9 rounded-full" />
                  <div>
                    <p className="text-xs font-medium text-foreground">{r.author}</p>
                    <p className="text-xs text-muted-foreground">{r.source}</p>
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-foreground">{r.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TEAMS */}
      <div id="teams" className="mx-auto flex w-full max-w-7xl flex-col px-4 xl:px-0">
        <div className="relative flex w-full flex-col overflow-hidden rounded-xl border border-border bg-card md:flex-row md:gap-6">
          <div className="flex w-full flex-col gap-6 py-6 pl-6 md:py-8 md:pl-8">
            <h2 className="font-serif text-3xl font-medium tracking-normal text-foreground md:text-5xl">
              Teams love us too!
            </h2>
            <p className="w-full max-w-md font-sans text-lg font-light text-foreground">
              Want an end-to-end AI solution for your org? Let&apos;s talk.
            </p>
            <div className="flex flex-wrap gap-4">
              <PrimaryBtn href={BRAND_APP} className="h-11 gap-2 text-sm">
                Book a demo <Calendar className="size-5" />
              </PrimaryBtn>
              <PrimaryBtn href={BRAND_APP} className="h-11 gap-2 text-sm">
                Discover Teams <ArrowUpRight className="size-5" />
              </PrimaryBtn>
            </div>
          </div>
          <div className="relative h-[312px] w-full overflow-hidden md:h-auto md:min-h-[320px] md:flex-1">
            <div className="absolute right-3 top-8 z-[2] flex items-center gap-3 rounded-full border border-border bg-background p-4 shadow-lg sm:right-8">
              <Image src="/images/gator-icon.png" alt="" width={40} height={40} className="size-10 rounded-full" />
              <div>
                <p className="font-sans text-sm font-medium text-foreground">{BRAND} Support</p>
                <p className="font-sans text-sm font-light text-muted-foreground">support@{BRAND_DOMAIN}</p>
              </div>
            </div>
            <div className="absolute right-4 top-28 rounded-md border border-border bg-background p-3 shadow-md sm:right-6">
              <p className="mb-2 text-center font-sans text-sm font-medium text-foreground">July 2026</p>
              <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <span key={`dow-${i}`}>{d}</span>)}
                {Array.from({ length: 28 }).map((_, i) => (
                  <span key={i} className={`rounded p-1 ${i === 14 ? 'bg-primary text-primary-foreground' : ''}`}>{i + 1}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full border-t border-border py-16">
        <div className="mx-auto max-w-7xl px-4 xl:px-0">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <GatorLogo variant="full" theme="light" />
              <a href={`https://${BRAND_DOMAIN}`} className="mt-4 block text-sm text-muted-foreground hover:text-foreground">{BRAND_DOMAIN}</a>
              <PrimaryBtn href={BRAND_APP} className="mt-6">Start using {BRAND}</PrimaryBtn>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tools</h4>
              <ul className="mt-4 space-y-2">
                {FOOTER_TOOLS.map((l) => <li key={l}><a href="#" className="text-sm text-muted-foreground hover:text-foreground">{l}</a></li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Company</h4>
              <ul className="mt-4 space-y-2">
                {FOOTER_COMPANY.map((l) => <li key={l}><a href="#" className="text-sm text-muted-foreground hover:text-foreground">{l}</a></li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Get {BRAND}</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href={BRAND_APP} className="hover:text-foreground">Web app</a></li>
                <li><a href="#" className="hover:text-foreground">Chrome extension</a></li>
                <li><a href="#" className="hover:text-foreground">iOS app</a></li>
                <li><a href="#" className="hover:text-foreground">Android app</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
            <button type="button" className="flex items-center gap-2 text-xs text-muted-foreground">English <ChevronDown className="h-3 w-3" /></button>
          </div>
        </div>
      </footer>
    </>
  )
}
