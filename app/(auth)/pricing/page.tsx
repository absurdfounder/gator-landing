// app/(auth)/pricing/page.tsx (Server Component)

import React from "react";
import { Metadata } from "next";
import PricingClient from "./PricingClient";
import { buildPageMetadata } from "@/lib/og/buildMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Gator Pricing – Solo Lifetime Deal, Cloud, and Enterprise",
  description:
    "Choose how you want to run Gator. Local install $49 one-time, Solo Cloud for $149, hosted cloud from $25/mo, or enterprise self-host. Unlimited agents, all AI models, bring your own API keys.",
  canonical: "https://gator.so/pricing",
  ogKind: "page",
  ogSlug: "pricing",
});

export default function PricingPage() {
  return <PricingClient />;
}
