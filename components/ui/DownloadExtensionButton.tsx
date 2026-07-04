'use client'

import { useEffect, useState, type ReactNode } from 'react'

import {
  BraveIcon,
  ChromeIcon,
  EdgeIcon,
  FirefoxIcon,
  SafariIcon,
} from '@/components/ui/BrowserIcons'
import { detectExtensionBrowser, type ExtensionBrowser } from '@/lib/detectBrowser'
import { extensionDownloadTargets } from '@/lib/gatorBrand'

type Size = 'sm' | 'md' | 'lg'

type DownloadExtensionButtonProps = {
  size?: Size
  className?: string
  onClick?: () => void
}

const browserIcons: Record<ExtensionBrowser, ReactNode> = {
  chrome: <ChromeIcon />,
  firefox: <FirefoxIcon />,
  safari: <SafariIcon />,
  edge: <EdgeIcon />,
  brave: <BraveIcon />,
}

const sizeStyles: Record<
  Size,
  { shell: string; icon: string; kicker: string; label: string; gap: string }
> = {
  sm: {
    shell: 'h-9 rounded-xl px-3.5',
    icon: 'h-5 w-5',
    kicker: 'text-[10px] leading-none',
    label: 'text-[13px] leading-tight',
    gap: 'gap-2.5',
  },
  md: {
    shell: 'min-h-[40px] rounded-xl px-4 py-2.5',
    icon: 'h-6 w-6',
    kicker: 'text-[11px] leading-none',
    label: 'text-sm leading-tight',
    gap: 'gap-3',
  },
  lg: {
    shell: 'min-h-[44px] rounded-xl px-5 py-3',
    icon: 'h-7 w-7 sm:h-8 sm:w-8',
    kicker: 'text-[11px] sm:text-xs leading-none',
    label: 'text-sm sm:text-[15px] leading-tight',
    gap: 'gap-3 sm:gap-3.5',
  },
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
  const wantsFullWidth = className.includes('w-full')

  return (
    <a
      href={target.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label={`Download Gator extension for ${target.label}`}
      className={[
        'inline-flex shrink-0 items-center border border-slate-200 bg-white font-sans text-left shadow-sm transition-colors',
        'hover:border-slate-300 hover:bg-slate-50 active:bg-slate-100',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
        wantsFullWidth ? 'w-full justify-center' : 'w-fit',
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
      <span className="min-w-0 text-left">
        <span className={`block text-slate-500 ${styles.kicker}`}>Download for</span>
        <span className={`block font-semibold text-slate-900 ${styles.label}`}>{target.label}</span>
      </span>
    </a>
  )
}
