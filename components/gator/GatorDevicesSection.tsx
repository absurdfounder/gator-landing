import Image from 'next/image'
import { merlinAssets } from '@/lib/merlinAssets'

const DEVICES = [
  { icon: merlinAssets.devices.chrome, label: 'Web app', href: 'https://app.gator.so' },
  { icon: merlinAssets.devices.chrome, label: 'Chrome extension', href: '#' },
  { icon: merlinAssets.devices.apple, label: 'iOS app', href: '#' },
  { icon: merlinAssets.devices.playstore, label: 'Android app', href: '#' },
]

export default function GatorDevicesSection() {
  return (
    <section className="border-t border-black/[0.06] bg-[#fafaf9] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            On all your devices
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-ink-muted">
            Work with Gator across all devices with synced history, custom prompts and all the
            Gator magic — effortlessly!
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <Image
            src={merlinAssets.devices.macbook}
            alt="Gator on MacBook"
            width={900}
            height={600}
            className="mx-auto w-full drop-shadow-2xl"
          />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {DEVICES.map((device) => (
            <a
              key={device.label}
              href={device.href}
              className="flex items-center gap-3 rounded-2xl border border-black/[0.06] bg-white px-6 py-4 transition hover:border-gator/20 hover:shadow-md"
            >
              <Image src={device.icon} alt="" width={24} height={24} className="h-6 w-6" />
              <span className="text-sm font-medium text-ink">{device.label}</span>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://app.gator.so?ref=devices"
            className="inline-flex rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-ink/90"
          >
            Start using Gator
          </a>
        </div>
      </div>
    </section>
  )
}
