'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Cloud, Gift, Infinity, type LucideIcon } from 'lucide-react';

import MarketingHeadline from '@/components/marketing/MarketingHeadline';
import PixelButton from './ui/PixelButton';
import { formatUsd, MARKETING_PLANS, type MarketingPlan, type PlanId } from '@/lib/pricing';

type SimplePricingProps = {
  showFullPricingLink?: boolean;
};

const PLAN_ICONS: Record<PlanId, LucideIcon> = {
  lite: Gift,
  lifetime: Infinity,
  cloud: Cloud,
};

function PlanBadge({ children, featured = false }: { children: React.ReactNode; featured?: boolean }) {
  return (
    <span
      className={[
        'border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em]',
        featured
          ? 'border-trooper-200 bg-trooper-50 text-trooper'
          : 'border-slate-100 bg-slate-100 text-slate-600',
      ].join(' ')}
    >
      {children}
    </span>
  );
}

function PricingCard({ plan, isLast = false }: { plan: MarketingPlan; isLast?: boolean }) {
  const Icon = PLAN_ICONS[plan.id];

  return (
    <article
      className={[
        'relative flex min-w-0 flex-col bg-white',
        !isLast ? 'border-b border-slate-100 lg:border-b-0 lg:border-r' : '',
        plan.featured ? 'z-[1] shadow-[0_8px_28px_rgba(15,23,42,0.08)] ring-1 ring-emerald-500/25' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {plan.featured ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-emerald-500" aria-hidden />
      ) : null}

      <div className="border-b border-slate-100 px-5 py-5 xl:px-6">
        <div className="flex items-start justify-between gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
            <span className="text-slate-400">[{plan.index}]</span> {plan.eyebrow}
          </span>
          <PlanBadge featured={plan.featured}>{plan.badge}</PlanBadge>
        </div>
        <div className="mt-4 flex items-center gap-2.5">
          <Icon className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
          <h3 className="font-funneldisplay text-xl font-medium tracking-tight text-slate-900">
            {plan.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 py-5 xl:px-6">
        <div className="flex items-end gap-1.5">
          <span className="font-funneldisplay text-3xl font-medium tabular-nums tracking-tight text-slate-900 sm:text-4xl">
            {formatUsd(plan.price)}
          </span>
          {plan.cadence ? <span className="pb-1 text-sm text-slate-500">{plan.cadence}</span> : null}
        </div>

        <p className="mt-2 text-sm font-medium leading-snug text-emerald-700">{plan.subline}</p>
        <p className="mt-1 text-xs leading-5 text-slate-500">{plan.note}</p>

        <div className="mt-5 border-y border-slate-100 py-4">
          <PixelButton
            href={plan.href}
            external
            size="md"
            tone={plan.featured ? 'brand' : 'dark'}
            className="w-full"
          >
            {plan.cta}
          </PixelButton>
        </div>

        <ul className="mt-4 space-y-2.5">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm leading-5 text-slate-700/90">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function SimplePricing({ showFullPricingLink = true }: SimplePricingProps) {
  return (
    <div className="w-full pb-8 md:pb-10">
      <div className="flex flex-col gap-6 pb-8 pt-2 max-md:gap-5 max-md:pb-6 md:pt-4">
        <MarketingHeadline
          as="h2"
          size="section"
          lines={[
            {
              parts: [
                { text: 'Simple pricing.', tone: 'default' },
                { text: 'Pick a plan.', tone: 'brand' },
              ],
            },
          ]}
          subline="Free to start. Lifetime with keys included. Or cloud — just buy and use."
        />
      </div>

      <div className="border-t border-slate-100 sm:-mx-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true }}
          className="overflow-hidden border-b border-slate-100 bg-white lg:grid lg:grid-cols-3"
        >
          {MARKETING_PLANS.map((plan, idx) => (
            <PricingCard key={plan.id} plan={plan} isLast={idx === MARKETING_PLANS.length - 1} />
          ))}
        </motion.div>

        {showFullPricingLink ? (
          <div className="border-t border-slate-100 bg-trooper-50/80">
            <Link
              href="/pricing"
              className="group flex w-full items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-trooper transition-colors hover:text-trooper-700 sm:py-4 md:py-5"
            >
              See full rate card and FAQ
              <svg
                viewBox="0 0 14 14"
                className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              >
                <path
                  d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
