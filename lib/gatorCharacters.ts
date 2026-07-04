export const gatorCharacters = {
  laptop: {
    src: '/images/characters/gator-laptop.png',
    alt: 'Gator working on a laptop',
  },
  laptopMug: {
    src: '/images/characters/gator-laptop-mug.png',
    alt: 'Gator at a laptop with coffee',
  },
  typing: {
    src: '/images/characters/gator-typing.png',
    alt: 'Gator typing on a laptop',
  },
  thinking: {
    src: '/images/characters/gator-thinking.png',
    alt: 'Gator thinking through a plan',
  },
  reading: {
    src: '/images/characters/gator-reading.png',
    alt: 'Gator reading and learning',
  },
  headphones: {
    src: '/images/characters/gator-headphones.png',
    alt: 'Gator focused with headphones',
  },
  analytics: {
    src: '/images/characters/gator-analytics.png',
    alt: 'Gator reviewing analytics',
  },
  files: {
    src: '/images/characters/gator-files.png',
    alt: 'Gator organizing files',
  },
  coffee: {
    src: '/images/characters/gator-coffee.png',
    alt: 'Gator taking a coffee break',
  },
} as const

export type GatorCharacterId = keyof typeof gatorCharacters

/** One mascot per capability card in OldWays (matches card order). */
export const capabilityCharacterIds: GatorCharacterId[] = [
  'laptop',
  'files',
  'typing',
  'reading',
  'headphones',
  'laptopMug',
  'thinking',
  'analytics',
  'coffee',
]
