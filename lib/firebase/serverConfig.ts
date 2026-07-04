import type { FirebaseOptions } from 'firebase/app'

import { DEFAULT_FIREBASE_CONFIG, resolveFirebaseClientConfig } from '@/lib/firebase/publicConfig'

function pickEnv(...names: string[]) {
  for (const name of names) {
    const value = process.env[name]?.trim()
    if (value) return value
  }
  return undefined
}

export function readFirebaseServerConfig(): FirebaseOptions {
  const fromServerEnv: Partial<FirebaseOptions> = {
    apiKey: pickEnv('FIREBASE_API_KEY', 'NEXT_PUBLIC_FIREBASE_API_KEY'),
    authDomain: pickEnv('FIREBASE_AUTH_DOMAIN', 'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'),
    projectId: pickEnv('FIREBASE_PROJECT_ID', 'NEXT_PUBLIC_FIREBASE_PROJECT_ID'),
    storageBucket: pickEnv('FIREBASE_STORAGE_BUCKET', 'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'),
    messagingSenderId: pickEnv(
      'FIREBASE_MESSAGING_SENDER_ID',
      'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
    ),
    appId: pickEnv('FIREBASE_APP_ID', 'NEXT_PUBLIC_FIREBASE_APP_ID'),
    databaseURL: pickEnv('FIREBASE_DATABASE_URL', 'NEXT_PUBLIC_FIREBASE_DATABASE_URL'),
  }

  return resolveFirebaseClientConfig(fromServerEnv.apiKey ? fromServerEnv : null)
}

export { DEFAULT_FIREBASE_CONFIG }
