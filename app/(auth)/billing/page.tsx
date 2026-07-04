import { Suspense } from 'react'
import type { Metadata } from 'next'

import BillingClient from './BillingClient'

export const metadata: Metadata = {
  title: 'Billing | Gator',
  description: 'Manage your Gator subscription, plans, and checkout.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function BillingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center text-sm text-stone-500">
          Loading billing...
        </div>
      }
    >
      <BillingClient />
    </Suspense>
  )
}
