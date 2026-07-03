'use client'

import { Check } from 'lucide-react'
import { BRAND, BRAND_APP, merlinPlans, merlinPricingComparison } from '@/lib/merlinCopy'

function PrimaryBtn({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={`inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow transition hover:bg-primary/90 ${className}`}>
      {children}
    </a>
  )
}

export default function MerlinPricing() {
  const { other, gator } = merlinPricingComparison

  return (
    <div id="pricing" className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 text-center xl:px-0">
      <div className="flex flex-col gap-4">
        <h2 className="font-serif text-3xl font-medium tracking-normal text-foreground md:text-5xl">
          Most valuable AI subscription ever
        </h2>
        <p className="mx-auto max-w-lg font-sans text-lg font-medium text-muted-foreground">
          Untrap yourself from thousands of tools with overlapping features.
        </p>
      </div>

      {/* Value comparison */}
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-secondary/40 p-6 text-left sm:p-8">
          <p className="text-sm font-medium text-muted-foreground">Other</p>
          <p className="mt-2 font-serif text-5xl font-medium text-foreground sm:text-6xl">{other.total}</p>
          <p className="text-sm text-muted-foreground">{other.subtitle}</p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{other.label}</p>
          <ul className="mt-4 space-y-3">
            {other.items.map((item) => (
              <li key={item.name} className="flex items-center justify-between gap-4 text-sm">
                <span className="text-muted-foreground">{item.name}</span>
                <span className="shrink-0 font-medium text-foreground">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative rounded-2xl border-2 border-foreground/20 bg-card p-6 text-left shadow-lg sm:p-8">
          <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            {BRAND}
          </span>
          <p className="text-sm font-medium text-foreground">{BRAND}</p>
          <p className="mt-2 font-serif text-5xl font-medium text-foreground sm:text-6xl">{gator.total}</p>
          <p className="text-sm text-muted-foreground">{gator.subtitle}</p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{gator.label}</p>
          <ul className="mt-4 space-y-3">
            {gator.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryBtn href={BRAND_APP} className="flex-1">Buy now</PrimaryBtn>
            <a href="#plans" className="flex flex-1 items-center justify-center rounded-md border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-accent">
              Explore plans
            </a>
          </div>
        </div>
      </div>

      {/* Plan tiers */}
      <div id="plans" className="flex flex-col gap-6">
        <div className="text-center">
          <h3 className="font-serif text-2xl font-medium text-foreground md:text-3xl">Choose your plan</h3>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">Start free. Upgrade when you need more.</p>
        </div>
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {merlinPlans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col rounded-2xl border p-6 text-left sm:p-8 ${
                plan.highlighted
                  ? 'border-foreground/25 bg-card shadow-lg ring-1 ring-foreground/10'
                  : 'border-border bg-card'
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 w-max rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h4 className="font-serif text-xl font-medium text-foreground">{plan.name}</h4>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-serif text-4xl font-medium text-foreground">{plan.price}</span>
                {plan.price !== 'Custom' && plan.id !== 'free' && (
                  <span className="text-sm text-muted-foreground">/mo</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{plan.period}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <PrimaryBtn
                href={plan.href}
                className={`mt-8 w-full ${plan.highlighted ? '' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
              >
                {plan.cta}
              </PrimaryBtn>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
