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
        <div className="flex min-h-[50vh] items-center justify-center text-sm text-stone-500">Loading sign-in...</div>
      }
    >
      <LoginClient />
    </Suspense>
  )
}
