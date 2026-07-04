'use client'

import Image from 'next/image'
import { gatorCharacters, type GatorCharacterId } from '@/lib/gatorCharacters'

const sizeClasses = {
  xs: 'h-14 w-auto sm:h-16',
  sm: 'h-20 w-auto sm:h-24',
  md: 'h-28 w-auto sm:h-32',
  lg: 'h-36 w-auto sm:h-44',
  xl: 'h-44 w-auto sm:h-52',
  hero: 'h-40 w-auto sm:h-48 md:h-56',
} as const

type GatorCharacterProps = {
  id: GatorCharacterId
  size?: keyof typeof sizeClasses
  className?: string
  priority?: boolean
}

export default function GatorCharacter({
  id,
  size = 'md',
  className = '',
  priority = false,
}: GatorCharacterProps) {
  const character = gatorCharacters[id]

  return (
    <Image
      src={character.src}
      alt={character.alt}
      width={512}
      height={512}
      className={`pointer-events-none select-none object-contain ${sizeClasses[size]} ${className}`}
      priority={priority}
    />
  )
}
