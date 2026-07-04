'use client'

import { useState } from 'react'

import GatorCharacter from '@/components/GatorCharacter'
import type { GatorCharacterId } from '@/lib/gatorCharacters'

/** Local copies if cdn.getmerlin.in hotlink is blocked on gator.so */
const MERLIN_LOCAL_FALLBACK: Record<string, string> = {
  'Webpage_b52be8433e.webp': '/images/merlin/extension/webpage.png',
  'image_5_a028a37070.webp': '/images/merlin/extension/search.png',
  'image_7_f6eefa4244.webp': '/images/merlin/extension/context.png',
  'image_8_eb258bba3b.webp': '/images/merlin/extension/learn.png',
  'projects_33be20ddec.webp': '/images/merlin/chat/projects.png',
  'infog_a09cbff947.webp': '/images/merlin/chat/infographics.png',
  'appsnip_0edfd396f9.webp': '/images/merlin/chat/appsnip.png',
  'o1_cfad888c7c.webp': '/images/merlin/chat/reasoning.png',
  'image_gen_21ee18a2ef.webp': '/images/merlin/social/image-gen.png',
  'content_from_vid_336ec65ad8.webp': '/images/merlin/social/video.png',
}

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
  const [src, setSrc] = useState(merlinSrc)

  return (
    <div
      className={`relative h-full min-h-[280px] w-full overflow-hidden bg-gradient-to-br from-canvas via-canvas-warm to-slate-100/80 sm:min-h-[360px] lg:min-h-0 ${className}`}
    >
      <div className="absolute inset-4 sm:inset-6 md:inset-8">
        <div className="relative h-full min-h-[220px] overflow-hidden rounded-xl shadow-[0_20px_48px_-24px_rgba(28,25,23,0.28)] ring-1 ring-black/[0.06] sm:min-h-[260px]">
          {/* Native img — Merlin CDN + fill layout were failing silently in Next/Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={merlinAlt}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => {
              const file = merlinSrc.split('/').pop()
              const fallback = file ? MERLIN_LOCAL_FALLBACK[file] : undefined
              if (fallback && src !== fallback) setSrc(fallback)
            }}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-3 right-3 z-20 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6">
        <GatorCharacter
          id={characterId}
          size="md"
          className="drop-shadow-[0_12px_24px_rgba(28,25,23,0.18)] sm:size-auto sm:h-36 sm:w-auto md:h-40"
        />
      </div>
    </div>
  )
}
