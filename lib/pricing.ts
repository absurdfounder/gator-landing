/** Public marketing prices — keep in sync with app checkout when billing changes. */
export const PRICING_USD = {
  lite: 0,
  lifetime: 37,
  cloudMonthly: 20,
} as const;

export function formatUsd(amount: number) {
  return amount === 0 ? 'Free' : `$${amount}`;
}

export const COMMON_PLAN_FEATURES = [
  'Browser extension loops',
  'OpenClaw skills & integrations',
  'Pause, override, and stop anytime',
] as const;

export type PlanId = 'lite' | 'lifetime' | 'cloud';

export type MarketingPlan = {
  id: PlanId;
  index: string;
  eyebrow: string;
  badge: string;
  title: string;
  price: number;
  cadence?: string;
  subline: string;
  note: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

export const MARKETING_PLANS: MarketingPlan[] = [
  {
    id: 'lite',
    index: '01',
    eyebrow: 'Get started',
    badge: 'Free',
    title: 'Gator Lite',
    price: PRICING_USD.lite,
    subline: 'Gator Lite model — loops in your browser.',
    note: 'No credit card. Install the extension and run.',
    features: [
      'Gator Lite model',
      'Browser extension loops',
      'Core OpenClaw skills',
      'Bring your own API keys (optional)',
    ],
    cta: 'Get started free',
    href: 'https://app.gator.so?ref=extension',
  },
  {
    id: 'lifetime',
    index: '02',
    eyebrow: 'Pay once',
    badge: 'Most popular',
    title: 'Lifetime',
    price: PRICING_USD.lifetime,
    cadence: 'one-time',
    featured: true,
    subline: 'Codex Connect & OpenRouter keys included.',
    note: 'Full models. Pay once, use forever.',
    features: [
      'Codex Connect included',
      'OpenRouter keys included',
      'All agent loops & skills',
      'Lifetime access — no subscription',
    ],
    cta: 'Get lifetime',
    href: 'https://app.gator.so?plan=lifetime',
  },
  {
    id: 'cloud',
    index: '03',
    eyebrow: 'Hosted',
    badge: 'Monthly',
    title: 'Gator Cloud',
    price: PRICING_USD.cloudMonthly,
    cadence: '/ month',
    subline: 'Just buy and use — we host everything.',
    note: 'No setup. Sign up and your loops are live.',
    features: [
      'Hosted runtime — zero setup',
      'Always-on virtual PC',
      'Full model access',
      'Unlimited connected devices',
    ],
    cta: 'Start Gator Cloud',
    href: 'https://app.gator.so?plan=cloud',
  },
];
