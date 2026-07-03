import { ogImageMeta } from '@/lib/og/url';
import MerlinClone from '@/components/gator/merlin/MerlinClone'

const homeOg = ogImageMeta('home', 'Gator — Ideas are a chat away');

export const metadata = {
  metadataBase: new URL('https://gator.so'),
  title: 'Gator — AI Chat. Ideas are a chat away.',
  description: 'Ask Gator anything. Chat with top AI models — GPT-4, Claude, Gemini and more. Free Chrome extension and web app.',
  alternates: { canonical: 'https://gator.so' },
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
    description: 'Ideas are a chat away.',
    site: '@gator_ai',
    images: homeOg.twitter!.images,
  },
}

export default function Home() {
  return <MerlinClone />
}
