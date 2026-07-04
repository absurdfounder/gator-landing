import { getApp, getApps, initializeApp, type FirebaseApp, type FirebaseOptions } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'

function readConfig(): FirebaseOptions | null {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
  const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
  const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
  const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID

  if (!apiKey || !authDomain || !projectId || !storageBucket || !messagingSenderId || !appId) {
    return null
  }

  const config: FirebaseOptions = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
  }

  const databaseURL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
  if (databaseURL) config.databaseURL = databaseURL

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
