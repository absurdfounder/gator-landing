import type { FirebaseOptions } from 'firebase/app'

/** Gator / askgator.app Firebase project (fetchkitty-app). */
const DEFAULT_FIREBASE_CONFIG: FirebaseOptions = {
  apiKey: 'AIzaSyAvm-GVWRRFZIjD_wui9N3buRbgsEU7_Sw',
  authDomain: 'fetchkitty-app.firebaseapp.com',
  projectId: 'fetchkitty-app',
  storageBucket: 'fetchkitty-app.firebasestorage.app',
  messagingSenderId: '786550008641',
  appId: '1:786550008641:web:23d7450458e2b383a0cfc0',
}

function pickEnv(...names: string[]) {
  for (const name of names) {
    const value = process.env[name]?.trim()
    if (value) return value
  }
  return undefined
}

function isCompleteConfig(config: Partial<FirebaseOptions>): config is FirebaseOptions {
  return Boolean(
    config.apiKey &&
      config.authDomain &&
      config.projectId &&
      config.storageBucket &&
      config.messagingSenderId &&
      config.appId,
  )
}

/** Server-only Firebase config for /api/firebase-config. */
export function readFirebaseServerConfig(): FirebaseOptions {
  const fromEnv: Partial<FirebaseOptions> = {
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

  if (isCompleteConfig(fromEnv)) {
    return fromEnv
  }

  return DEFAULT_FIREBASE_CONFIG
}
