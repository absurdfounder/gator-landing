'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'What is Gator?',
    a: 'Gator is an AI assistant and Chrome Extension that works as your AI-powered helper, saving you time and money. It provides top AI models such as GPT-4, Claude, DeepSeek, Llama, Mistral and more to generate responses on Google Search, summarize YouTube videos, blogs, documents, and reply to comments on LinkedIn, Twitter and Gmail.',
  },
  {
    q: 'How does Gator work?',
    a: 'Once installed as a Chrome Extension, you can open Gator on any website using Ctrl/⌘+M. On specific websites such as Twitter, LinkedIn, YouTube and Gmail, you\'ll find Gator buttons for easy access.',
  },
  {
    q: 'Is Gator free to use?',
    a: 'Yes, Gator is FREE to start. Free users get daily queries to run multiple AI models. Upgrade to Pro for unlimited access to all top models.',
  },
  {
    q: 'Do I need separate ChatGPT or Claude accounts?',
    a: 'No. Create a free account at gator.so and get access to all top models through a single account.',
  },
  {
    q: 'What counts as a query?',
    a: 'When you ask Gator anything and click enter, that\'s one query. On search engines like Google, Gator provides FREE automatic responses.',
  },
  {
    q: 'Which search engines are supported?',
    a: 'Gator currently supports Google, Bing, DuckDuckGo, Yahoo, and Yandex.',
  },
]

export default function GatorFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-black/[0.06] bg-[#fafaf9] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Want to know more?
          </h2>
          <p className="mt-3 text-base text-ink-muted">
            Here&apos;s a list of FAQs to help you get started!
          </p>
        </div>

        <div className="mt-12 space-y-2">
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              className="overflow-hidden rounded-xl border border-black/[0.06] bg-white"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="pr-4 text-sm font-semibold text-ink">{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-ink-faint transition ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="border-t border-black/[0.06] px-6 py-4">
                  <p className="text-sm leading-relaxed text-ink-muted">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
