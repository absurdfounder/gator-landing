'use client'

import { useEffect, useState, type ReactNode } from 'react'

import { ChromeIcon, FirefoxIcon, SafariIcon } from '@/components/ui/BrowserIcons'
import { detectExtensionBrowser, type ExtensionBrowser } from '@/lib/detectBrowser'
import { extensionDownloadTargets } from '@/lib/gatorBrand'

type Size = 'sm' | 'md' | 'lg'

type DownloadExtensionButtonProps = {
  size?: Size
  className?: string
  onClick?: () => void
}

const sizeStyles: Record<
  Size,
  { shell: string; icon: string; kicker: string; label: string; gap: string }
> = {
  sm: {
    shell: 'rounded-lg px-3 py-2',
    icon: 'h-6 w-6',
    kicker: 'text-[10px] leading-none',
    label: 'text-[13px] leading-tight',
    gap: 'gap-2.5',
  },
  md: {
    shell: 'rounded-xl px-3.5 py-2.5',
    icon: 'h-7 w-7',
    kicker: 'text-[11px] leading-none',
    label: 'text-sm leading-tight',
    gap: 'gap-3',
  },
  lg: {
    shell: 'rounded-xl px-4 py-3 sm:px-5 sm:py-3.5',
    icon: 'h-8 w-8 sm:h-9 sm:w-9',
    kicker: 'text-[11px] sm:text-xs leading-none',
    label: 'text-sm sm:text-[15px] leading-tight',
    gap: 'gap-3 sm:gap-3.5',
  },
}

const browserIcons: Record<ExtensionBrowser, ReactNode> = {
  chrome: <ChromeIcon />,
  firefox: <FirefoxIcon />,
  safari: <SafariIcon />,
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
  const styles = sizeStyles[size]

  return (
    <a
      href={target.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label={`Download Gator extension for ${target.label}`}
      className={[
        'inline-flex items-center border border-slate-200 bg-white text-left shadow-sm transition-colors',
        'hover:border-slate-300 hover:bg-slate-50 active:bg-slate-100',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
        styles.shell,
        styles.gap,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className={`inline-flex shrink-0 items-center justify-center ${styles.icon}`}>
        {browserIcons[browser]}
      </span>
      <span className="min-w-0">
        <span className={`block font-sans text-slate-500 ${styles.kicker}`}>Download for</span>
        <span className={`block font-sans font-semibold text-slate-900 ${styles.label}`}>
          {target.label}
        </span>
      </span>
    </a>
  )
}
