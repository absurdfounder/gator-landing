'use client'

import { useState } from 'react'
import { ArrowUpRight, Calendar, ChevronDown, ChevronRight as ChevronRightIcon, Globe } from 'lucide-react'
import MerlinImage from '@/components/gator/merlin/MerlinImage'
import MerlinPricing from '@/components/gator/merlin/MerlinPricing'
import SlideCarousel from '@/components/gator/merlin/SlideCarousel'
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


export default function MerlinSections() {
  const [tab, setTab] = useState<keyof typeof featureTabs>('Create')
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const [workflowOpen, setWorkflowOpen] = useState<number | null>(null)

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
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg sm:h-72 sm:aspect-auto">
                <MerlinImage src={f.image} alt={f.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="rounded-lg object-cover" />
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
          <span className="inline-flex items-center rounded-sm border border-blue-600 bg-background px-3 py-0.5 text-xs font-semibold text-blue-600">
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
        <blockquote className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-2 text-center sm:flex-row sm:items-start sm:text-left">
          <MerlinImage src={merlinAssets.chat.testimonial} alt="" width={56} height={56} className="h-14 w-14 shrink-0 rounded-full object-cover" />
          <div className="text-left">
            <p className="text-foreground/80">&ldquo;{BRAND} is my go-to AI assistant. It understands Chinese and helps with translations. A true multilingual gem!&rdquo;</p>
            <p className="mt-2 text-sm font-medium text-foreground">Liang Wei <span className="text-muted-foreground">@weiliang</span></p>
          </div>
        </blockquote>
      </div>

      {/* GLOBE */}
      <div className="mx-auto flex w-full max-w-7xl flex-col overflow-hidden px-4 xl:px-0">
        <div className="flex w-full flex-col overflow-hidden rounded-[32px] border border-border bg-card md:grid md:grid-cols-3">
          <div className="relative col-span-1 block min-h-[360px] w-full overflow-hidden bg-yellow-400 sm:min-h-[480px] md:h-[600px]">
            <div className="absolute -left-24 sm:-left-20 md:-left-32">
              <MerlinImage src={merlinAssets.social.globe} alt="" width={500} height={600} className="h-[360px] w-full object-cover sm:h-[480px] md:h-[600px]" />
            </div>
            <div className="absolute bottom-14 right-4 z-20 max-w-52 rounded-xl border border-border bg-card p-0 shadow">
              <div className="flex flex-col gap-2 px-4 py-3">
                <p className="line-clamp-5 font-sans text-sm font-light text-foreground">
                  {BRAND} summarizes videos, helps draft tweets, and lets me chat with websites in Spanish. It&apos;s incredibly versatile!
                </p>
                <div className="flex items-center gap-2">
                  <MerlinImage src={merlinAssets.chat.testimonial} alt="" width={28} height={28} className="size-7 rounded-full object-cover" />
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
                    <MerlinImage src={r.icon} alt="" width={36} height={36} className="h-9 w-9" />
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
                    <MerlinImage src={m.icon} alt="" width={32} height={32} className="size-8 shrink-0 object-contain" />
                    <span className="text-lg text-foreground">{m.name}</span>
                  </div>
                ))}
              </div>
              <PrimaryBtn href={BRAND_APP}>
                Hell yeah, I want this! <ChevronRightIcon className="ml-1 size-5" />
              </PrimaryBtn>
            </div>
          </div>
          <div className="col-span-1 flex min-h-[280px] justify-center overflow-hidden bg-sky-400 md:min-h-[644px]">
            <div className="relative flex w-full flex-col items-center justify-center gap-6 overflow-hidden p-4">
              <div className="animate-marquee-reverse flex w-max gap-4">
                {[...merlinAssets.models, ...merlinAssets.models].map((m, i) => (
                  <div key={`${m.name}-${i}`} className="mx-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-card p-2 shadow-md">
                    <MerlinImage src={m.icon} alt="" width={28} height={28} className="size-7 object-contain" />
                  </div>
                ))}
              </div>
              <div className="animate-marquee flex w-max gap-4">
                {[...merlinAssets.models.slice().reverse(), ...merlinAssets.models.slice().reverse()].map((m, i) => (
                  <div key={`r-${m.name}-${i}`} className="mx-3 flex h-12 w-12 shrink-0 rotate-12 items-center justify-center rounded-md bg-card p-2 shadow-md">
                    <MerlinImage src={m.icon} alt="" width={28} height={28} className="size-7 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECURITY */}
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-4 xl:px-0">
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
            <div key={item.title} className="flex w-full max-w-xs flex-col sm:w-[calc(50%-1rem)] lg:w-full lg:max-w-xs">
              <div className="relative aspect-[4/3] w-full shrink-0 sm:h-48 sm:aspect-auto">
                <MerlinImage src={item.image} alt={item.title} fill sizes="(max-width: 640px) 100vw, 320px" className="rounded-lg object-cover" />
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
          <div className="col-span-1 flex min-h-[280px] items-center justify-center bg-[#C4B5FD] md:min-h-[644px]">
            <div className="relative w-full max-w-md animate-float px-6 sm:px-8">
              <MerlinImage src={merlinAssets.devices.macbook} alt="" width={482} height={492} className="w-full" />
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
                    {d.icon ? <MerlinImage src={d.icon} alt="" width={20} height={20} className="size-5 shrink-0" /> : <Globe className="size-5 shrink-0" />}
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
          <div className="flex items-center justify-center gap-2 overflow-x-auto px-2 py-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-3 [&::-webkit-scrollbar]:hidden">
            {(Object.keys(featureTabs) as Array<keyof typeof featureTabs>).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`shrink-0 rounded-full border px-3 py-1.5 font-serif text-base transition-all duration-200 sm:px-4 sm:py-2 sm:text-xl ${
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
                      <span className="mx-2 rounded-sm border border-blue-600 bg-background px-2.5 py-0.5 text-xs text-blue-600">
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
          {merlinWorkflows.map((w, i) => (
            <div
              key={w.role}
              role="button"
              tabIndex={0}
              onClick={() => setWorkflowOpen(workflowOpen === i ? null : i)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setWorkflowOpen(workflowOpen === i ? null : i) } }}
              className={`merlin-workflow-card relative min-h-[220px] cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-6 ${workflowOpen === i ? 'is-open' : ''}`}
            >
              <h4 className="font-semibold text-foreground">{w.role}</h4>
              <p className="mt-3 text-sm text-muted-foreground">{w.question}</p>
              <p className="mt-6 text-xs text-muted-foreground/60">Tap to see how {BRAND} solves this</p>
              <div className="merlin-workflow-answer whitespace-pre-line">{w.answer}</div>
            </div>
          ))}
        </div>
      </div>

      <MerlinPricing />

      {/* FAQ */}
      <div id="faq" className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4">
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
              <MerlinImage src={r.icon} alt="" width={40} height={40} className="mx-auto h-10 w-10" />
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
                  <MerlinImage src={merlinAssets.avatars[i % merlinAssets.avatars.length]} alt="" width={36} height={36} className="h-9 w-9 rounded-full" />
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
          <div className="relative min-h-[300px] w-full overflow-hidden py-8 md:min-h-[320px] md:flex-1 md:py-0">
            <div className="relative mx-auto flex w-max items-center gap-3 rounded-full border border-border bg-background p-4 shadow-lg sm:absolute sm:right-8 sm:top-8">
              <MerlinImage src="/images/gator-icon.png" alt="" width={40} height={40} className="size-10 rounded-full" />
              <div>
                <p className="font-sans text-sm font-medium text-foreground">{BRAND} Support</p>
                <p className="font-sans text-sm font-light text-muted-foreground">support@{BRAND_DOMAIN}</p>
              </div>
            </div>
            <div className="relative mx-auto mt-6 w-max rounded-md border border-border bg-background p-3 shadow-md sm:absolute sm:right-6 sm:top-28 sm:mt-0">
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
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
