import { merlinAssets } from '@/lib/merlinAssets'

/** Merlin landing page feature screenshots (same CDN assets as Merlin homepage sections). */
export const CAPABILITY_MERLIN_IMAGES = [
  merlinAssets.extension.webpage,
  merlinAssets.extension.search,
  merlinAssets.extension.context,
  merlinAssets.extension.learn,
  merlinAssets.chat.projects,
  merlinAssets.chat.infographics,
  merlinAssets.chat.appsnip,
  merlinAssets.chat.reasoning,
  merlinAssets.social.imageGen,
] as const

export const DATA_SOURCES_MERLIN_IMAGE = merlinAssets.extension.learn
export const SMART_ROUTING_MERLIN_IMAGE = merlinAssets.social.video
