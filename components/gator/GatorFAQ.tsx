'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'What is Gator?',
    a: 'Gator is an AI assistant that doesn\'t just answer questions — it takes action. Write code, browse the web, send emails, run commands, and complete multi-step tasks from a single conversation.',
  },
  {
    q: 'How is Gator different from ChatGPT?',
    a: 'ChatGPT gives you text. Gator gives you results. It connects to your tools, runs commands on your machine, browses websites, and delivers finished work — not just suggestions.',
  },
  {
    q: 'Is my data safe?',
    a: 'Yes. Gator runs in isolated environments, requires your approval for sensitive actions, and never trains on your private data. Enterprise plans include SOC 2 compliance and audit logs.',
  },
  {
    q: 'What channels does Gator work on?',
    a: 'Web, Slack, Telegram, WhatsApp, Discord, and email. Talk to Gator wherever you already work — same assistant, same memory, every channel.',
  },
  {
    q: 'Can I try it for free?',
    a: 'Absolutely. The free plan includes 50 messages per month with no credit card required. Upgrade anytime when you need more.',
  },
]

export default function GatorFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-canvas-warm py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gator">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Questions? We&apos;ve got answers.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              className="rounded-xl border border-[var(--color-line)] bg-white overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-semibold text-ink">{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-ink-muted transition ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="border-t border-[var(--color-line)] px-6 py-4">
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
