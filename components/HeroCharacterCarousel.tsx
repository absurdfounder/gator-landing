'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import GatorCharacter from '@/components/GatorCharacter'
import { heroCharacterIds, type GatorCharacterId } from '@/lib/gatorCharacters'

const ease = [0.22, 1, 0.36, 1] as const

type HeroCharacterCarouselProps = {
  className?: string
}

export default function HeroCharacterCarousel({ className = '' }: HeroCharacterCarouselProps) {
  const [idx, setIdx] = useState(0)
  const currentId: GatorCharacterId = heroCharacterIds[idx] ?? 'laptop'

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % heroCharacterIds.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`relative mx-auto w-full max-w-[280px] ${className}`}>
      <div className="relative h-40 sm:h-44 md:h-48">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentId}
            className="absolute inset-0 flex items-end justify-center"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.45, ease }}
          >
            <GatorCharacter id={currentId} size="hero" priority={idx === 0} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-3 flex justify-center gap-1.5" aria-hidden>
        {heroCharacterIds.map((id, i) => (
          <span
            key={id}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === idx ? 'w-5 bg-lime-600' : 'w-1.5 bg-slate-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
