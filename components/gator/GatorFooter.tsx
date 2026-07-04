import GatorLogo from '@/components/ui/GatorLogo'
import { BRAND_APP, BRAND_CONTACT_URL, BRAND_SUPPORT_MAILTO } from '@/lib/merlinCopy'

const FOOTER_TOOLS = [
  'AI for Google',
  'AI for Twitter',
  'AI for LinkedIn',
  'Chat with Gator',
  'Chat with PDF',
  'Chat with Websites',
  'YouTube Summarizer',
  '70+ More AI Tools',
]

const FOOTER_COMPANY = [
  { label: 'Team', href: '#teams' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms and Conditions', href: '/terms' },
  { label: 'Careers', href: BRAND_CONTACT_URL },
  { label: 'Feature Request', href: BRAND_CONTACT_URL },
  { label: 'How It Works', href: '#features' },
  { label: 'Contact us', href: BRAND_CONTACT_URL },
  { label: 'Support', href: BRAND_SUPPORT_MAILTO },
] as const

export default function GatorFooter() {
  return (
    <footer className="border-t border-black/[0.06] bg-[#fafaf9] pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <GatorLogo variant="full" theme="light" />
            <p className="mt-4 text-sm text-ink-muted">
              Your AI assistant that actually gets things done.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">Tools</h4>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_TOOLS.map((link) => (
                <li key={link}>
                  <a href={BRAND_APP} className="text-sm text-ink-muted transition hover:text-gator-700">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-ink-muted transition hover:text-gator-700">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">Get Gator</h4>
            <ul className="mt-4 space-y-2.5">
              {['Web app', 'Chrome extension', 'iOS app', 'Android app'].map((item) => (
                <li key={item}>
                  <a
                    href={BRAND_APP}
                    className="text-sm text-ink-muted transition hover:text-gator-700"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://app.gator.so?ref=footer"
              className="mt-6 inline-flex rounded-full bg-gator px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gator-600"
            >
              Start using Gator
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} Gator. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-ink-faint">
            <a href="/privacy" className="hover:text-ink">Privacy Policy</a>
            <a href="/terms" className="hover:text-ink">Terms</a>
            <a href={BRAND_CONTACT_URL} className="hover:text-ink">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
