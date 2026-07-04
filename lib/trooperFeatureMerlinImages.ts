/** Self-hosted feature panel images (Merlin CDN blocks hotlinking from gator.so). */
const M = '/images/merlin'

export const CAPABILITY_MERLIN_IMAGES = [
  `${M}/extension/webpage.png`,
  `${M}/extension/search.png`,
  `${M}/extension/context.png`,
  `${M}/extension/learn.png`,
  `${M}/chat/projects.png`,
  `${M}/chat/infographics.png`,
  `${M}/chat/appsnip.png`,
  `${M}/chat/reasoning.png`,
  `${M}/social/image-gen.png`,
] as const

export const DATA_SOURCES_MERLIN_IMAGE = `${M}/extension/data-sources.png`
export const SMART_ROUTING_MERLIN_IMAGE = `${M}/social/video.png`
