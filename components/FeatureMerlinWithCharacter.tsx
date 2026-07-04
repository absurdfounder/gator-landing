'use client'

import MerlinImage from '@/components/gator/merlin/MerlinImage'
import GatorCharacter from '@/components/GatorCharacter'
import type { GatorCharacterId } from '@/lib/gatorCharacters'

type FeatureMerlinWithCharacterProps = {
  merlinSrc: string
  merlinAlt: string
  characterId: GatorCharacterId
  className?: string
}

/** Merlin landing feature screenshot with Gator mascot overlaid on the image panel. */
export default function FeatureMerlinWithCharacter({
  merlinSrc,
  merlinAlt,
  characterId,
  className = '',
}: FeatureMerlinWithCharacterProps) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-canvas via-canvas-warm to-slate-100/80 ${className}`}>
      <div className="absolute inset-0 p-4 sm:p-6 md:p-8">
        <div className="relative h-full w-full overflow-hidden rounded-xl shadow-[0_20px_48px_-24px_rgba(28,25,23,0.28)] ring-1 ring-black/[0.06]">
          <MerlinImage
            src={merlinSrc}
            alt={merlinAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center px-4 pb-2 sm:justify-end sm:pr-6 sm:pb-4 md:pr-8 md:pb-6">
        <GatorCharacter
          id={characterId}
          size="md"
          className="drop-shadow-[0_12px_24px_rgba(28,25,23,0.18)] sm:size-auto sm:h-36 sm:w-auto md:h-40"
        />
      </div>
    </div>
  )
}
