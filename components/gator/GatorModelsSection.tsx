import Image from 'next/image'
import { merlinAssets } from '@/lib/merlinAssets'

export default function GatorModelsSection() {
  return (
    <section className="border-t border-black/[0.06] bg-[#fafaf9] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          All top AI Models in one
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-base text-ink-muted">
          Instant access to latest models as soon as they&apos;re live for FREE.
        </p>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {merlinAssets.models.map((model) => (
            <div
              key={model.name}
              className="flex items-center gap-4 rounded-2xl border border-black/[0.06] bg-white px-5 py-4 text-left transition hover:border-gator/20 hover:shadow-sm"
            >
              <Image
                src={model.icon}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 object-contain"
              />
              <span className="text-sm font-medium text-ink">{model.name}</span>
            </div>
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
