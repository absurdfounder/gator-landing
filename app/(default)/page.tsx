import { ogImageMeta } from '@/lib/og/url';

const homeOg = ogImageMeta('home', 'Gator — Your AI assistant that actually gets things done');

export const metadata = {
  metadataBase: new URL('https://gator.so'),
  title: 'Gator: AI Assistant That Actually Gets Things Done',
  description: 'Ask anything. Gator writes code, browses the web, sends emails, and handles tasks autonomously. Your always-on AI coworker — free to start.',
  alternates: {
    canonical: 'https://gator.so',
  },
  openGraph: {
    title: 'Gator — Ask Anything. Gator Gets It Done.',
    description: 'Your AI assistant that takes action — code, email, browser, terminal. Not just answers, real results.',
    url: 'https://gator.so',
    siteName: 'Gator',
    images: homeOg.openGraph!.images,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gator: AI Assistant That Gets Things Done',
    description: 'Ask anything. Gator writes code, browses the web, and handles tasks while you focus on what matters.',
    site: '@gator_ai',
    images: homeOg.twitter!.images,
  },
  keywords: [
    'gator ai',
    'ai assistant',
    'ai agent',
    'ask gator',
    'autonomous ai',
    'ai coworker',
    'ai automation',
  ],
}

import GatorHeader from '@/components/gator/GatorHeader'
import GatorHero from '@/components/gator/GatorHero'
import GatorHowItWorks from '@/components/gator/GatorHowItWorks'
import GatorFeatures from '@/components/gator/GatorFeatures'
import GatorPricing from '@/components/gator/GatorPricing'
import GatorFAQ from '@/components/gator/GatorFAQ'
import GatorCTA from '@/components/gator/GatorCTA'
import GatorFooter from '@/components/gator/GatorFooter'

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <GatorHeader />
        <GatorHero />
        <GatorHowItWorks />
        <div id="features">
          <GatorFeatures />
        </div>
        <GatorPricing />
        <GatorFAQ />
        <GatorCTA />
        <GatorFooter />
      </div>
    </>
  )
}
