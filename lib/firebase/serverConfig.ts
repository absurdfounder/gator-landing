import type { FirebaseOptions } from 'firebase/app'

function pickEnv(...names: string[]) {
  for (const name of names) {
    const value = process.env[name]?.trim()
    if (value) return value
  }
  return undefined
}

/** Public web client config — same Firebase project as Trooper / askgator auth. */
const DEFAULT_FIREBASE_CONFIG: FirebaseOptions = {
  apiKey: 'AIzaSyCbBR2aIwfR-iPHZC6zFLcjS7EdZs5KeNA',
  authDomain: 'ai-copilot-104.firebaseapp.com',
  projectId: 'ai-copilot-104',
  storageBucket: 'ai-copilot-104.appspot.com',
  messagingSenderId: '836821389098',
  appId: '1:836821389098:web:3cfb286b3fcb0e728c5853',
  databaseURL: 'https://ai-copilot-104-default-rtdb.firebaseio.com',
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

  if (isCompleteConfig(fromServerEnv)) {
    return fromServerEnv
  }

  return DEFAULT_FIREBASE_CONFIG
}
