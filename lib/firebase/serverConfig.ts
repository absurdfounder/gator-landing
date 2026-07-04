import type { FirebaseOptions } from 'firebase/app'

/** Read at request time — dynamic key avoids Next.js inlining env into bundles. */
function runtimeEnv(name: string): string | undefined {
  const value = process.env[name]?.trim()
  return value || undefined
}

/** Server-only Firebase config for /api/firebase-config. Never hardcode keys. */
export function readFirebaseServerConfig(): FirebaseOptions | null {
  const apiKey = runtimeEnv('FIREBASE_API_KEY')
  const authDomain = runtimeEnv('FIREBASE_AUTH_DOMAIN')
  const projectId = runtimeEnv('FIREBASE_PROJECT_ID')
  const storageBucket = runtimeEnv('FIREBASE_STORAGE_BUCKET')
  const messagingSenderId = runtimeEnv('FIREBASE_MESSAGING_SENDER_ID')
  const appId = runtimeEnv('FIREBASE_APP_ID')
  const databaseURL = runtimeEnv('FIREBASE_DATABASE_URL')

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
