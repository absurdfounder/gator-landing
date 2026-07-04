import type { ExtensionBrowser } from '@/lib/detectBrowser'

/** Gator marketing URLs and nav constants */
export const GATOR_APP_URL = 'https://app.gator.so'
export const GATOR_SIGN_IN_URL = GATOR_APP_URL
export const GATOR_EXTENSION_URL = `${GATOR_APP_URL}?ref=extension`
export const GATOR_BILLING_SETTINGS_URL = `${GATOR_APP_URL}/settings?tab=billing`

/** Stripe checkout entry on the app — login required, email pre-filled on Stripe. */
export function gatorCheckoutUrl(plan: 'lifetime' | 'cloud') {
  return `${GATOR_APP_URL}?plan=${plan}`
}

/** Marketing-site login handoff before app checkout. */
export function gatorLoginCheckoutUrl(plan: 'lifetime' | 'cloud') {
  return `/login?plan=${plan}`
}

export type ExtensionDownloadTarget = {
  browser: ExtensionBrowser
  label: string
  href: string
}

export const extensionDownloadTargets: Record<ExtensionBrowser, ExtensionDownloadTarget> = {
  chrome: {
    browser: 'chrome',
    label: 'Google Chrome',
    href: `${GATOR_APP_URL}?ref=extension&platform=chrome`,
  },
  firefox: {
    browser: 'firefox',
    label: 'Mozilla Firefox',
    href: `${GATOR_APP_URL}?ref=extension&platform=firefox`,
  },
  safari: {
    browser: 'safari',
    label: 'Apple Safari',
    href: `${GATOR_APP_URL}?ref=extension&platform=safari`,
  },
  edge: {
    browser: 'edge',
    label: 'Microsoft Edge',
    href: `${GATOR_APP_URL}?ref=extension&platform=edge`,
  },
  brave: {
    browser: 'brave',
    label: 'Brave',
    href: `${GATOR_APP_URL}?ref=extension&platform=brave`,
  },
}

export const headerNavLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/plugin', label: 'Plugins' },
  { href: '/pricing', label: 'Pricing' },
] as const
