import { Metadata } from 'next';

import DownloadWindowsClient from '@/components/download/DownloadWindowsClient';
import { buildPageMetadata } from '@/lib/og/buildMetadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Download Gator for Windows',
  description:
    'Your Gator Windows download should start automatically. Follow the steps to install Gator on Windows.',
  canonical: 'https://gator.so/download/windows',
  ogKind: 'page',
  ogSlug: 'download-windows',
});

export default function DownloadWindowsPage() {
  return <DownloadWindowsClient />;
}
