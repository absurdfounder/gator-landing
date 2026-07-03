import { Monitor, Smartphone, Globe } from 'lucide-react'

const DEVICES = [
  { icon: Globe, label: 'Web app', href: 'https://app.gator.so' },
  { icon: Monitor, label: 'Chrome extension', href: '#' },
  { icon: Smartphone, label: 'iOS app', href: '#' },
  { icon: Smartphone, label: 'Android app', href: '#' },
]

export default function GatorDevicesSection() {
  return (
    <section className="border-t border-black/[0.06] bg-[#fafaf9] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          On all your devices
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-base text-ink-muted">
          Work with Gator across all devices with synced history, custom prompts and all the
          Gator magic — effortlessly!
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {DEVICES.map((device) => (
            <a
              key={device.label}
              href={device.href}
              className="flex items-center gap-3 rounded-2xl border border-black/[0.06] bg-white px-6 py-4 transition hover:border-gator/20 hover:shadow-md"
            >
              <device.icon className="h-5 w-5 text-gator" />
              <span className="text-sm font-medium text-ink">{device.label}</span>
            </a>
          ))}
        </div>

        <a
          href="https://app.gator.so?ref=devices"
          className="mt-10 inline-flex rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-ink/90"
        >
          Start using Gator
        </a>
      </div>
    </section>
  )
}
