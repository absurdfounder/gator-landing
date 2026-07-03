export default function GatorSocialProof() {
  const ratings = [
    { score: '4.8', label: 'on Chrome Store' },
    { score: '4.3', label: 'by AppSumo users' },
    { score: '4.7', label: 'on App Store' },
  ]

  return (
    <section className="border-t border-black/[0.06] bg-[#fafaf9] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Available in 200+ countries
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-ink-muted">
            Experience the best of AI with Gator, even in regions where other LLMs are restricted.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-16">
          {ratings.map((r) => (
            <div key={r.label} className="text-center">
              <p className="text-4xl font-bold text-gator">{r.score}</p>
              <p className="mt-1 text-sm text-ink-muted">{r.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
