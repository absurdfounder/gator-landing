import Image from 'next/image'
import { merlinAssets } from '@/lib/merlinAssets'

const REVIEWS = [
  {
    title: 'The Swiss Army Knife for research and writing',
    body: 'Gator is a welcome addition to anyone looking to simplify their research and writing process. Very user-friendly, fast, and reliable.',
    author: 'PetePlus',
    source: 'AppSumo user',
    avatar: merlinAssets.avatars[0],
  },
  {
    title: 'Highly recommended for educators and marketers',
    body: 'This tool is there whenever and wherever you need it. Inside Gmail? Yep. Inside YouTube? Yep. It even timestamps the video summaries.',
    author: 'Paige Battcher',
    source: 'Gator Pro user',
    avatar: merlinAssets.avatars[1],
  },
  {
    title: '5 STAR Product',
    body: 'The team is VERY responsive. Any new ideas or bugs get talked about. They want to make Gator genuinely really good.',
    author: 'gkc',
    source: 'AppSumo user',
    avatar: merlinAssets.avatars[2],
  },
  {
    title: 'An indispensable part of my academic toolkit',
    body: 'As a student, Gator has been invaluable for my academic work. Automatic summarization and text analysis have significantly boosted my productivity.',
    author: 'Preston Bailey',
    source: 'Extension user',
    avatar: merlinAssets.avatars[3],
  },
]

export default function GatorTestimonials() {
  const ratingBadges = [
    { score: '4.8', label: 'Chrome Store', icon: merlinAssets.ratings.chrome },
    { score: '4.3', label: 'AppSumo', icon: merlinAssets.ratings.appsumo },
    { score: '4.3', label: 'Play Store', icon: merlinAssets.ratings.playstore },
    { score: '4.7', label: 'App Store', icon: merlinAssets.ratings.apple },
  ]

  return (
    <section className="border-t border-black/[0.06] bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            1M+ and counting
          </h2>
          <p className="mt-3 text-base text-ink-muted">
            Love for Gator is only growing multifold!
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {ratingBadges.map((r) => (
            <div key={r.label} className="flex flex-col items-center gap-2">
              <Image src={r.icon} alt="" width={40} height={40} className="h-10 w-10" />
              <p className="text-2xl font-bold text-gator">{r.score}</p>
              <p className="text-xs text-ink-faint">{r.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {REVIEWS.map((review) => (
            <div
              key={review.author}
              className="rounded-2xl border border-black/[0.06] bg-[#fafaf9] p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src={review.avatar}
                  alt={review.author}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-xs font-semibold text-ink">{review.author}</p>
                  <p className="text-xs text-ink-faint">{review.source}</p>
                </div>
              </div>
              <h3 className="text-sm font-semibold text-ink">{review.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{review.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
