import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/og/buildMetadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact Gator',
  description: 'Sales, support, and partnership inquiries for Gator.',
  canonical: 'https://gator.so/contact-us',
  ogKind: 'page',
  ogSlug: 'contact-us',
});

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
