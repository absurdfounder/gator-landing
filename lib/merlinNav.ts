import { BRAND, BRAND_APP, BRAND_CONTACT_URL } from '@/lib/merlinCopy'

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
  { label: 'Affiliate', href: '/affiliate' },
  { label: 'Teams', href: '#teams' },
  { label: 'Chat', href: BRAND_APP },
  { label: 'Agent', href: BRAND_APP },
] as const

export const FOOTER_COMPANY_LINKS = [
  { label: 'Team', href: '#teams' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Legal', href: '/terms' },
  { label: 'Cookie Policy', href: '/privacy' },
  { label: 'Terms and Conditions', href: '/terms' },
  { label: 'Data Protection', href: '/privacy' },
  { label: 'Careers', href: BRAND_CONTACT_URL },
  { label: 'Refund Policy', href: '/terms' },
  { label: 'Query Standards', href: BRAND_CONTACT_URL },
  { label: 'Product Wiki', href: BRAND_APP },
  { label: 'Newsroom', href: BRAND_CONTACT_URL },
  { label: 'Blogs', href: BRAND_APP },
  { label: 'Change Shortcut', href: BRAND_APP },
  { label: 'How It Works', href: '#features' },
  { label: 'Feature Request', href: BRAND_CONTACT_URL },
] as const

export const FOOTER_GET_GATOR_LINKS = [
  { label: 'Web app', href: BRAND_APP },
  { label: 'Chrome extension', href: BRAND_APP },
  { label: 'iOS app', href: BRAND_APP },
  { label: 'Android app', href: BRAND_APP },
] as const
