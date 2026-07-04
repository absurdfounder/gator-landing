'use client';

import React from 'react';
import MarketingHeadline from '@/components/marketing/MarketingHeadline';
import PixelButton from '@/components/ui/PixelButton';
import { formatUsd, MARKETING_PLANS, PRICING_USD } from '@/lib/pricing';
import { Check, X } from 'lucide-react';

type PlanKey = 'lite' | 'lifetime' | 'cloud';

type ComparisonCell = boolean | { text: string; sub?: string };

type ComparisonRow = {
  feature: string;
  lite: ComparisonCell;
  lifetime: ComparisonCell;
  cloud: ComparisonCell;
};

type ComparisonCategory = {
  title: string;
  rows: ComparisonRow[];
};

const PLAN_COLUMNS = [
  { key: 'lite' as const, label: 'Gator Lite' },
  { key: 'lifetime' as const, label: 'Lifetime' },
  { key: 'cloud' as const, label: 'Gator Cloud', featured: true },
];

const comparisonCategories: ComparisonCategory[] = [
  {
    title: 'Models & keys',
    rows: [
      { feature: 'Gator Lite model', lite: true, lifetime: true, cloud: true },
      { feature: 'Codex Connect included', lite: false, lifetime: true, cloud: true },
      { feature: 'OpenRouter keys included', lite: false, lifetime: true, cloud: true },
      { feature: 'Bring your own API keys', lite: true, lifetime: true, cloud: false },
    ],
  },
  {
    title: 'Loops & automation',
    rows: [
      { feature: 'Browser extension loops', lite: true, lifetime: true, cloud: true },
      { feature: 'OpenClaw skills', lite: true, lifetime: true, cloud: true },
      { feature: 'GitHub integration', lite: false, lifetime: true, cloud: true },
      { feature: 'Always-on virtual PC', lite: false, lifetime: false, cloud: true },
      { feature: 'Connected devices', lite: false, lifetime: false, cloud: true },
    ],
  },
  {
    title: 'Billing',
    rows: [
      {
        feature: 'Price',
        lite: { text: 'Free' },
        lifetime: { text: formatUsd(PRICING_USD.lifetime), sub: 'one-time' },
        cloud: { text: formatUsd(PRICING_USD.cloudMonthly), sub: '/ month' },
      },
      { feature: 'Subscription required', lite: false, lifetime: false, cloud: true },
      { feature: 'Lifetime access', lite: false, lifetime: true, cloud: false },
    ],
  },
  {
    title: 'Support',
    rows: [
      { feature: 'Community support', lite: true, lifetime: true, cloud: true },
      { feature: 'Priority email support', lite: false, lifetime: true, cloud: true },
    ],
  },
];

const DESKTOP_GRID_COLS = 'grid-cols-[minmax(12rem,1.15fr)_repeat(3,minmax(0,1fr))]';
const DESKTOP_GRID = `grid ${DESKTOP_GRID_COLS} gap-px bg-slate-200`;

function compareCellClass(featured = false) {
  return ['px-5 py-3 xl:px-6', featured ? 'bg-emerald-50/45' : 'bg-white'].join(' ');
}

function compareHeaderCellClass(featured = false) {
  return [
    'sticky top-16 z-10 px-5 py-4 xl:px-6',
    featured ? 'border-t-2 border-emerald-500 bg-emerald-50/45' : 'bg-white',
  ].join(' ');
}

function CompareCell({ cell }: { cell: ComparisonCell }) {
  if (typeof cell === 'boolean') {
    return cell ? (
      <Check className="h-4 w-4 text-emerald-600" aria-hidden />
    ) : (
      <X className="h-4 w-4 text-slate-300" aria-hidden />
    );
  }

  return (
    <div>
      <span className="text-sm font-medium text-slate-900">{cell.text}</span>
      {cell.sub ? <p className="mt-0.5 text-[11px] text-slate-500">{cell.sub}</p> : null}
    </div>
  );
}

export default function PricingCompareTable() {
  const planByKey = Object.fromEntries(MARKETING_PLANS.map((p) => [p.id, p])) as Record<
    PlanKey,
    (typeof MARKETING_PLANS)[number]
  >;

  return (
    <div className="pb-12 md:pb-16">
      <MarketingHeadline
        as="h2"
        size="section"
        lines={[{ parts: [{ text: 'Compare plans', tone: 'default' }] }]}
        subline="Three plans. No team seats, no workspace math."
        className="mb-8"
      />

      <div className="overflow-x-auto border border-slate-100 bg-slate-200">
        <div className={`${DESKTOP_GRID} min-w-[720px]`}>
          <div className={compareHeaderCellClass()} />
          {PLAN_COLUMNS.map((col) => (
            <div key={col.key} className={compareHeaderCellClass(col.featured)}>
              <p className="font-funneldisplay text-base font-medium text-slate-900">{col.label}</p>
              <p className="mt-1 text-sm text-slate-500">
                {formatUsd(planByKey[col.key].price)}
                {planByKey[col.key].cadence ? ` ${planByKey[col.key].cadence}` : ''}
              </p>
            </div>
          ))}

          {comparisonCategories.map((category) => (
            <React.Fragment key={category.title}>
              <div className={`${compareCellClass()} col-span-full border-t border-slate-200 bg-slate-50 px-5 py-2.5 xl:px-6`}>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                  {category.title}
                </p>
              </div>
              {category.rows.map((row) => (
                <React.Fragment key={row.feature}>
                  <div className={compareCellClass()}>
                    <span className="text-sm text-slate-700">{row.feature}</span>
                  </div>
                  {PLAN_COLUMNS.map((col) => (
                    <div key={col.key} className={compareCellClass(col.featured)}>
                      <CompareCell cell={row[col.key]} />
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}

          <div className={compareCellClass()} />
          {PLAN_COLUMNS.map((col) => (
            <div key={col.key} className={`${compareCellClass(col.featured)} py-4`}>
              <PixelButton
                href={planByKey[col.key].href}
                external
                size="sm"
                tone={col.featured ? 'brand' : 'dark'}
                className="w-full"
              >
                {planByKey[col.key].cta}
              </PixelButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
