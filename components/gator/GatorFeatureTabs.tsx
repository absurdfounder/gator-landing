'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Shield, Bot, Library } from 'lucide-react'
import { merlinAssets } from '@/lib/merlinAssets'

const TABS = ['Create', 'Research', 'Summarize'] as const

const TAB_FEATURES: Record<(typeof TABS)[number], string[]> = {
  Create: [
    'Posts and comments on X and LinkedIn',
    'Generate images with Flux 1.1 Pro',
    'Brand voice content with custom knowledge bases',
    'Flowcharts, mindmaps and 20+ infographic types',
    'Working app snippets, web code and components',
  ],
  Research: [
    'Write code, essays and reports with citations',
    'Use realtime web for up-to-date research',
    'Query your own documents and knowledge bases',
    'Analyse data from CSV and spreadsheets',
    'Build custom research bots with context',
  ],
  Summarize: [
    'Convert YouTube videos into posts and blogs',
    'Repurpose websites and documents into content',
    'Summarize long PDFs and lecture notes',
    'Get video summaries with timestamps',
    'One-click summaries on any webpage',
  ],
}

export default function GatorFeatureTabs() {
  const [active, setActive] = useState<(typeof TABS)[number]>('Create')

  return (
    <section id="features" className="border-t border-black/[0.06] bg-[#fafaf9] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            All that... and more
          </h2>
          <p className="mt-3 text-base text-ink-muted">
            Here&apos;s everything Gator has to offer. P.S. This list grows every week!
          </p>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                active === tab
                  ? 'bg-ink text-white'
                  : 'bg-white text-ink-muted hover:text-ink'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-3">
          {TAB_FEATURES[active].map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 rounded-xl border border-black/[0.06] bg-white px-5 py-4 text-sm text-ink"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gator" />
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GatorSecuritySection() {
  const items = [
    {
      icon: Shield,
      title: 'Industry-grade data security',
      desc: 'GDPR, ISO 27001, SOC 2 certification for industry-standard data security.',
      image: merlinAssets.security[0],
    },
    {
      icon: Library,
      title: 'Make your own prompt library',
      desc: 'Automate generation of text, comments and posts with one click.',
      image: merlinAssets.security[1],
    },
    {
      icon: Bot,
      title: 'Create custom bots',
      desc: 'String instructions, context and knowledge together to create custom chatbots.',
      image: merlinAssets.security[2],
    },
  ]

  return (
    <section className="border-t border-black/[0.06] bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Secure and customizable
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-ink-muted">
            Build custom solutions that adapt to your context, knowledge or brand voice.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-2xl border border-black/[0.06] bg-[#fafaf9]"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={240}
                className="h-40 w-full object-cover"
              />
              <div className="p-6">
                <div className="mb-3 inline-flex rounded-xl bg-gator/10 p-2 text-gator-700">
                  <item.icon className="h-4 w-4" />
                </div>
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
