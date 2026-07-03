'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUp, ChevronDown, ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react'
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

export default function MerlinClone() {
  const [query, setQuery] = useState('')
  const [extIdx, setExtIdx] = useState(0)
  const [chatIdx, setChatIdx] = useState(0)
  const [socialIdx, setSocialIdx] = useState(0)
  const [tab, setTab] = useState<keyof typeof featureTabs>('Create')
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const [dark, setDark] = useState(true)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `${BRAND_APP}?q=${encodeURIComponent(query.trim() || `Hello ${BRAND}`)}`
  }

  return (
    <div className="merlin-page min-h-screen overflow-x-hidden">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#161616]/80 backdrop-blur-xl">
        <div className="merlin-container flex h-16 items-center justify-between gap-4">
          <GatorLogo asLink variant="full" theme="dark" />
          <nav className="hidden items-center gap-1 lg:flex">
            <button type="button" className="merlin-nav-link flex items-center gap-1 rounded-md px-3 py-2 text-sm text-white/65 hover:bg-white/5 hover:text-white">
              Product <ChevronDown className="h-3.5 w-3.5 opacity-50" />
            </button>
            {['Pricing', 'Affiliate', 'Teams', 'Chat', 'Agent'].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="rounded-md px-3 py-2 text-sm text-white/65 transition hover:bg-white/5 hover:text-white">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setDark(!dark)} className="hidden rounded-md p-2 text-white/65 hover:bg-white/5 sm:block" aria-label="Toggle theme">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href={BRAND_APP} className="hidden rounded-md border border-white/10 px-3 py-2 text-sm text-white/80 hover:bg-white/5 sm:inline-flex">
              Add {BRAND} Extension
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex flex-col items-center gap-9 px-4 pb-16 pt-20 md:my-16 md:pb-24">
        <Image src={merlinAssets.hero.gradient} alt="" width={1920} height={600} className="pointer-events-none absolute inset-x-0 top-0 h-[500px] w-full object-cover opacity-40" priority />
        <div className="relative flex w-full max-w-3xl flex-col items-center gap-6 text-center">
          <p className="flex items-center gap-2 text-sm text-white/65">
            <Image src={merlinAssets.hero.sparkles} alt="" width={16} height={16} className="h-4 w-4" />
            Ideas
          </p>
          <h1 className="merlin-h1 text-white">are a chat away</h1>
          <form onSubmit={submit} className="w-full max-w-2xl">
            <div className="merlin-input-shell">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Ask ${BRAND}`}
                className="min-w-0 flex-1 bg-transparent py-3 text-base text-white outline-none placeholder:text-white/35"
              />
              <button type="submit" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Send">
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </form>
          <a href={BRAND_APP} className="merlin-btn-primary px-6 py-3">Get Started for FREE</a>
        </div>
        <Image src={merlinAssets.hero.illustration} alt={`${BRAND} chat`} width={900} height={600} className="relative w-full max-w-3xl" priority />
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/45">Trusted by 20M+ users</h3>
        <div className="w-full max-w-5xl overflow-hidden">
          <div className="merlin-marquee flex w-max gap-12">
            {[...merlinAssets.brands, ...merlinAssets.brands].map((logo, i) => (
              <Image key={`${logo}-${i}`} src={logo} alt="" width={100} height={32} className="h-8 w-auto shrink-0 opacity-40" />
            ))}
          </div>
        </div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/45">Install on all platforms</h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#"><Image src={merlinAssets.stores.chrome} alt="Chrome Web Store" width={180} height={52} className="h-12 w-auto" /></a>
          <a href="#"><Image src={merlinAssets.stores.googlePlay} alt="Google Play" width={180} height={52} className="h-12 w-auto" /></a>
          <a href="#"><Image src={merlinAssets.stores.apple} alt="App Store" width={140} height={44} className="h-11 w-auto" /></a>
        </div>
        <a href="#pricing" className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80 hover:bg-white/10">
          $130 worth of value for just $19!
        </a>
        <p className="max-w-xl text-center text-sm text-white/50">
          People across teams love {BRAND} for delivering <span className="text-white">$130 worth of value for just $19!</span>
        </p>
      </section>

      {/* EXTENSION */}
      <section className="merlin-section">
        <div className="merlin-container grid items-center gap-12 lg:grid-cols-2">
          <Image src={EXT_FEATURES[extIdx].image} alt="" width={700} height={520} className="w-full rounded-2xl" />
          <div>
            <p className="text-sm text-white/50">{BRAND} Chrome Extension</p>
            <h2 className="merlin-h2 mt-2 text-white">One-click answers in realtime</h2>
            <p className="mt-3 text-white/65">Get context from wherever you are, and just ask with one click.</p>
            <div className="mt-8 space-y-6">
              {EXT_FEATURES.map((f, i) => (
                <button key={f.title} type="button" onClick={() => setExtIdx(i)} className={`block w-full text-left transition ${extIdx === i ? 'text-white' : 'text-white/45 hover:text-white/70'}`}>
                  <p className="font-medium">{f.title}</p>
                  <p className="mt-1 text-sm">{f.desc}</p>
                </button>
              ))}
            </div>
            <a href={BRAND_APP} className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white hover:underline">Get the extension →</a>
            <div className="mt-6 flex gap-2">
              <button type="button" onClick={() => setExtIdx((i) => Math.max(0, i - 1))} className="rounded-full border border-white/10 p-2 hover:bg-white/5"><ChevronLeft className="h-4 w-4" /></button>
              <button type="button" onClick={() => setExtIdx((i) => Math.min(EXT_FEATURES.length - 1, i + 1))} className="rounded-full border border-white/10 p-2 hover:bg-white/5"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* CHAT */}
      <section className="merlin-section border-t border-white/10">
        <div className="merlin-container">
          <div className="text-center">
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">NEW · {BRAND} Chat</span>
            <h2 className="merlin-h2 mt-4 text-white">For those who build</h2>
            <h4 className="mx-auto mt-3 max-w-2xl text-lg font-normal text-white/65">Research with realtime info, visualise insights and build products with words.</h4>
            <a href={BRAND_APP} className="merlin-btn-primary mt-6">Explore now</a>
          </div>
          <div className="relative mt-14">
            <Image src={CHAT_CARDS[chatIdx].image} alt="" width={900} height={500} className="mx-auto w-full max-w-4xl rounded-2xl" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CHAT_CARDS.map((c, i) => (
                <button key={c.title} type="button" onClick={() => setChatIdx(i)} className={`merlin-card p-4 text-left transition ${chatIdx === i ? 'border-white/25' : ''}`}>
                  <h4 className="text-sm font-semibold text-white">{c.title}</h4>
                  <p className="mt-2 text-xs text-white/55">{c.desc}</p>
                </button>
              ))}
            </div>
          </div>
          <blockquote className="mx-auto mt-16 flex max-w-2xl items-center gap-4">
            <Image src={merlinAssets.chat.testimonial} alt="" width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
            <div>
              <p className="text-white/80">&ldquo;{BRAND} is my go-to AI assistant. It understands Chinese and helps with translations. A true multilingual gem!&rdquo;</p>
              <p className="mt-2 text-sm font-medium text-white">Liang Wei <span className="text-white/45">@weiliang</span></p>
            </div>
          </blockquote>
        </div>
      </section>

      {/* GLOBE */}
      <section className="merlin-section border-t border-white/10">
        <div className="merlin-container grid items-center gap-12 lg:grid-cols-2">
          <Image src={merlinAssets.social.globe} alt="" width={480} height={480} className="mx-auto w-full max-w-md" />
          <div>
            <h2 className="merlin-h2 text-white">Available in 200+ countries</h2>
            <p className="mt-3 text-white/65">Experience the best of AI with {BRAND}, even in regions where ChatGPT and other LLMs are restricted.</p>
            <div className="mt-10 flex flex-wrap gap-10">
              {[
                { score: '4.8', label: 'on Chrome Store', icon: merlinAssets.ratings.chrome },
                { score: '4.3', label: 'by AppSumo users', icon: merlinAssets.ratings.appsumo },
              ].map((r) => (
                <div key={r.label} className="flex items-center gap-3">
                  <Image src={r.icon} alt="" width={36} height={36} className="h-9 w-9" />
                  <div>
                    <p className="text-4xl font-normal text-white">{r.score}</p>
                    <p className="text-xs text-white/45">{r.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="merlin-section border-t border-white/10">
        <div className="merlin-container">
          <p className="text-sm text-white/50">{BRAND} Chrome Extension</p>
          <h2 className="merlin-h2 mt-2 text-white">Stay social, not drained</h2>
          <p className="mt-3 max-w-2xl text-white/65">With {BRAND}&apos;s Chrome Extension, be digitally present effortlessly. Engage, reach out and express better with the world.</p>
          <a href={BRAND_APP} className="mt-4 inline-block text-sm font-medium text-white hover:underline">Start creating for free!</a>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <Image src={SOCIAL_SLIDES[socialIdx].image} alt="" width={700} height={500} className="w-full rounded-2xl" />
            <div>
              <h4 className="text-lg font-medium text-white">{SOCIAL_SLIDES[socialIdx].title}</h4>
              <p className="mt-2 text-white/65">{SOCIAL_SLIDES[socialIdx].desc}</p>
              <div className="mt-6 flex gap-2">
                <button type="button" onClick={() => setSocialIdx((i) => Math.max(0, i - 1))} className="rounded-full border border-white/10 p-2"><ChevronLeft className="h-4 w-4" /></button>
                <button type="button" onClick={() => setSocialIdx((i) => Math.min(SOCIAL_SLIDES.length - 1, i + 1))} className="rounded-full border border-white/10 p-2"><ChevronRight className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODELS */}
      <section className="merlin-section border-t border-white/10">
        <div className="merlin-container text-center">
          <h2 className="merlin-h2 text-white">All top AI Models in one</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/65">Instant access to latest models as soon as they&apos;re live for FREE.</p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {merlinAssets.models.map((m) => (
              <div key={m.name} className="merlin-card flex items-center gap-4 p-4 text-left">
                <Image src={m.icon} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
                <span className="text-sm text-white">{m.name}</span>
              </div>
            ))}
          </div>
          <a href={BRAND_APP} className="merlin-btn-primary mt-10 px-8 py-3">Hell yeah, I want this!</a>
        </div>
      </section>

      {/* SECURITY */}
      <section className="merlin-section border-t border-white/10">
        <div className="merlin-container">
          <div className="text-center">
            <h2 className="merlin-h2 text-white">Secure and customizable</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/65">Build custom solutions that adapt to your context, knowledge or brand voice, with industry-leading security.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: 'Industry-grade data security', desc: 'GDPR, ISO 27001, AICPA SOC 2 certification for industry-standard data security.', image: merlinAssets.security[0] },
              { title: 'Make your own prompt library', desc: 'Automate generation of text, comments and posts with one click.', image: merlinAssets.security[1] },
              { title: 'Create custom bots', desc: 'String instructions, context and knowledge together to create custom chatbots.', image: merlinAssets.security[2] },
            ].map((item) => (
              <div key={item.title} className="merlin-card overflow-hidden">
                <Image src={item.image} alt="" width={400} height={220} className="h-44 w-full object-cover" />
                <div className="p-6">
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm text-white/55">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVICES */}
      <section className="merlin-section border-t border-white/10">
        <div className="merlin-container text-center">
          <h2 className="merlin-h2 text-white">On all your devices</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/65">Work with {BRAND} across all devices with synced history, access to your custom prompts and chatbots and all the great {BRAND} magic - effortlessly!</p>
          <Image src={merlinAssets.devices.macbook} alt="" width={900} height={560} className="mx-auto mt-12 w-full max-w-4xl" />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              { label: 'Web app', icon: merlinAssets.devices.chrome },
              { label: 'Chrome extension', icon: merlinAssets.devices.chrome },
              { label: 'iOS app', icon: merlinAssets.devices.apple },
              { label: 'Android app', icon: merlinAssets.devices.playstore },
            ].map((d) => (
              <a key={d.label} href={BRAND_APP} className="merlin-card flex items-center gap-3 px-5 py-3 text-sm text-white hover:border-white/20">
                <Image src={d.icon} alt="" width={20} height={20} className="h-5 w-5" /> {d.label}
              </a>
            ))}
          </div>
          <a href={BRAND_APP} className="merlin-btn-primary mt-10 px-8 py-3">Start using {BRAND}</a>
        </div>
      </section>

      {/* FEATURE TABS */}
      <section id="features" className="merlin-section border-t border-white/10">
        <div className="merlin-container text-center">
          <h2 className="merlin-h2 text-white">All that... and more</h2>
          <p className="mt-3 text-white/65">Here&apos;s everything {BRAND} has to offer. P.S. This list grows on every week!</p>
          <div className="mt-8 flex justify-center gap-2">
            {(Object.keys(featureTabs) as Array<keyof typeof featureTabs>).map((t) => (
              <button key={t} type="button" onClick={() => setTab(t)} className={`rounded-full px-5 py-2 text-sm transition ${tab === t ? 'bg-white text-[#171717]' : 'text-white/60 hover:text-white'}`}>{t}</button>
            ))}
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-2 text-left">
            {featureTabs[tab].map((f) => (
              <div key={f} className="merlin-card px-5 py-4 text-sm text-white/80">{f}</div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="merlin-section border-t border-white/10">
        <div className="merlin-container">
          <div className="text-center">
            <h2 className="merlin-h2 text-white">Your workflow, our magic</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/65">Whether you&apos;re a student, marketer, tech pro or even a founder, {BRAND} can make your life much easier at work.</p>
            <a href="#features" className="mt-4 inline-block text-sm text-white/70 hover:text-white">See how {BRAND} fits your workflow →</a>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {merlinWorkflows.map((w) => (
              <div key={w.role} className="merlin-workflow-card merlin-card relative min-h-[220px]">
                <h4 className="font-semibold text-white">{w.role}</h4>
                <p className="mt-3 text-sm text-white/55">{w.question}</p>
                <p className="mt-6 text-xs text-white/35">Hover to see how {BRAND} solves this</p>
                <div className="merlin-workflow-answer whitespace-pre-line">{w.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="merlin-section border-t border-white/10">
        <div className="merlin-container text-center">
          <h2 className="merlin-h2 text-white">Most valuable AI subscription ever</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/65">Untrap yourself from thousands of tools with overlapping features.</p>
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="merlin-card p-8 text-left">
              <p className="text-sm text-white/45">Other</p>
              <h3 className="mt-2 text-5xl text-white">$130</h3>
              <p className="text-sm text-white/55">per month for multiple tools</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/35">Purchased individually</p>
              <ul className="mt-4 space-y-2 text-sm text-white/65">
                {['Claude AI $30/m', 'OpenAI $20/m', 'Gemini Advanced $20/m', 'Mistral AI $20/m', 'Open source model hosting $40/m'].map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
            <div className="merlin-card border-white/20 p-8 text-left">
              <p className="text-sm font-medium text-white">{BRAND}</p>
              <h3 className="mt-2 text-5xl text-white">$19</h3>
              <p className="text-sm text-white/55">per month billed annually</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/35">One purchase is all it takes.</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {['All data in one place', '24x7 support at your service', 'Great value for money'].map((l) => (
                  <li key={l}>✓ {l}</li>
                ))}
              </ul>
              <div className="mt-8 flex gap-3">
                <a href={BRAND_APP} className="merlin-btn-primary flex-1 py-3 text-center">Buy now</a>
                <a href="#faq" className="flex-1 rounded-md border border-white/10 py-3 text-center text-sm text-white hover:bg-white/5">Explore plans</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="merlin-section border-t border-white/10">
        <div className="merlin-container max-w-3xl">
          <div className="text-center">
            <h2 className="merlin-h2 text-white">Want to know more?</h2>
            <p className="mt-3 text-white/65">Here&apos;s a list of FAQs to help you get started!</p>
          </div>
          <div className="mt-12">
            {merlinFaqs.map((faq, i) => (
              <div key={faq.q} className="merlin-faq-item">
                <button type="button" onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="flex w-full items-center justify-between text-left">
                  <h3 className="pr-4 text-base font-medium text-white">{faq.q}</h3>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-white/45 transition ${faqOpen === i ? 'rotate-180' : ''}`} />
                </button>
                {faqOpen === i && <p className="mt-4 text-sm leading-relaxed text-white/60">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="merlin-section border-t border-white/10">
        <div className="merlin-container">
          <div className="text-center">
            <h2 className="merlin-h2 text-white">1M+ and counting</h2>
            <p className="mt-3 text-white/65">Love for {BRAND} is only growing multifold!</p>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/45">What makes us your perfect AI partner? We function on high intelligence, integrity, and energy.</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {[
              { score: '4.8', label: 'Chrome Store', icon: merlinAssets.ratings.chrome },
              { score: '4.3', label: 'AppSumo', icon: merlinAssets.ratings.appsumo },
              { score: '4.3', label: 'Play Store', icon: merlinAssets.ratings.playstore },
              { score: '4.7', label: 'App Store', icon: merlinAssets.ratings.apple },
            ].map((r) => (
              <div key={r.label} className="text-center">
                <Image src={r.icon} alt="" width={40} height={40} className="mx-auto h-10 w-10" />
                <p className="mt-2 text-2xl text-white">{r.score}</p>
                <p className="text-xs text-white/45">{r.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 overflow-hidden">
            <div className="merlin-review-marquee flex w-max gap-4">
              {[...merlinReviews, ...merlinReviews].map((r, i) => (
                <div key={`${r.author}-${i}`} className="merlin-card w-[320px] shrink-0 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Image src={merlinAssets.avatars[i % merlinAssets.avatars.length]} alt="" width={36} height={36} className="h-9 w-9 rounded-full" />
                    <div>
                      <p className="text-xs font-medium text-white">{r.author}</p>
                      <p className="text-xs text-white/40">{r.source}</p>
                    </div>
                  </div>
                  <h4 className="text-sm font-semibold text-white">{r.title}</h4>
                  <p className="mt-2 text-sm text-white/55">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAMS CTA */}
      <section id="teams" className="merlin-section border-t border-white/10">
        <div className="merlin-container text-center">
          <h2 className="merlin-h2 text-white">Bring {BRAND} to your team</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/65">Empower your entire organization with AI that works where your team already does.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button type="button" className="merlin-btn-primary px-6 py-3">Book a demo</button>
            <a href={BRAND_APP} className="rounded-md border border-white/10 px-6 py-3 text-sm text-white hover:bg-white/5">Discover Teams</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-16">
        <div className="merlin-container">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <GatorLogo variant="full" theme="dark" />
              <a href={`https://${BRAND_DOMAIN}`} className="mt-4 block text-sm text-white/45 hover:text-white">{BRAND_DOMAIN}</a>
              <a href={BRAND_APP} className="merlin-btn-primary mt-6">Start using {BRAND}</a>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/35">Tools</h4>
              <ul className="mt-4 space-y-2">
                {FOOTER_TOOLS.map((l) => <li key={l}><a href="#" className="text-sm text-white/55 hover:text-white">{l}</a></li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/35">Company</h4>
              <ul className="mt-4 space-y-2">
                {FOOTER_COMPANY.map((l) => <li key={l}><a href="#" className="text-sm text-white/55 hover:text-white">{l}</a></li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/35">Get {BRAND}</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/55">
                <li><a href={BRAND_APP} className="hover:text-white">Web app</a></li>
                <li><a href="#" className="hover:text-white">Chrome extension</a></li>
                <li><a href="#" className="hover:text-white">iOS app</a></li>
                <li><a href="#" className="hover:text-white">Android app</a></li>
              </ul>
              <button type="button" className="mt-6 text-sm text-white/55 hover:text-white">Contact us</button>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-xs text-white/35">© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
            <button type="button" className="flex items-center gap-2 text-xs text-white/45">English <ChevronDown className="h-3 w-3" /></button>
          </div>
        </div>
      </footer>
    </div>
  )
}
