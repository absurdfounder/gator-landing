import { getApp, getApps, initializeApp, type FirebaseApp, type FirebaseOptions } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'

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

function readConfig(): FirebaseOptions | null {
  const config: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || DEFAULT_FIREBASE_CONFIG.apiKey,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || DEFAULT_FIREBASE_CONFIG.authDomain,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || DEFAULT_FIREBASE_CONFIG.projectId,
    storageBucket:
      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || DEFAULT_FIREBASE_CONFIG.storageBucket,
    messagingSenderId:
      process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ||
      DEFAULT_FIREBASE_CONFIG.messagingSenderId,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || DEFAULT_FIREBASE_CONFIG.appId,
  }

  const databaseURL =
    process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || DEFAULT_FIREBASE_CONFIG.databaseURL
  if (databaseURL) config.databaseURL = databaseURL

  if (
    !config.apiKey ||
    !config.authDomain ||
    !config.projectId ||
    !config.storageBucket ||
    !config.messagingSenderId ||
    !config.appId
  ) {
    return null
  }

  return config
}

let cachedApp: FirebaseApp | undefined
let cachedAuth: Auth | undefined

export function isFirebaseConfigured() {
  return readConfig() !== null
}

export function getFirebaseApp() {
  if (cachedApp) return cachedApp

  const config = readConfig()
  if (!config) {
    throw new Error(
      'Firebase is not configured. Set NEXT_PUBLIC_FIREBASE_* environment variables in Netlify.',
    )
  }

  cachedApp = getApps().length ? getApp() : initializeApp(config)
  return cachedApp
}

export function getFirebaseAuth() {
  if (cachedAuth) return cachedAuth
  cachedAuth = getAuth(getFirebaseApp())
  return cachedAuth
}
