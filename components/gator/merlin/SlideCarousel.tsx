'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import MerlinImage from '@/components/gator/merlin/MerlinImage'

export type SlideItem = { title: string; desc: string; image: string }

export default function SlideCarousel({ items, tall = true }: { items: SlideItem[]; tall?: boolean }) {
  const [idx, setIdx] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const syncIdx = useCallback(() => {
    const el = ref.current
    if (!el) return
    const center = el.scrollLeft + el.clientWidth / 2
    let closest = 0
    let minDist = Infinity
    Array.from(el.children).forEach((child, i) => {
      const c = child as HTMLElement
      const childCenter = c.offsetLeft + c.offsetWidth / 2
      const dist = Math.abs(center - childCenter)
      if (dist < minDist) {
        minDist = dist
        closest = i
      }
    })
    setIdx(closest)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.addEventListener('scroll', syncIdx, { passive: true })
    return () => el.removeEventListener('scroll', syncIdx)
  }, [syncIdx])

  const scroll = (dir: number) => {
    const next = Math.max(0, Math.min(items.length - 1, idx + dir))
    setIdx(next)
    ref.current?.children[next]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-6">
      <div className="relative w-full overflow-hidden">
        <div
          ref={ref}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 pl-4 pr-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 sm:pl-[max(1rem,calc(50%-min(163px,45vw)))] sm:pr-[max(1rem,calc(50%-min(163px,45vw)))] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <div key={item.title} className="w-[min(326px,calc(100vw-2rem))] shrink-0 snap-center">
              <div className="flex w-full flex-col gap-4">
                <div className={`relative w-full overflow-hidden rounded-lg ${tall ? 'aspect-[326/366] sm:h-[366px] sm:aspect-auto' : 'aspect-[326/176] sm:h-44 sm:aspect-auto'}`}>
                  <MerlinImage
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 85vw, 326px"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="line-clamp-2 font-serif text-lg font-medium leading-7 text-foreground sm:text-xl sm:leading-8">{item.title}</h4>
                  <p className="font-sans text-sm font-medium leading-relaxed text-muted-foreground sm:text-base md:text-lg">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <button type="button" aria-label="Previous slide" onClick={() => scroll(-1)} disabled={idx === 0} className="rounded-full border border-border p-2 transition hover:bg-accent disabled:opacity-40"><ChevronLeft className="h-4 w-4" /></button>
        <button type="button" aria-label="Next slide" onClick={() => scroll(1)} disabled={idx === items.length - 1} className="rounded-full border border-border p-2 transition hover:bg-accent disabled:opacity-40"><ChevronRight className="h-4 w-4" /></button>
      </div>
    </div>
  )
}
