import Image from 'next/image'
import { merlinAssets } from '@/lib/merlinAssets'

export default function GatorSocialProof() {
  const ratings = [
    { score: '4.8', label: 'on Chrome Store', icon: merlinAssets.ratings.chrome },
    { score: '4.3', label: 'by AppSumo users', icon: merlinAssets.ratings.appsumo },
    { score: '4.7', label: 'on App Store', icon: merlinAssets.ratings.apple },
  ]

  return (
    <section className="border-t border-black/[0.06] bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center">
            <Image
              src={merlinAssets.social.globe}
              alt="Available worldwide"
              width={500}
              height={500}
              className="w-full max-w-sm"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Available in 200+ countries
            </h2>
            <p className="mt-3 text-sm text-ink-muted">
              Experience the best of AI with Gator, even in regions where other LLMs are restricted.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-8 lg:justify-start">
              {ratings.map((r) => (
                <div key={r.label} className="flex items-center gap-3">
                  <Image src={r.icon} alt="" width={32} height={32} className="h-8 w-8" />
                  <div className="text-left">
                    <p className="text-3xl font-bold text-gator">{r.score}</p>
                    <p className="text-xs text-ink-muted">{r.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
