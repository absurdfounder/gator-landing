import { NextResponse } from 'next/server'

import { GATOR_FIREBASE_PROJECT_ID, readFirebaseServerConfig } from '@/lib/firebase/serverConfig'

export const dynamic = 'force-dynamic'

export async function GET() {
  const config = readFirebaseServerConfig()

  return NextResponse.json(config, {
    headers: {
      'Cache-Control': 'no-store',
      'X-Gator-Firebase-Config': 'ready',
      'X-Gator-Firebase-Project': config.projectId ?? GATOR_FIREBASE_PROJECT_ID,
    },
  })
}
