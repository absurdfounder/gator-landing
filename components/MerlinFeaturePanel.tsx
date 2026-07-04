'use client'

import MerlinImage from '@/components/gator/merlin/MerlinImage'

type MerlinFeaturePanelProps = {
  src: string
  alt: string
  className?: string
}

export default function MerlinFeaturePanel({ src, alt, className = '' }: MerlinFeaturePanelProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <MerlinImage
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-center"
      />
    </div>
  )
}
