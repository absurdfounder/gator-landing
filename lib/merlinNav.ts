import { BRAND, BRAND_APP } from '@/lib/merlinCopy'

export const PRODUCT_MENU = [
  {
    title: `${BRAND} Chrome Extension`,
    description: 'One-click answers on any webpage',
    href: BRAND_APP,
  },
  {
    title: `${BRAND} Chat`,
    description: 'Research, build, and create with AI',
    href: BRAND_APP,
  },
  {
    title: 'Mobile Apps',
    description: 'iOS and Android apps',
    href: BRAND_APP,
  },
  {
    title: 'Teams',
    description: 'AI for your entire organization',
    href: '#teams',
  },
] as const

export const NAV_LINKS = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Affiliate', href: '#affiliate' },
  { label: 'Teams', href: '#teams' },
  { label: 'Chat', href: BRAND_APP },
  { label: 'Agent', href: BRAND_APP },
] as const
