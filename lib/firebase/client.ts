import { getApp, getApps, initializeApp, type FirebaseApp, type FirebaseOptions } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'

type FirebaseClientConfig = FirebaseOptions

let configPromise: Promise<FirebaseClientConfig | null> | undefined
let cachedApp: FirebaseApp | undefined
let cachedAuth: Auth | undefined

async function fetchFirebaseConfig(): Promise<FirebaseClientConfig | null> {
  if (!configPromise) {
    configPromise = fetch('/api/firebase-config', { cache: 'no-store' })
      .then(async (response) => {
        if (!response.ok) return null
        return (await response.json()) as FirebaseClientConfig
      })
      .catch(() => null)
  }

  return configPromise
}

export async function isFirebaseConfigured() {
  const config = await fetchFirebaseConfig()
  return config !== null
}

export async function getFirebaseApp() {
  if (cachedApp) return cachedApp

  const config = await fetchFirebaseConfig()
  if (!config) {
    throw new Error(
      'Firebase is not configured. Set FIREBASE_* environment variables in Netlify.',
    )
  }

  cachedApp = getApps().length ? getApp() : initializeApp(config)
  return cachedApp
}

export async function getFirebaseAuth() {
  if (cachedAuth) return cachedAuth
  cachedAuth = getAuth(await getFirebaseApp())
  return cachedAuth
}
