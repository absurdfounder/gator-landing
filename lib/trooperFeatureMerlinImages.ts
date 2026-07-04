import { merlinAssets } from '@/lib/merlinAssets'

/** Merlin CDN screenshots mapped to Trooper landing capability cards (OldWays). */
export const CAPABILITY_MERLIN_IMAGES = [
  merlinAssets.chat.projects,
  merlinAssets.extension.context,
  merlinAssets.chat.appsnip,
  merlinAssets.chat.infographics,
  merlinAssets.social.video,
  merlinAssets.security[0],
  merlinAssets.extension.webpage,
  merlinAssets.security[1],
  merlinAssets.social.imageGen,
] as const

export const DATA_SOURCES_MERLIN_IMAGE = merlinAssets.extension.learn
export const SMART_ROUTING_MERLIN_IMAGE = merlinAssets.chat.reasoning
