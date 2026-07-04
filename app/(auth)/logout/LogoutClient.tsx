'use client'

import { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth'
import { Loader2 } from 'lucide-react'

import Header from '@/components/ui/header'
import { getFirebaseAuth, isFirebaseConfigured } from '@/lib/firebase/client'

export default function LogoutClient() {
  const [message, setMessage] = useState('Signing you out...')

  useEffect(() => {
    if (!isFirebaseConfigured()) {
      setMessage('Sign-out is unavailable because Firebase is not configured.')
      return
    }

    let cancelled = false

    signOut(getFirebaseAuth())
      .then(() => {
        if (cancelled) return
        setMessage('Signed out. You can close this tab.')
      })
      .catch((error) => {
        if (cancelled) return
        setMessage(error instanceof Error ? error.message : 'Unable to sign out.')
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <Header />
      <section className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-lg flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
        <Loader2 className="mb-4 h-6 w-6 animate-spin text-stone-500" />
        <p className="text-sm text-stone-600">{message}</p>
      </section>
    </>
  )
}
