'use client'

const SECTIONS = 13

export default function MerlinScrollRail() {
  return (
    <div className="pointer-events-none fixed left-0 top-[40%] z-10 hidden xl:block">
      <div className="absolute bottom-1/2 left-4 top-1/2 flex h-48 w-6 flex-col items-center justify-between">
        <div className="h-[2px] w-full bg-foreground" />
        {Array.from({ length: SECTIONS - 2 }).map((_, i) => (
          <div
            key={i}
            className={`h-[2px] bg-foreground/50 ${i === 0 ? 'w-4/5' : 'w-[70%]'}`}
          />
        ))}
      </div>
    </div>
  )
}
