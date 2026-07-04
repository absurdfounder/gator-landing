import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'

const defaultFirebaseConfig = {
  apiKey: 'AIzaSyBTnN4M1e1oQIUYpu9UrwDDDj2WmABjvNk',
  authDomain: 'AskGator-dcfea.firebaseapp.com',
  databaseURL: 'https://AskGator-dcfea-default-rtdb.firebaseio.com',
  projectId: 'AskGator-dcfea',
  storageBucket: 'AskGator-dcfea.appspot.com',
  messagingSenderId: '448918689208',
  appId: '1:448918689208:web:d472413081ad9d0b2f2b4d',
}

function readConfig() {
  return {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || defaultFirebaseConfig.apiKey,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || defaultFirebaseConfig.authDomain,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || defaultFirebaseConfig.databaseURL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || defaultFirebaseConfig.projectId,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || defaultFirebaseConfig.storageBucket,
    messagingSenderId:
      process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || defaultFirebaseConfig.messagingSenderId,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || defaultFirebaseConfig.appId,
  }
}

let cachedApp: FirebaseApp | undefined
let cachedAuth: Auth | undefined

export function getFirebaseApp() {
  if (cachedApp) return cachedApp
  cachedApp = getApps().length ? getApp() : initializeApp(readConfig())
  return cachedApp
}

export function getFirebaseAuth() {
  if (cachedAuth) return cachedAuth
  cachedAuth = getAuth(getFirebaseApp())
  return cachedAuth
}
