import { ogImageMeta } from '@/lib/og/url';

const homeOg = ogImageMeta('home', 'Gator — Run loops in your own browser');

export const metadata = {
  metadataBase: new URL('https://gator.so'),
  title: 'Gator — Run Loops in Your Own Browser',
  description: 'Install the Gator Chrome extension and run autonomous agent loops on any tab — research, coding, CI, reviews, and more. Powered by OpenClaw.',
  alternates: {
    canonical: 'https://gator.so',
  },
  openGraph: {
    title: 'Gator — Run loops in your own browser',
    description: 'Launch autonomous agent loops from Chrome. Research, code, review, and ship without leaving your browser.',
    url: 'https://gator.so',
    siteName: 'Gator',
    images: homeOg.openGraph!.images,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gator — Run loops in your own browser',
    description: 'Autonomous agent loops in Chrome — powered by OpenClaw.',
    site: '@gator_ai',
    images: homeOg.twitter!.images,
  },
  keywords: [
    'agent loops',
    'browser agent',
    'chrome extension ai',
    'openclaw',
    'gator ai',
    'autonomous agents',
  ],
}

import Hero from '@/components/hero'
import Header from '@/components/ui/header'
import HowItWorksSteps from '@/components/HowItWorksSteps'
import BrowserCapabilitySection from '@/components/BrowserCapabilitySection'
import OldWays from '@/components/OldWays'
import FloatingScrollIndicator from '@/components/FloatingScrollIndicator'
import SimplePricing from '@/components/SimplePricing'
import GovernanceSection from '@/components/GovernanceSection'
import FAQ from '@/components/faq'
import FounderMessageSection from '@/components/FounderMessageSection'
import Footer from '@/components/ui/footer'
import MobileChannelsSection from '@/components/MobileChannelsSection'
import YcQuoteSection from '@/components/YcQuoteSection'
import DarkSplitSection from '@/components/ui/DarkSplitSection'
import SectionShell from '@/components/ui/SectionShell'

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
      <FloatingScrollIndicator />
      <div className="hero-shell bg-canvas">
        <Header />
        <Hero />
      </div>

      <DarkSplitSection>
        <YcQuoteSection />
      </DarkSplitSection>

      <SectionShell eyebrow="How It Works" eyebrowNumber="02">
        <HowItWorksSteps />
      </SectionShell>

      <BrowserCapabilitySection />

      <SectionShell eyebrow="Capabilities" eyebrowNumber="03">
        <OldWays />
      </SectionShell>

      <DarkSplitSection innerClassName="bg-gray-900">
        <MobileChannelsSection />
      </DarkSplitSection>

      <SectionShell eyebrow="Governance" eyebrowNumber="05">
        <GovernanceSection />
      </SectionShell>

      <SectionShell eyebrow="Deployment Plans" eyebrowNumber="06">
        <SimplePricing />
      </SectionShell>

      <SectionShell eyebrow="Message from the founder" eyebrowNumber="07">
        <FounderMessageSection />
      </SectionShell>

      <SectionShell eyebrow="Intel Brief" eyebrowNumber="08" bgClass="bg-canvas-warm">
        <FAQ />
      </SectionShell>

      <Footer />
      </div>
    </>
  )
}
