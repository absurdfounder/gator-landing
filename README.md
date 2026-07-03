# gator-landing

Marketing landing page for **Gator** — forked from [trooper_landing](../trooper_landing).

## Brand assets

- `public/images/gator-icon.png` — app icon / favicon
- `public/images/gator-logo.png` — full wordmark logo

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Structure

The homepage lives at `app/(default)/page.tsx` and uses gator-specific components in `components/gator/`:

- `GatorHero` — dark hero with chat demo
- `GatorHowItWorks` — 3-step explainer
- `GatorFeatures` — capability grid
- `GatorPricing` — pricing tiers
- `GatorFAQ` — accordion FAQ
- `GatorCTA` — final call-to-action
- `GatorHeader` / `GatorFooter` — navigation chrome
