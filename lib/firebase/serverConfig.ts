import type { FirebaseOptions } from 'firebase/app'

/** Public web client config — same Firebase project as Gator / askgator auth. */
export const DEFAULT_FIREBASE_CONFIG: FirebaseOptions = {
  apiKey: 'AIzaSyCbBR2aIwfR-iPHZC6zFLcjS7EdZs5KeNA',
  authDomain: 'ai-copilot-104.firebaseapp.com',
  projectId: 'ai-copilot-104',
  storageBucket: 'ai-copilot-104.appspot.com',
  messagingSenderId: '836821389098',
  appId: '1:836821389098:web:3cfb286b3fcb0e728c5853',
  databaseURL: 'https://ai-copilot-104-default-rtdb.firebaseio.com',
}

function pickEnv(...names: string[]) {
  for (const name of names) {
    const value = process.env[name]?.trim()
    if (value) return value
  }
  return undefined
}

export function readFirebaseServerConfig(): FirebaseOptions | null {
  const apiKey = pickEnv('FIREBASE_API_KEY', 'NEXT_PUBLIC_FIREBASE_API_KEY') || DEFAULT_FIREBASE_CONFIG.apiKey
  const authDomain =
    pickEnv('FIREBASE_AUTH_DOMAIN', 'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN') ||
    DEFAULT_FIREBASE_CONFIG.authDomain
  const projectId =
    pickEnv('FIREBASE_PROJECT_ID', 'NEXT_PUBLIC_FIREBASE_PROJECT_ID') ||
    DEFAULT_FIREBASE_CONFIG.projectId
  const storageBucket =
    pickEnv('FIREBASE_STORAGE_BUCKET', 'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET') ||
    DEFAULT_FIREBASE_CONFIG.storageBucket
  const messagingSenderId =
    pickEnv('FIREBASE_MESSAGING_SENDER_ID', 'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID') ||
    DEFAULT_FIREBASE_CONFIG.messagingSenderId
  const appId =
    pickEnv('FIREBASE_APP_ID', 'NEXT_PUBLIC_FIREBASE_APP_ID') || DEFAULT_FIREBASE_CONFIG.appId
  const databaseURL =
    pickEnv('FIREBASE_DATABASE_URL', 'NEXT_PUBLIC_FIREBASE_DATABASE_URL') ||
    DEFAULT_FIREBASE_CONFIG.databaseURL

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
