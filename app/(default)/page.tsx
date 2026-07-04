import { ogImageMeta } from '@/lib/og/url';

const homeOg = ogImageMeta('home', 'Gator — Run loops in your own browser');

export const metadata = {
  metadataBase: new URL('https://gator.so'),
  title: 'Gator — Run Loops in Your Own Browser',
  description: 'Install Gator and run agent loops in your browser — research, code, CI, reviews. Powered by OpenClaw.',
  alternates: {
    canonical: 'https://gator.so',
  },
  openGraph: {
    title: 'Gator — Run loops in your own browser',
    description: 'Agent loops in your browser. Research, code, review, ship.',
    url: 'https://gator.so',
    siteName: 'Gator',
    images: homeOg.openGraph!.images,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gator — Run loops in your own browser',
    description: 'Agent loops in your browser. Powered by OpenClaw.',
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
import SimplePricing from '@/components/SimplePricing'
import GovernanceSection from '@/components/GovernanceSection'
import FAQ from '@/components/faq'
import FounderMessageSection from '@/components/FounderMessageSection'
import Footer from '@/components/ui/footer'
import DarkSplitSection from '@/components/ui/DarkSplitSection'
import SectionShell from '@/components/ui/SectionShell'

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
      <div className="hero-shell bg-canvas">
        <Header />
        <Hero />
      </div>

      <DarkSplitSection>
        <GovernanceSection variant="dark" eyebrowNumber="01" />
      </DarkSplitSection>

      <SectionShell eyebrow="How It Works" eyebrowNumber="02">
        <HowItWorksSteps />
      </SectionShell>

      <BrowserCapabilitySection />

      <SectionShell eyebrow="Capabilities" eyebrowNumber="03">
        <OldWays />
      </SectionShell>

      <SectionShell eyebrow="Deployment Plans" eyebrowNumber="04">
        <SimplePricing />
      </SectionShell>

      <SectionShell eyebrow="Message from the founder" eyebrowNumber="05">
        <FounderMessageSection />
      </SectionShell>

      <SectionShell eyebrow="FAQ" eyebrowNumber="06" bgClass="bg-canvas-warm">
        <FAQ />
      </SectionShell>

      <Footer />
      </div>
    </>
  )
}
