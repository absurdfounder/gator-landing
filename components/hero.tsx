'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

import HeroRotatingHeadline from './HeroRotatingHeadline';
import HeroArticleDemo from './HeroArticleDemo';
import HeroMarquee from './HeroMarquee';
import PixelButton from './ui/PixelButton';
import FernCircleCheckIcon from './ui/FernCircleCheckIcon';
import HeroCharacterCarousel from './HeroCharacterCarousel';
import { GATOR_APP_URL, GATOR_EXTENSION_URL } from '@/lib/gatorBrand';

const TRUST_ITEMS = ['Free Chrome extension', 'Runs in your browser', 'OpenClaw-powered'] as const;

function HeroStackMarquee({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <p className="mb-3 font-silkscreen text-[10px] font-bold uppercase tracking-[0.18em] text-ink-faint">
        Built for your stack
      </p>
      <HeroMarquee />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-x-hidden bg-canvas text-ink">
      <div className="mx-auto max-w-7xl min-w-0 border-l border-r border-[var(--color-line)]">
        <div className="pb-0 pt-[calc(var(--site-header-height)+1.25rem)] sm:pt-[calc(var(--site-header-height)+1.75rem)] md:pt-[calc(var(--site-header-height)+2rem)]">
          <div className="grid min-w-0 items-start gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-12 lg:gap-14 xl:gap-16">
            <div className="min-w-0 lg:col-span-7">
              <p className="reveal reveal__kicker kicker mb-4 sm:mb-5">Agent loops</p>

              <div className="reveal reveal__usp">
                <HeroRotatingHeadline />
              </div>

              <HeroStackMarquee className="mt-8 hidden sm:mt-10 lg:block" />
            </div>

            <div className="min-w-0 lg:col-span-5 lg:pt-8 xl:pt-10">
              <HeroCharacterCarousel className="mb-5 lg:mb-6" />
              <p className="max-w-full text-[15px] leading-relaxed text-ink-muted sm:text-base sm:leading-7">
                <b className="text-ink">Run loops in your own browser.</b> Install the Gator extension
                and launch autonomous agent loops on any tab — research, coding, CI, reviews, and
                more. Powered by{' '}
                <span className="font-semibold text-ink text-red-600">OpenClaw</span>.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:inline-flex lg:flex-nowrap">
                <PixelButton
                  href={GATOR_EXTENSION_URL}
                  external
                  size="lg"
                  tone="dark"
                  className="w-full shrink-0 sm:w-auto"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Download extension
                </PixelButton>
                <PixelButton
                  href={GATOR_APP_URL}
                  external
                  size="lg"
                  variant="outline"
                  tone="dark"
                  className="w-full shrink-0 sm:w-auto"
                >
                  Open web app
                </PixelButton>
              </div>

              <ul className="fern-trust-row mt-5" aria-label="Product highlights">
                {TRUST_ITEMS.map((item) => (
                  <li key={item} className="fern-trust-row__item">
                    <FernCircleCheckIcon className="fern-trust-row__check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <HeroStackMarquee className="min-w-0 lg:col-span-7 lg:hidden" />
          </div>

          <div className="relative mt-8 hidden min-w-0 overflow-hidden sm:mt-10 lg:mt-14 lg:block">
            <HeroArticleDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
