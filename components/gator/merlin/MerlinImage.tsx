'use client'

import Image, { type ImageProps } from 'next/image'

/** CDN assets bypass Next image optimizer for reliable Netlify delivery. */
export default function MerlinImage(props: ImageProps) {
  const src = typeof props.src === 'string' ? props.src : ''
  const isRemote = src.startsWith('http')
  const isLocal = src.startsWith('/')
  return <Image {...props} unoptimized={isRemote || isLocal || props.unoptimized} />
}
