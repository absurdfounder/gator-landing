import { Metadata } from 'next';

import DownloadMacClient from '@/components/download/DownloadMacClient';
import { buildPageMetadata } from '@/lib/og/buildMetadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Download Gator for Mac',
  description:
    'Your Gator Mac download should start automatically. Follow the steps to install Gator on macOS.',
  canonical: 'https://gator.so/download/mac',
  ogKind: 'page',
  ogSlug: 'download-mac',
});

export default function DownloadMacPage() {
  return <DownloadMacClient />;
}
