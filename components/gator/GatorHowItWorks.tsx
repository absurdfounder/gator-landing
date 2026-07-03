import { MessageSquare, Rocket, Settings } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Ask in plain English',
    description:
      'Tell Gator what you need — "fix the login bug", "summarize this doc", "book a meeting". No special syntax.',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Gator plans and acts',
    description:
      'It breaks the task into steps, uses the right tools — browser, terminal, email, code — and executes autonomously.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'You get results',
    description:
      'Finished work delivered in chat: code merged, emails sent, reports written. Review, approve, or ask for changes.',
  },
]

export default function GatorHowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-[var(--color-line)] bg-canvas-warm py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gator">How it works</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            From question to done in minutes
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="relative text-center md:text-left">
              <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gator-dark text-gator-light md:mx-0">
                <step.icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold tracking-widest text-gator/60">{step.number}</span>
              <h3 className="mt-1 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
