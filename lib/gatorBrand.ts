/** Gator marketing URLs and nav constants */
export const GATOR_APP_URL = 'https://app.gator.so'
export const GATOR_SIGN_IN_URL = GATOR_APP_URL
export const GATOR_EXTENSION_URL = `${GATOR_APP_URL}?ref=extension`

export const headerNavLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/plugin', label: 'Plugins' },
  { href: '/pricing', label: 'Pricing' },
] as const
