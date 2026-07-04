import { NextResponse } from 'next/server'

import { readFirebaseServerConfig } from '@/lib/firebase/serverConfig'

export const dynamic = 'force-dynamic'

export async function GET() {
  const config = readFirebaseServerConfig()

  if (!config) {
    return NextResponse.json(
      { error: 'Firebase is not configured. Set FIREBASE_* env vars on the host.' },
      {
        status: 503,
        headers: {
          'Cache-Control': 'no-store',
          'X-Gator-Firebase-Config': 'missing',
        },
      },
    )
  }

  return NextResponse.json(config, {
    headers: {
      'Cache-Control': 'no-store',
      'X-Gator-Firebase-Config': 'ready',
    },
  })
}
