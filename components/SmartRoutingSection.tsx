'use client';

import MerlinFeaturePanel from '@/components/MerlinFeaturePanel';
import GatorCharacter from '@/components/GatorCharacter';
import { SMART_ROUTING_MERLIN_IMAGE } from '@/lib/trooperFeatureMerlinImages';

const sectionXPadding = 'px-4 sm:px-6 lg:px-8';

const ROUTING_DESCRIPTION =
  'Gator routes each request to the model most likely to get it right — combining strengths so the system beats any single model.';

type SmartRoutingSectionProps = {
  kicker?: string;
};

/** Same card shell as other capabilities — sits between sticky deck segments. */
export default function SmartRoutingSection({ kicker = '09' }: SmartRoutingSectionProps) {
  return (
    <article
      aria-labelledby="smart-routing-heading"
      className="relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5"
    >
      <div className="grid lg:grid-cols-2 lg:items-stretch">
        <div className={`${sectionXPadding} flex flex-col justify-center py-8 sm:py-10 md:py-12 lg:py-14`}>
          <p className="kicker text-sm sm:text-base">
            <span className="text-ink-faint/80">[{kicker}]</span>{' '}
            <span className="normal-case">Smart Routing</span>
          </p>
          <h3
            id="smart-routing-heading"
            className="mt-4 font-display text-xl font-medium leading-snug tracking-tight text-balance text-ink sm:mt-5 sm:text-2xl lg:text-[1.75rem] lg:leading-[1.2]"
          >
            No single model wins every query
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted sm:mt-4 sm:text-[15px] sm:leading-7">
            {ROUTING_DESCRIPTION}
          </p>
          <GatorCharacter id="analytics" size="sm" className="mt-6" />
        </div>

        <div className="relative min-h-[320px] border-t border-[var(--color-line)] sm:min-h-[380px] lg:min-h-[500px] lg:border-t-0 lg:rounded-r-xl">
          <MerlinFeaturePanel
            src={SMART_ROUTING_MERLIN_IMAGE}
            alt="Smart model routing"
            className="absolute inset-0"
          />
        </div>
      </div>
    </article>
  );
}
