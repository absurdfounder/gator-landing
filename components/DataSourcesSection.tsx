'use client';

import MerlinFeaturePanel from '@/components/MerlinFeaturePanel';
import { DATA_SOURCES_MERLIN_IMAGE } from '@/lib/trooperFeatureMerlinImages';

const sectionXPadding = 'px-4 sm:px-6 lg:px-8';

const SOURCE_TAGS = [
  'OneDrive',
  'Google Drive',
  'Notion',
  'Apple Notes',
  'Slack',
  'Gmail',
  'X / social',
  'APIs',
];

type DataSourcesSectionProps = {
  kicker?: string;
};

/** Same card shell as other capabilities — showcases the files & data sources memory draws from. */
export default function DataSourcesSection({ kicker = '05' }: DataSourcesSectionProps) {
  return (
    <article
      aria-labelledby="data-sources-heading"
      className="relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5"
    >
      <div className="grid lg:grid-cols-2 lg:items-stretch">
        <div className={`${sectionXPadding} flex flex-col justify-center py-8 sm:py-10 md:py-12 lg:py-14`}>
          <p className="kicker text-sm sm:text-base">
            <span className="text-ink-faint/80">[{kicker}]</span>{' '}
            <span className="normal-case">Files &amp; Data Sources</span>
          </p>
          <h3
            id="data-sources-heading"
            className="mt-4 font-display text-xl font-medium leading-snug tracking-tight text-balance text-ink sm:mt-5 sm:text-2xl lg:text-[1.75rem] lg:leading-[1.2]"
          >
            Connected to your files,{' '}
            <span className="text-ink-muted">docs, notes, and feeds.</span>
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted sm:mt-4 sm:text-[15px] sm:leading-7">
            AI employees pull live context from the places your work already lives — cloud drives,
            API docs, sticky notes, and social feeds. Memory stays grounded in real, up-to-date
            sources instead of stale snapshots.
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-6">
            {SOURCE_TAGS.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500 ring-1 ring-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[360px] border-t border-[var(--color-line)] sm:min-h-[440px] lg:min-h-[500px] lg:border-t-0 lg:rounded-r-xl">
          <MerlinFeaturePanel
            src={DATA_SOURCES_MERLIN_IMAGE}
            alt="Files and data sources"
            className="absolute inset-0"
          />
        </div>
      </div>
    </article>
  );
}
