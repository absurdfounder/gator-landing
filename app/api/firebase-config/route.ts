import { NextResponse } from 'next/server'

import { readFirebaseServerConfig } from '@/lib/firebase/serverConfig'

export const dynamic = 'force-dynamic'

export async function GET() {
  const config = readFirebaseServerConfig()
  if (!config) {
    return NextResponse.json({ error: 'Firebase is not configured' }, { status: 503 })
  }

  return NextResponse.json(config, {
    headers: {
      'Cache-Control': 'no-store',
    },
  })
}
