import { Suspense } from 'react'
import type { Metadata } from 'next'

import LoginClient from './LoginClient'

export const metadata: Metadata = {
  title: 'Sign in | Gator',
  description: 'Sign in with Google to connect your Gator extension account.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#0b0d0b] text-sm text-zinc-400">
          Loading sign-in...
        </div>
      }
    >
      <LoginClient />
    </Suspense>
  )
}
