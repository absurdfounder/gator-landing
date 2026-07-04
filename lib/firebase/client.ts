import { getApp, getApps, initializeApp, type FirebaseApp, type FirebaseOptions } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'

type FirebaseClientConfig = FirebaseOptions

let configPromise: Promise<FirebaseClientConfig | null> | undefined
let cachedApp: FirebaseApp | undefined
let cachedAuth: Auth | undefined

function readBuildTimeConfig(): FirebaseClientConfig | null {
  const config: Partial<FirebaseClientConfig> = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  }

  if (
    config.apiKey &&
    config.authDomain &&
    config.projectId &&
    config.storageBucket &&
    config.messagingSenderId &&
    config.appId
  ) {
    return config as FirebaseClientConfig
  }

  return null
}

async function loadFirebaseConfig(): Promise<FirebaseClientConfig | null> {
  try {
    const response = await fetch('/api/firebase-config', { cache: 'no-store' })
    if (response.ok) {
      const apiConfig = (await response.json()) as Partial<FirebaseClientConfig>
      if (apiConfig.apiKey && apiConfig.projectId) {
        return apiConfig as FirebaseClientConfig
      }
    }
  } catch {
    // Fall back to build-time NEXT_PUBLIC_* when the API route is unavailable.
  }

  return readBuildTimeConfig()
}

async function fetchFirebaseConfig() {
  if (!configPromise) {
    configPromise = loadFirebaseConfig()
  }
  return configPromise
}

export async function isFirebaseConfigured() {
  const config = await fetchFirebaseConfig()
  return Boolean(config?.apiKey && config?.projectId)
}

export async function getFirebaseApp() {
  if (cachedApp) return cachedApp

  const config = await fetchFirebaseConfig()
  if (!config) {
    throw new Error('Firebase is not configured')
  }

  cachedApp = getApps().length ? getApp() : initializeApp(config)
  return cachedApp
}

export async function getFirebaseAuth() {
  if (cachedAuth) return cachedAuth
  cachedAuth = getAuth(await getFirebaseApp())
  return cachedAuth
}
