'use client'

import { MerlinHeader, MerlinHeroBlock } from '@/components/gator/merlin/MerlinHero'
import MerlinSections from '@/components/gator/merlin/MerlinSections'

export default function MerlinClone() {
  return (
    <div className="merlin-page min-h-screen overflow-x-hidden font-sans">
      <MerlinHeader />
      <main className="relative flex w-full flex-col items-center gap-24 bg-background pb-32 md:gap-[112px]">
        <MerlinHeroBlock />
        <MerlinSections />
      </main>
    </div>
  )
}
