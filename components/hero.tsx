'use client';

import { ArrowRight } from 'lucide-react';

import HeroRotatingHeadline from './HeroRotatingHeadline';
import HeroArticleDemo from './HeroArticleDemo';
import PixelButton from './ui/PixelButton';
import FernCircleCheckIcon from './ui/FernCircleCheckIcon';
import HeroCharacterCarousel from './HeroCharacterCarousel';
import { GATOR_EXTENSION_URL } from '@/lib/gatorBrand';

const TRUST_ITEMS = ['Free Chrome extension', 'Runs in your browser', 'OpenClaw-powered'] as const;

export default function Hero() {
  return (
    <section className="relative overflow-x-hidden bg-canvas text-ink">
      <div className="mx-auto max-w-7xl min-w-0 border-l border-r border-[var(--color-line)]">
        <div className="pb-0 pt-[calc(var(--site-header-height)+1.25rem)] sm:pt-[calc(var(--site-header-height)+1.75rem)] md:pt-[calc(var(--site-header-height)+2rem)]">
          <div className="grid min-w-0 items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-12 lg:gap-14 xl:gap-16">
            <div className="min-w-0 lg:col-span-7">
              <div className="reveal reveal__usp">
                <HeroRotatingHeadline />
              </div>

              <div className="mt-6 sm:mt-8">
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

            <div className="flex min-w-0 justify-center lg:col-span-5 lg:justify-end">
              <HeroCharacterCarousel className="w-full max-w-sm sm:max-w-md lg:max-w-none" />
            </div>
          </div>

          <div className="relative mt-8 hidden min-w-0 overflow-hidden sm:mt-10 lg:mt-14 lg:block">
            <HeroArticleDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
