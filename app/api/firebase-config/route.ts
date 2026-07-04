import { NextResponse } from 'next/server'

import { readFirebaseServerConfig } from '@/lib/firebase/serverConfig'

export const dynamic = 'force-dynamic'

export async function GET() {
  const config = readFirebaseServerConfig()

  return NextResponse.json(config, {
    headers: {
      'Cache-Control': 'no-store',
      'X-Gator-Firebase-Config': 'ready',
      'X-Gator-Firebase-Project': config.projectId,
    },
  })
}
