import { ogImageMeta } from '@/lib/og/url';

const homeOg = ogImageMeta('home', 'Gator — Ideas are a chat away');

export const metadata = {
  metadataBase: new URL('https://gator.so'),
  title: 'Gator — AI Chat. Ideas are a chat away.',
  description: 'Ask Gator anything. Chat with top AI models — GPT-4, Claude, Gemini and more. Free Chrome extension and web app.',
  alternates: {
    canonical: 'https://gator.so',
  },
  openGraph: {
    title: 'Gator — Ideas are a chat away',
    description: 'Chat with top AI models. Summarize, create, research — all in one place.',
    url: 'https://gator.so',
    siteName: 'Gator',
    images: homeOg.openGraph!.images,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gator — AI Chat',
    description: 'Ideas are a chat away. Free AI assistant with GPT-4, Claude, Gemini and more.',
    site: '@gator_ai',
    images: homeOg.twitter!.images,
  },
  keywords: [
    'gator ai',
    'ai chat',
    'ai assistant',
    'chatgpt alternative',
    'claude ai',
    'ai extension',
  ],
}

import GatorHeader from '@/components/gator/GatorHeader'
import GatorHero from '@/components/gator/GatorHero'
import GatorExtensionSection from '@/components/gator/GatorExtensionSection'
import GatorChatSection from '@/components/gator/GatorChatSection'
import GatorSocialProof from '@/components/gator/GatorSocialProof'
import GatorModelsSection from '@/components/gator/GatorModelsSection'
import GatorFeatureTabs, { GatorSecuritySection } from '@/components/gator/GatorFeatureTabs'
import GatorDevicesSection from '@/components/gator/GatorDevicesSection'
import GatorWorkflowSection from '@/components/gator/GatorWorkflowSection'
import GatorPricing from '@/components/gator/GatorPricing'
import GatorFAQ from '@/components/gator/GatorFAQ'
import GatorTestimonials from '@/components/gator/GatorTestimonials'
import GatorFooter from '@/components/gator/GatorFooter'

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white">
      <GatorHeader />
      <GatorHero />
      <GatorExtensionSection />
      <GatorChatSection />
      <GatorSocialProof />
      <GatorModelsSection />
      <GatorSecuritySection />
      <GatorDevicesSection />
      <GatorFeatureTabs />
      <GatorWorkflowSection />
      <GatorPricing />
      <GatorFAQ />
      <GatorTestimonials />
      <GatorFooter />
    </div>
  )
}
