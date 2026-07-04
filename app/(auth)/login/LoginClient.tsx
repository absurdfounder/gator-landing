'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, type User } from 'firebase/auth'
import { CheckCircle2 } from 'lucide-react'

import {
  GatorGoogleSignInButton,
  GatorSignInSecureNote,
  GatorSignInShell,
} from '@/components/auth/GatorSignInCard'
import PixelButton from '@/components/ui/PixelButton'
import { gatorCheckoutUrl } from '@/lib/gatorBrand'
import { getFirebaseAuth, isFirebaseConfigured } from '@/lib/firebase/client'
import { sendAuthSessionToExtension } from '@/lib/extensionAuth'

type LoginPhase = 'loading' | 'idle' | 'signing-in' | 'handoff' | 'success' | 'error'

async function handoffUserToExtension(user: User, extensionId: string) {
  const token = await user.getIdToken()
  const tokenResult = await user.getIdTokenResult()
  const expiresIn = tokenResult.expirationTime
    ? Math.max(60, Math.floor((new Date(tokenResult.expirationTime).getTime() - Date.now()) / 1000))
    : 3600

  return sendAuthSessionToExtension({
    extensionId,
    token,
    email: user.email,
    uid: user.uid,
    expiresIn,
  })
}

export default function LoginClient() {
  const searchParams = useSearchParams()
  const extensionId = searchParams.get('extensionId')?.trim() || ''
  const returnMode = searchParams.get('returnMode')?.trim() || ''
  const source = searchParams.get('source')?.trim() || ''
  const checkoutPlanParam = searchParams.get('plan')?.trim().toLowerCase() || ''
  const checkoutPlan =
    checkoutPlanParam === 'lifetime' || checkoutPlanParam === 'cloud' ? checkoutPlanParam : null
  const wantsExtensionHandoff = returnMode === 'extensionMessage' && extensionId.length > 0

  const [phase, setPhase] = useState<LoginPhase>('loading')
  const [error, setError] = useState('')
  const [signedInEmail, setSignedInEmail] = useState('')
  const [autoAttempted, setAutoAttempted] = useState(false)

  const subtitle = useMemo(() => {
    if (source === 'gator-extension' || wantsExtensionHandoff) {
      return 'Connect your account to run browser automation and sync your settings across devices.'
    }
    if (checkoutPlan === 'lifetime') {
      return 'Sign in to continue to secure checkout for Gator Lifetime ($37 one-time).'
    }
    if (checkoutPlan === 'cloud') {
      return 'Sign in to continue to secure checkout for Gator Cloud ($20/month).'
    }
    return 'Connect your account to run browser automation and sync your settings across devices.'
  }, [checkoutPlan, source, wantsExtensionHandoff])

  const secureNote = useMemo(() => {
    if (wantsExtensionHandoff) {
      return 'Sign-in opens askgator.app and securely returns your session to this extension.'
    }
    return 'Sign in with Google to manage billing, subscriptions, and your Gator account.'
  }, [wantsExtensionHandoff])

  const redirectToAppCheckout = useCallback(() => {
    if (!checkoutPlan) return
    window.location.assign(gatorCheckoutUrl(checkoutPlan))
  }, [checkoutPlan])

  const completeHandoff = useCallback(
    async (user: User) => {
      setSignedInEmail(user.email || '')
      if (wantsExtensionHandoff) {
        setPhase('handoff')
        const result = await handoffUserToExtension(user, extensionId)
        if (result.ok) {
          setPhase('success')
          return
        }

        setPhase('error')
        setError(result.error)
        return
      }

      if (checkoutPlan) {
        setPhase('success')
        redirectToAppCheckout()
        return
      }

      setPhase('success')
    },
    [checkoutPlan, extensionId, redirectToAppCheckout, wantsExtensionHandoff],
  )

  useEffect(() => {
    let cancelled = false

    isFirebaseConfigured().then((configured) => {
      if (cancelled) return
      if (!configured) {
        setPhase('error')
        setError('Sign-in is temporarily unavailable. Firebase environment variables are not configured.')
        return
      }
      setPhase('idle')
    })

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (phase === 'loading' || phase === 'error') return

    let unsubscribe = () => {}

    getFirebaseAuth().then((auth) => {
      unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (!user || autoAttempted) return
        setAutoAttempted(true)
        await completeHandoff(user)
      })
    })

    return () => unsubscribe()
  }, [autoAttempted, completeHandoff, phase])

  const handleGoogleSignIn = async () => {
    const configured = await isFirebaseConfigured()
    if (!configured) {
      setPhase('error')
      setError('Sign-in is temporarily unavailable. Firebase environment variables are not configured.')
      return
    }

    setError('')
    setPhase('signing-in')

    try {
      const auth = await getFirebaseAuth()
      const provider = new GoogleAuthProvider()
      provider.setCustomParameters({ prompt: 'select_account' })
      const result = await signInWithPopup(auth, provider)
      setAutoAttempted(true)
      await completeHandoff(result.user)
    } catch (signInError) {
      const message =
        signInError instanceof Error ? signInError.message : 'Unable to sign in with Google.'
      if (/popup-closed-by-user|cancelled-popup-request/i.test(message)) {
        setPhase('idle')
        setError('Sign-in was cancelled. Try again when you are ready.')
        return
      }
      setPhase('error')
      setError(message)
    }
  }

  const buttonLabel =
    phase === 'loading'
      ? 'Loading...'
      : phase === 'handoff'
        ? 'Connecting extension...'
        : phase === 'signing-in'
          ? 'Signing in...'
          : 'Continue with Google'

  if (phase === 'success') {
    return (
      <GatorSignInShell subtitle="You're signed in and ready to go.">
        <div className="space-y-4 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <p className="font-medium text-white">You&apos;re signed in</p>
            {signedInEmail ? <p className="mt-1 text-sm text-zinc-400">{signedInEmail}</p> : null}
          </div>
          {wantsExtensionHandoff ? (
            <p className="text-sm text-zinc-400">
              Your session was sent to the Gator extension. You can close this tab and return to the
              side panel.
            </p>
          ) : checkoutPlan ? (
            <div className="space-y-3">
              <p className="text-sm text-zinc-400">
                Redirecting you to Stripe checkout with <strong className="text-white">{signedInEmail}</strong>{' '}
                pre-filled…
              </p>
              <PixelButton type="button" onClick={redirectToAppCheckout} className="w-full">
                Continue to checkout
              </PixelButton>
            </div>
          ) : (
            <p className="text-sm text-zinc-400">You can close this tab or continue browsing askgator.app.</p>
          )}
        </div>
      </GatorSignInShell>
    )
  }

  return (
    <GatorSignInShell subtitle={subtitle}>
      <GatorGoogleSignInButton
        onClick={handleGoogleSignIn}
        loading={phase === 'loading' || phase === 'signing-in' || phase === 'handoff'}
        disabled={phase === 'loading' || phase === 'handoff'}
        label={buttonLabel}
      />
      {error ? <p className="mt-4 text-center text-sm text-red-400">{error}</p> : null}
      <GatorSignInSecureNote>{secureNote}</GatorSignInSecureNote>
      {wantsExtensionHandoff ? (
        <p className="mt-3 text-center text-[11px] text-zinc-500">
          Extension ID <code className="rounded bg-white/5 px-1 py-0.5 text-zinc-400">{extensionId}</code>
        </p>
      ) : null}
    </GatorSignInShell>
  )
}
