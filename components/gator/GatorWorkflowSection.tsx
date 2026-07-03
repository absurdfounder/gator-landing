'use client'

import { useState } from 'react'

const PERSONAS = [
  {
    role: 'Students',
    question: 'How do I nail my research assignments, ace my exams and learn effectively?',
    answer:
      '• Summarize long lecture documents and videos into powerful learning aids\n• Create course bots for homework help and research with perfect citations\n• Use Gator Tools for AI detection and humanising your submissions',
  },
  {
    role: 'Marketers and creators',
    question:
      'How do I generate creative, SEO-friendly collateral suited to my brand voice over-and-over?',
    answer:
      '• Create knowledge bases for brand voice and content generation\n• Repurpose any content on the web into SEO-friendly blogs and copy\n• Write contextualised outreach on X, LinkedIn and Gmail',
  },
  {
    role: 'Entrepreneurs',
    question:
      'How do I brainstorm ideas effectively, communicate like a boss and 10x my productivity?',
    answer:
      '• Maintain your flow state by avoiding switching tabs for AI\n• Create mindmaps, graphs and 20+ diagrams to brainstorm like a pro\n• Get on top of communication with Gator on Gmail, X and LinkedIn',
  },
  {
    role: 'Developers',
    question:
      'How do I iterate on code effectively, debug with context and save time on boilerplate?',
    answer:
      '• Add your codebase documentation to Gator\'s knowledge\n• Create web components, write and debug code with just a prompt\n• Select anything on the web and summon Gator for added context',
  },
]

export default function GatorWorkflowSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="border-t border-black/[0.06] bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Your workflow, our magic
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-ink-muted">
            Whether you&apos;re a student, marketer, tech pro or founder, Gator makes your life
            easier at work.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {PERSONAS.map((p, i) => (
            <button
              key={p.role}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active === i
                  ? 'bg-gator text-white'
                  : 'bg-[#fafaf9] text-ink-muted hover:text-ink'
              }`}
            >
              {p.role}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-black/[0.06] bg-[#fafaf9] p-8">
          <h3 className="text-lg font-semibold text-ink">{PERSONAS[active].role}</h3>
          <p className="mt-3 text-base text-ink-muted">{PERSONAS[active].question}</p>
          <div className="mt-6 rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-gator-700">How Gator solves this</p>
            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-ink-muted">
              {PERSONAS[active].answer}
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#features"
            className="text-sm font-semibold text-gator-700 transition hover:text-gator-600"
          >
            See how Gator fits your workflow →
          </a>
        </div>
      </div>
    </section>
  )
}
