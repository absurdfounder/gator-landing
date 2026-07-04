'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { detectExtensionBrowser, type ExtensionBrowser } from '@/lib/detectBrowser'
import {
  getExtensionStoreBadge,
  STORE_BADGE_HEIGHT,
  type StoreBadgeSize,
} from '@/lib/extensionStoreBadges'
import { extensionDownloadTargets } from '@/lib/gatorBrand'

type Size = StoreBadgeSize

type DownloadExtensionButtonProps = {
  size?: Size
  className?: string
  onClick?: () => void
}

export default function DownloadExtensionButton({
  size = 'md',
  className = '',
  onClick,
}: DownloadExtensionButtonProps) {
  const [browser, setBrowser] = useState<ExtensionBrowser>('chrome')

  useEffect(() => {
    setBrowser(detectExtensionBrowser(navigator.userAgent))
  }, [])

  const target = extensionDownloadTargets[browser]
  const badge = getExtensionStoreBadge(browser, size)
  const heightClass = STORE_BADGE_HEIGHT[size]

  return (
    <a
      href={target.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label={`Download Gator extension for ${target.label}`}
      className={[
        'inline-flex shrink-0 items-center transition-opacity',
        'hover:opacity-90 active:opacity-80',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Image
        src={badge.src}
        alt={badge.alt}
        width={badge.width}
        height={badge.height}
        className={`w-auto ${heightClass}`}
        priority={size === 'lg'}
      />
    </a>
  )
}
