import type { ExtensionBrowser } from '@/lib/detectBrowser'

export type StoreBadgeAsset = {
  src: string
  width: number
  height: number
  alt: string
}

const chromeBadges = {
  sm: {
    src: '/images/stores/chrome-web-store-sm.png',
    width: 206,
    height: 58,
    alt: 'Available in the Chrome Web Store',
  },
  md: {
    src: '/images/stores/chrome-web-store-md.png',
    width: 340,
    height: 96,
    alt: 'Available in the Chrome Web Store',
  },
  lg: {
    src: '/images/stores/chrome-web-store-lg.png',
    width: 496,
    height: 150,
    alt: 'Available in the Chrome Web Store',
  },
} as const satisfies Record<string, StoreBadgeAsset>

const firefoxBadges = {
  sm: {
    src: '/images/stores/firefox-addons-xs.png',
    width: 129,
    height: 45,
    alt: 'Get the add-on for Firefox',
  },
  md: {
    src: '/images/stores/firefox-addons-sm.png',
    width: 172,
    height: 60,
    alt: 'Get the add-on for Firefox',
  },
  lg: {
    src: '/images/stores/firefox-addons-sm.png',
    width: 172,
    height: 60,
    alt: 'Get the add-on for Firefox',
  },
} as const satisfies Record<string, StoreBadgeAsset>

const safariBadges = {
  sm: {
    src: '/images/stores/mac-app-store-sm.svg',
    width: 156,
    height: 40,
    alt: 'Download on the Mac App Store',
  },
  md: {
    src: '/images/stores/mac-app-store-sm.svg',
    width: 156,
    height: 40,
    alt: 'Download on the Mac App Store',
  },
  lg: {
    src: '/images/stores/mac-app-store-sm.svg',
    width: 156,
    height: 40,
    alt: 'Download on the Mac App Store',
  },
} as const satisfies Record<string, StoreBadgeAsset>

export type StoreBadgeSize = keyof typeof chromeBadges

const badgesByBrowser: Record<ExtensionBrowser, Record<StoreBadgeSize, StoreBadgeAsset>> = {
  chrome: chromeBadges,
  firefox: firefoxBadges,
  safari: safariBadges,
}

export function getExtensionStoreBadge(
  browser: ExtensionBrowser,
  size: StoreBadgeSize = 'md',
): StoreBadgeAsset {
  return badgesByBrowser[browser][size]
}

/** Tailwind height class per button size — keeps navbar + hero badges aligned. */
export const STORE_BADGE_HEIGHT: Record<StoreBadgeSize, string> = {
  sm: 'h-9',
  md: 'h-10 sm:h-11',
  lg: 'h-11 sm:h-12 md:h-14',
}
