import { Check } from 'lucide-react'

const OTHER_TOOLS = [
  { name: 'Claude AI', price: '$30/m' },
  { name: 'OpenAI', price: '$20/m' },
  { name: 'Gemini Advanced', price: '$20/m' },
  { name: 'Mistral AI', price: '$20/m' },
  { name: 'Open source hosting', price: '$40/m' },
]

export default function GatorPricing() {
  return (
    <section id="pricing" className="border-t border-black/[0.06] bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Most valuable AI subscription ever
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-ink-muted">
            Untrap yourself from thousands of tools with overlapping features.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-black/[0.08] bg-[#fafaf9] p-8">
            <p className="text-sm font-medium text-ink-faint">Other</p>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-ink">$130</span>
            </div>
            <p className="text-sm text-ink-muted">per month for multiple tools</p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-ink-faint">
              Purchased individually
            </p>
            <ul className="mt-4 space-y-3">
              {OTHER_TOOLS.map((tool) => (
                <li key={tool.name} className="flex items-center justify-between text-sm">
                  <span className="text-ink-muted">{tool.name}</span>
                  <span className="font-medium text-ink">{tool.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl border-2 border-gator bg-white p-8 shadow-[0_8px_40px_rgba(116,180,59,0.15)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gator px-4 py-1 text-xs font-semibold text-white">
              Gator
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-gator">$19</span>
            </div>
            <p className="text-sm text-ink-muted">per month billed annually</p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-ink-faint">
              One purchase is all it takes
            </p>
            <ul className="mt-4 space-y-3">
              {[
                'All data in one place',
                '24x7 support at your service',
                'Great value for money',
                'All top AI models included',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink">
                  <Check className="h-4 w-4 text-gator" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://app.gator.so?ref=pricing"
                className="flex-1 rounded-full bg-gator py-3 text-center text-sm font-semibold text-white transition hover:bg-gator-600"
              >
                Buy now
              </a>
              <a
                href="#faq"
                className="flex-1 rounded-full border border-black/10 py-3 text-center text-sm font-semibold text-ink transition hover:bg-black/[0.04]"
              >
                Explore plans
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
