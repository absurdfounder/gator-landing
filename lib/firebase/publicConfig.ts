import type { FirebaseOptions } from 'firebase/app'

/** Public web client config — same Firebase project as Trooper / askgator auth. */
export const DEFAULT_FIREBASE_CONFIG: FirebaseOptions = {
  apiKey: 'AIzaSyCbBR2aIwfR-iPHZC6zFLcjS7EdZs5KeNA',
  authDomain: 'ai-copilot-104.firebaseapp.com',
  projectId: 'ai-copilot-104',
  storageBucket: 'ai-copilot-104.appspot.com',
  messagingSenderId: '836821389098',
  appId: '1:836821389098:web:3cfb286b3fcb0e728c5853',
  databaseURL: 'https://ai-copilot-104-default-rtdb.firebaseio.com',
}

function pickPublicEnv(...names: string[]) {
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

export function resolveFirebaseClientConfig(apiConfig?: Partial<FirebaseOptions> | null) {
  if (apiConfig && isCompleteConfig(apiConfig)) {
    return apiConfig
  }

  const fromEnv: Partial<FirebaseOptions> = {
    apiKey: pickPublicEnv('NEXT_PUBLIC_FIREBASE_API_KEY'),
    authDomain: pickPublicEnv('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'),
    projectId: pickPublicEnv('NEXT_PUBLIC_FIREBASE_PROJECT_ID'),
    storageBucket: pickPublicEnv('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'),
    messagingSenderId: pickPublicEnv('NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'),
    appId: pickPublicEnv('NEXT_PUBLIC_FIREBASE_APP_ID'),
    databaseURL: pickPublicEnv('NEXT_PUBLIC_FIREBASE_DATABASE_URL'),
  }

  if (isCompleteConfig(fromEnv)) {
    return fromEnv
  }

  return DEFAULT_FIREBASE_CONFIG
}
