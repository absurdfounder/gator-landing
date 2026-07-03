import { Check } from 'lucide-react'

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Try Gator with no commitment.',
    features: [
      '50 messages per month',
      'Web chat interface',
      'Basic task execution',
      'Community support',
    ],
    cta: 'Start free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For individuals who want Gator on full power.',
    features: [
      'Unlimited messages',
      'All channels (Slack, Telegram, etc.)',
      'Code & terminal access',
      'Browser automation',
      'Persistent memory',
      'Priority support',
    ],
    cta: 'Get Pro',
    highlighted: true,
  },
  {
    name: 'Team',
    price: '$99',
    period: '/month',
    description: 'For teams that run on Gator.',
    features: [
      'Everything in Pro',
      'Up to 10 team members',
      'Shared workspaces',
      'Admin controls & audit logs',
      'Custom integrations',
      'Dedicated onboarding',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
]

export default function GatorPricing() {
  return (
    <section id="pricing" className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gator">Pricing</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Simple plans. Serious power.
          </h2>
          <p className="mt-4 text-base text-ink-muted">
            Start free, upgrade when you need more. No hidden fees.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? 'border-gator bg-gator-dark text-white shadow-xl'
                  : 'border-[var(--color-line)] bg-white'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gator px-3 py-0.5 text-xs font-semibold text-gator-dark">
                  Most popular
                </span>
              )}
              <h3
                className={`text-lg font-semibold ${plan.highlighted ? 'text-white' : 'text-ink'}`}
              >
                {plan.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-bold ${plan.highlighted ? 'text-gator-light' : 'text-ink'}`}
                >
                  {plan.price}
                </span>
                <span className={plan.highlighted ? 'text-white/50' : 'text-ink-muted'}>
                  {plan.period}
                </span>
              </div>
              <p
                className={`mt-2 text-sm ${plan.highlighted ? 'text-white/60' : 'text-ink-muted'}`}
              >
                {plan.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlighted ? 'text-gator-light' : 'text-gator'}`}
                    />
                    <span className={plan.highlighted ? 'text-white/80' : 'text-ink-muted'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://app.gator.so?ref=pricing"
                className={`mt-8 block rounded-xl py-3 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? 'bg-gator text-gator-dark hover:bg-gator-light'
                    : 'border border-[var(--color-line)] text-ink hover:border-gator/40 hover:text-gator'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
