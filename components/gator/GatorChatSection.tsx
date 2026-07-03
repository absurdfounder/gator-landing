import { ArrowRight } from 'lucide-react'

const CARDS = [
  {
    title: 'Use your own knowledge to research',
    desc: 'With Projects, add any context, create reusable knowledge bases and query repeatedly for tailored responses.',
  },
  {
    title: 'Turn words into infographics',
    desc: 'With Crafts, generate a variety of diagrams and interactive charts with just a prompt.',
  },
  {
    title: 'Create working app snippets',
    desc: 'Prototype rapidly with React-based app snippets and edit code on the fly.',
  },
  {
    title: 'Use reasoning with realtime web',
    desc: 'Use chain-of-thought reasoning with realtime web sources to get a powerful research machine.',
  },
]

export default function GatorChatSection() {
  return (
    <section className="border-t border-black/[0.06] bg-[#fafaf9] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-gator/10 px-3 py-1 text-xs font-semibold text-gator-700">
            NEW · Gator Chat
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            For those who build
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-ink-muted">
            Research with realtime info, visualise insights and build products with words.
          </p>
          <a
            href="https://app.gator.so?ref=chat"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gator px-6 py-3 text-sm font-semibold text-white transition hover:bg-gator-600"
          >
            Explore now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-black/[0.06] bg-white p-6 transition hover:border-gator/20 hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{card.desc}</p>
            </div>
          ))}
        </div>

        <blockquote className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-lg font-medium leading-relaxed text-ink">
            &ldquo;Gator is my go-to AI assistant. It understands context and helps with real
            tasks. A true productivity gem!&rdquo;
          </p>
          <footer className="mt-4">
            <p className="text-sm font-semibold text-ink">Alex Chen</p>
            <p className="text-xs text-ink-faint">@alexchen</p>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
