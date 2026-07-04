import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/og/buildMetadata';

export const metadata: Metadata = buildPageMetadata({
  title: "Migrate to Wonder Sites | Gator",
  description: "Migrate helpdesks, docs, and sites to Gator-powered publishing.",
  canonical: "https://gator.so/migrating-to-wonder-sites",
  ogKind: 'page',
  ogSlug: "migrating-to-wonder-sites",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
