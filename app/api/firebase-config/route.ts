import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

function readServerConfig() {
  const apiKey = process.env.FIREBASE_API_KEY
  const authDomain = process.env.FIREBASE_AUTH_DOMAIN
  const projectId = process.env.FIREBASE_PROJECT_ID
  const storageBucket = process.env.FIREBASE_STORAGE_BUCKET
  const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID
  const appId = process.env.FIREBASE_APP_ID
  const databaseURL = process.env.FIREBASE_DATABASE_URL

  if (!apiKey || !authDomain || !projectId || !storageBucket || !messagingSenderId || !appId) {
    return null
  }

  return {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    ...(databaseURL ? { databaseURL } : {}),
  }
}

export async function GET() {
  const config = readServerConfig()
  if (!config) {
    return NextResponse.json({ error: 'Firebase is not configured' }, { status: 503 })
  }

  return NextResponse.json(config, {
    headers: {
      'Cache-Control': 'no-store',
    },
  })
}
