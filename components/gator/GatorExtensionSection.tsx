'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { merlinAssets } from '@/lib/merlinAssets'

const SLIDES = [
  {
    tag: 'Gator Extension',
    title: 'One-click answers in realtime',
    subtitle: 'Get context from wherever you are, and just ask with one click.',
    image: merlinAssets.extension.webpage,
    features: [
      {
        title: "Don't switch tabs. Just ask",
        desc: 'Summarize, search, repurpose and create content out of any website you visit.',
        image: merlinAssets.extension.webpage,
      },
      {
        title: 'Search better and get answers at a glance',
        desc: 'Avoid spending time going through each search result. Get a summary and ask for details.',
        image: merlinAssets.extension.search,
      },
      {
        title: 'Add context with...anything',
        desc: 'Writing a contract or making a quiz? Upload PDFs, let Gator learn and respond.',
        image: merlinAssets.extension.context,
      },
      {
        title: 'Learn smart, not in a rush',
        desc: 'Spend time actively learning using video summaries and chat with the video.',
        image: merlinAssets.extension.learn,
      },
    ],
  },
]

export default function GatorExtensionSection() {
  const [featureIdx, setFeatureIdx] = useState(0)
  const current = SLIDES[0]
  const feature = current.features[featureIdx]

  return (
    <section className="border-t border-black/[0.06] bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <Image
              src={feature.image}
              alt={feature.title}
              width={800}
              height={600}
              className="w-full rounded-2xl shadow-xl transition-all duration-500"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-gator-700">{current.tag}</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {current.title}
            </h2>
            <p className="mt-3 text-base text-ink-muted">{current.subtitle}</p>

            <div className="mt-8 space-y-5">
              {current.features.map((f, i) => (
                <button
                  key={f.title}
                  type="button"
                  onClick={() => setFeatureIdx(i)}
                  className={`block w-full text-left transition ${featureIdx === i ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
                >
                  <h3 className="text-sm font-semibold text-ink">{f.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{f.desc}</p>
                </button>
              ))}
            </div>

            <a
              href="https://app.gator.so?ref=extension"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gator-700 transition hover:text-gator-600"
            >
              Get the extension
              <ArrowRight className="h-4 w-4" />
            </a>

            <div className="mt-6 flex gap-2">
              <button
                type="button"
                onClick={() => setFeatureIdx((i) => Math.max(0, i - 1))}
                className="rounded-full border border-black/10 p-2 transition hover:bg-black/[0.04]"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setFeatureIdx((i) => Math.min(current.features.length - 1, i + 1))}
                className="rounded-full border border-black/10 p-2 transition hover:bg-black/[0.04]"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
