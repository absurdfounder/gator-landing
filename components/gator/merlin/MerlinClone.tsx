'use client'

import { MerlinHeader, MerlinHeroBlock } from '@/components/gator/merlin/MerlinHero'
import MerlinScrollRail from '@/components/gator/merlin/MerlinScrollRail'
import MerlinSections from '@/components/gator/merlin/MerlinSections'

export default function MerlinClone() {
  return (
    <div className="merlin-page min-h-screen overflow-x-hidden font-sans">
      <MerlinHeader />
      <main className="relative flex w-full flex-col items-center gap-16 bg-background px-0 pb-24 md:gap-[112px] md:pb-32">
        <MerlinScrollRail />
        <MerlinHeroBlock />
        <MerlinSections />
      </main>
    </div>
  )
}
