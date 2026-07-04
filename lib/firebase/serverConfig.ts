import type { FirebaseOptions } from 'firebase/app'

function pickEnv(name: string) {
  const value = process.env[name]?.trim()
  return value || undefined
}

/** Server-only Firebase config — never hardcode keys (Netlify secrets scan). */
export function readFirebaseServerConfig(): FirebaseOptions | null {
  const apiKey = pickEnv('FIREBASE_API_KEY')
  const authDomain = pickEnv('FIREBASE_AUTH_DOMAIN')
  const projectId = pickEnv('FIREBASE_PROJECT_ID')
  const storageBucket = pickEnv('FIREBASE_STORAGE_BUCKET')
  const messagingSenderId = pickEnv('FIREBASE_MESSAGING_SENDER_ID')
  const appId = pickEnv('FIREBASE_APP_ID')
  const databaseURL = pickEnv('FIREBASE_DATABASE_URL')

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
