import './css/style.css'
import './css/merlin-shadcn.css'

import { Nunito } from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'

import Banner from '@/components/banner'
import SchemaMarkup from '@/components/SchemaMarkup'
import { ogImageMeta } from '@/lib/og/url'

const homeOg = ogImageMeta('home', 'Gator — Your AI assistant that actually gets things done')

/** Body — paragraphs, nav, UI */
const nunito = Nunito({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

/** Section kickers, logo wordmark, small brand labels */
const silkscreen = localFont({
  src: [{ path: '../public/fonts/Silkscreen-Regular.ttf', weight: '400', style: 'normal' }],
  variable: '--font-silkscreen',
})

/** H1, hero, section titles — Erode (Ferndesk display face) */
const erode = localFont({
  src: '../public/fonts/Erode-Variable.ttf',
  variable: '--font-erode',
  display: 'swap',
  weight: '300 700',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

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
    images: homeOg.twitter!.images,
    site: '@gator_ai',
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/images/gator-icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.png',
  },
  manifest: '/manifest.json',
  themeColor: '#161616',
  keywords: [
    'gator ai',
    'ai assistant',
    'ai agent',
    'ask gator',
    'autonomous ai',
    'ai coworker',
    'ai automation',
  ],
  other: {
    'robots': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const canonicalUrl = 'https://gator.so'
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="96x96" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="canonical" href={canonicalUrl} />
        {/* Google Translate Script */}
        <Script 
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" 
          strategy="afterInteractive" 
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  autoDisplay: false,
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                }, 'google_translate_element');
              }
            `,
          }}
        />
        {/* Add style to hide Google Translate bar */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .VIpgJd-ZVi9od-ORHb-OEVmcd, 
            .VIpgJd-ZVi9od-aZ2wEe-wOHMyf, 
            .goog-te-banner-frame, 
            .skiptranslate,
            iframe.skiptranslate,
            #google_translate_element iframe {
              display: none !important; 
              visibility: hidden !important;
              pointer-events: none !important;
              height: 0 !important;
              width: 0 !important;
            }
            body {
              top: 0 !important;
            }
          `,
        }} />
      </head>
      <body
        className={`${nunito.variable} bg-[#161616] font-sans antialiased text-[#fafafa]`}
      >
        <div className="flex flex-col min-h-screen">
          {children}
          <SchemaMarkup />
        </div>
        {/* Hidden Google Translate Element */}
        <div id="google_translate_element" className="fixed -z-50 top-0 left-0 opacity-0 pointer-events-none" aria-hidden />
      </body>
    </html>
  )
}
