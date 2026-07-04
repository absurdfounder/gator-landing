import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import LandingIconsGrid from '@/components/LandingIconsGrid';

export default function BrowserCapabilitySection() {
  return (
    <section className="bg-gradient-to-b from-neutral-50 to-canvas py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="text-center">
          <p className="mb-2 lg:mb-6">
            <Link
              href="/features/browser-control"
              className="inline-flex items-center gap-0.5 text-sm font-medium text-fern decoration-fern/50 underline-offset-4 decoration-dotted decoration-2 hover:underline md:text-base"
            >
              Unlimited capability
              <ChevronRight className="size-4" aria-hidden />
            </Link>
          </p>
          <h2 className="font-display text-3xl font-medium leading-9 tracking-tight text-ink sm:text-4xl sm:leading-11 xl:text-[2.75rem] xl:leading-[3rem]">
            Anything you do in a browser,
            <br />
            Gator loops can run for you.
          </h2>
        </div>

        <div className="mt-10 sm:mt-12">
          <LandingIconsGrid />
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-[15px] leading-relaxed text-ink-muted sm:mt-12 sm:text-base sm:leading-7 md:mt-16">
          Unlike agents that only work through brittle integrations, Gator&apos;s loops run
          inside your browser — on GitHub, Gmail, Slack, and any site you can log into. If you
          can do it in a tab, your agent loop can too.
        </p>
      </div>
    </section>
  );
}
