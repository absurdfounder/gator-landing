import {
  Brain,
  Code2,
  Globe,
  Mail,
  MessageCircle,
  Shield,
  Terminal,
  Zap,
} from 'lucide-react'

const FEATURES = [
  {
    icon: MessageCircle,
    title: 'Chat anywhere',
    description:
      'Talk to Gator on web, Slack, Telegram, WhatsApp, or your phone. Same assistant, every channel.',
  },
  {
    icon: Code2,
    title: 'Writes real code',
    description:
      'Gator reads your repo, writes features, fixes bugs, and opens pull requests — not just snippets.',
  },
  {
    icon: Globe,
    title: 'Browses the web',
    description:
      'Research competitors, fill forms, scrape data, and navigate any site like a human would.',
  },
  {
    icon: Terminal,
    title: 'Runs commands',
    description:
      'Deploy servers, run scripts, check logs, and manage infrastructure from a single conversation.',
  },
  {
    icon: Mail,
    title: 'Handles email',
    description:
      'Draft replies, triage inboxes, schedule follow-ups, and keep your communication on track.',
  },
  {
    icon: Brain,
    title: 'Remembers context',
    description:
      'Gator learns your preferences, projects, and team — every conversation builds on the last.',
  },
  {
    icon: Shield,
    title: 'You stay in control',
    description:
      'Approve actions before they run. Set permissions, audit logs, and guardrails for your team.',
  },
  {
    icon: Zap,
    title: 'Works while you sleep',
    description:
      'Queue tasks, set routines, and let Gator handle overnight work so you wake up to results.',
  },
]

export default function GatorFeatures() {
  return (
    <section className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gator">Capabilities</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            One assistant. Every job.
          </h2>
          <p className="mt-4 text-base text-ink-muted">
            Gator isn&apos;t a chatbot that talks — it&apos;s an AI that acts. From quick answers
            to multi-hour projects.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-[var(--color-line)] bg-white p-6 transition hover:border-gator/30 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gator/10 p-2.5 text-gator">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
