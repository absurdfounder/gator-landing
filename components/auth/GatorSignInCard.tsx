'use client'

import { Loader2, Lock, ShieldCheck, Sparkles } from 'lucide-react'
import type { ReactNode } from 'react'

const GATOR_CHARACTER_SRC = '/images/characters/gator-laptop.png'

function GoogleMark() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="https://developers.google.com/identity/images/g-logo.png"
      alt=""
      aria-hidden
      className="h-5 w-5"
    />
  )
}

export function GatorSignInHero() {
  return (
    <div className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center">
      <div className="absolute inset-2 rounded-full bg-emerald-500/20 blur-2xl" />
      <Sparkles className="absolute left-1 top-4 size-3 text-emerald-300/80" aria-hidden />
      <Sparkles className="absolute right-2 top-8 size-2.5 text-emerald-400/60" aria-hidden />
      <Sparkles className="absolute bottom-5 left-6 size-2 text-emerald-300/50" aria-hidden />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={GATOR_CHARACTER_SRC}
        alt=""
        className="relative z-10 h-24 w-24 object-contain drop-shadow-[0_12px_24px_rgba(34,197,94,0.25)]"
      />
    </div>
  )
}

export function GatorSignInHeading() {
  return (
    <h1 className="text-center text-2xl font-semibold tracking-tight text-white">
      Sign in to <span className="text-emerald-400">Gator</span>
    </h1>
  )
}

export function GatorGoogleSignInButton({
  onClick,
  disabled,
  loading,
  label,
}: {
  onClick: () => void
  disabled?: boolean
  loading?: boolean
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className="flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-emerald-500 text-base font-semibold text-white transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? (
        <Loader2 className="size-5 animate-spin" />
      ) : (
        <span className="flex size-8 items-center justify-center rounded-lg bg-emerald-600/80">
          <GoogleMark />
        </span>
      )}
      <span>{label}</span>
    </button>
  )
}

export function GatorSignInSecureNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 flex items-start justify-center gap-2 text-center text-xs leading-relaxed text-zinc-400">
      <Lock className="mt-0.5 size-3.5 shrink-0 text-emerald-400" aria-hidden />
      <span>{children}</span>
    </p>
  )
}

export function GatorSignInFooter() {
  return (
    <div className="mt-8 border-t border-white/10 pt-5">
      <p className="flex items-center justify-center gap-2 text-xs text-zinc-400">
        <ShieldCheck className="size-4 text-emerald-400" aria-hidden />
        <span>
          <strong className="font-semibold text-white">Secure by design.</strong> Your data stays private.
        </span>
      </p>
    </div>
  )
}

export function GatorSignInShell({
  subtitle,
  children,
  footer,
}: {
  subtitle: ReactNode
  children: ReactNode
  footer?: ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#0b0d0b] text-white">
      <div className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-4 py-10 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-[#141714] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
          <GatorSignInHero />
          <GatorSignInHeading />
          <p className="mt-3 text-center text-sm leading-relaxed text-zinc-400">{subtitle}</p>
          <div className="mt-8">{children}</div>
          {footer ?? <GatorSignInFooter />}
        </div>
      </div>
    </div>
  )
}
