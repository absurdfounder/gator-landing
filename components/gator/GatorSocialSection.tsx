'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { merlinAssets } from '@/lib/merlinAssets'

const SLIDES = [
  {
    title: 'Write mails effortlessly',
    desc: 'Compose mails with AI and generate replies in the context of the previous mail.',
    image: merlinAssets.social.gmail,
  },
  {
    title: 'Draft posts and replies on social media',
    desc: 'Generate with prompts and save them for repeated use. Engagement on top.',
    image: merlinAssets.social.socialMedia,
  },
  {
    title: 'Create content from videos',
    desc: 'Blogs, X posts, articles — you name it, from any YouTube video.',
    image: merlinAssets.social.video,
  },
  {
    title: 'Get the perfect poster image',
    desc: 'Generate images with 20+ image models and aspect ratios for web and social media.',
    image: merlinAssets.social.imageGen,
  },
]

export default function GatorSocialSection() {
  const [idx, setIdx] = useState(0)
  const slide = SLIDES[idx]

  return (
    <section className="border-t border-black/[0.06] bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-medium text-gator-700">Gator Extension</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Stay social, not drained
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-ink-muted">
            With Gator&apos;s extension, be digitally present effortlessly. Engage, reach out and
            express better with the world.
          </p>
          <a
            href="https://app.gator.so?ref=social"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gator-700"
          >
            Start creating for free!
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <Image
            src={slide.image}
            alt={slide.title}
            width={700}
            height={500}
            className="w-full rounded-2xl shadow-lg transition-all duration-500"
          />
          <div>
            <h3 className="text-xl font-semibold text-ink">{slide.title}</h3>
            <p className="mt-2 text-base text-ink-muted">{slide.desc}</p>
            <div className="mt-8 flex gap-2">
              <button
                type="button"
                onClick={() => setIdx((i) => Math.max(0, i - 1))}
                className="rounded-full border border-black/10 p-2 hover:bg-black/[0.04]"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIdx((i) => Math.min(SLIDES.length - 1, i + 1))}
                className="rounded-full border border-black/10 p-2 hover:bg-black/[0.04]"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
