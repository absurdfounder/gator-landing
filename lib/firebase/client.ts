import { getApp, getApps, initializeApp, type FirebaseApp, type FirebaseOptions } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'

import { resolveFirebaseClientConfig } from '@/lib/firebase/publicConfig'

type FirebaseClientConfig = FirebaseOptions

let configPromise: Promise<FirebaseClientConfig> | undefined
let cachedApp: FirebaseApp | undefined
let cachedAuth: Auth | undefined

async function loadFirebaseConfig(): Promise<FirebaseClientConfig> {
  try {
    const response = await fetch('/api/firebase-config', { cache: 'no-store' })
    if (response.ok) {
      const apiConfig = (await response.json()) as Partial<FirebaseClientConfig>
      return resolveFirebaseClientConfig(apiConfig)
    }
  } catch {
    // Fall back to build-time NEXT_PUBLIC_* or shared defaults.
  }

  return resolveFirebaseClientConfig(null)
}

async function fetchFirebaseConfig() {
  if (!configPromise) {
    configPromise = loadFirebaseConfig()
  }
  return configPromise
}

export async function isFirebaseConfigured() {
  const config = await fetchFirebaseConfig()
  return Boolean(config.apiKey && config.projectId)
}

export async function getFirebaseApp() {
  if (cachedApp) return cachedApp

  const config = await fetchFirebaseConfig()
  cachedApp = getApps().length ? getApp() : initializeApp(config)
  return cachedApp
}

export async function getFirebaseAuth() {
  if (cachedAuth) return cachedAuth
  cachedAuth = getAuth(await getFirebaseApp())
  return cachedAuth
}
