'use client'

import { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  {
    tag: 'Gator Extension',
    title: 'One-click answers in realtime',
    subtitle: 'Get context from wherever you are, and just ask with one click.',
    features: [
      {
        title: "Don't switch tabs. Just ask",
        desc: 'Summarize, search, repurpose and create content out of any website you visit.',
      },
      {
        title: 'Search better and get answers at a glance',
        desc: 'Avoid spending time going through each search result. Get a summary and ask for details.',
      },
      {
        title: 'Add context with...anything',
        desc: 'Writing a contract or making a quiz? Upload PDFs, let Gator learn and respond.',
      },
      {
        title: 'Learn smart, not in a rush',
        desc: 'Spend time actively learning using video summaries and chat with the video.',
      },
    ],
  },
]

export default function GatorExtensionSection() {
  const [slide, setSlide] = useState(0)
  const current = SLIDES[slide]

  return (
    <section className="border-t border-black/[0.06] bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-md rounded-2xl border border-black/[0.08] bg-[#fafaf9] p-6 shadow-xl">
              <div className="mb-4 flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-2 flex-1 truncate text-xs text-ink-faint">
                  docs.google.com/document
                </span>
              </div>
              <div className="space-y-3 rounded-xl bg-white p-4 shadow-sm">
                <p className="text-sm text-ink-muted">
                  Summarize this document and pull out the key action items
                </p>
                <div className="rounded-lg bg-gator/10 p-3">
                  <p className="text-sm text-ink">
                    <span className="font-semibold text-gator-700">3 action items found:</span>{' '}
                    1) Launch beta by Q3 2) Hire 2 engineers 3) Update pricing page
                  </p>
                </div>
              </div>
              <div className="absolute -right-3 -top-3 rounded-full bg-gator px-3 py-1 text-xs font-semibold text-white shadow-lg">
                Gator
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-medium text-gator-700">{current.tag}</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {current.title}
            </h2>
            <p className="mt-3 text-base text-ink-muted">{current.subtitle}</p>

            <div className="mt-8 space-y-6">
              {current.features.map((f) => (
                <div key={f.title}>
                  <h3 className="text-sm font-semibold text-ink">{f.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{f.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="https://app.gator.so?ref=extension"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gator-700 transition hover:text-gator-600"
            >
              Get the extension
              <ArrowRight className="h-4 w-4" />
            </a>

            <div className="mt-8 flex gap-2">
              <button
                type="button"
                onClick={() => setSlide((s) => Math.max(0, s - 1))}
                className="rounded-full border border-black/10 p-2 transition hover:bg-black/[0.04]"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setSlide((s) => Math.min(SLIDES.length - 1, s + 1))}
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
