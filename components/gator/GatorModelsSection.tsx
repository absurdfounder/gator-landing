const MODELS = [
  'GPT-4o & o1',
  'Claude 3.7 Sonnet',
  'DeepSeek R1',
  'Gemini 2.5 Pro',
  'Mistral Large',
  'Llama 3.1 405B',
  'Grok 3',
]

export default function GatorModelsSection() {
  return (
    <section className="border-t border-black/[0.06] bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          All top AI Models in one
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-base text-ink-muted">
          Instant access to latest models as soon as they&apos;re live for FREE.
        </p>

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
          {MODELS.map((model) => (
            <span
              key={model}
              className="rounded-full border border-black/[0.08] bg-[#fafaf9] px-5 py-2.5 text-sm font-medium text-ink transition hover:border-gator/30 hover:bg-gator/5"
            >
              {model}
            </span>
          ))}
        </div>

        <a
          href="https://app.gator.so?ref=models"
          className="mt-10 inline-flex rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-ink/90"
        >
          Hell yeah, I want this!
        </a>
      </div>
    </section>
  )
}
