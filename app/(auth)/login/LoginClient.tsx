'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, type User } from 'firebase/auth'
import { CheckCircle2, Loader2 } from 'lucide-react'

import Header from '@/components/ui/header'
import PixelButton from '@/components/ui/PixelButton'
import { gatorCheckoutUrl } from '@/lib/gatorBrand'
import { getFirebaseAuth, isFirebaseConfigured } from '@/lib/firebase/client'
import { sendAuthSessionToExtension } from '@/lib/extensionAuth'

type LoginPhase = 'loading' | 'idle' | 'signing-in' | 'handoff' | 'success' | 'error'

function GoogleMark() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="https://developers.google.com/identity/images/g-logo.png"
      alt=""
      aria-hidden
      className="h-5 w-5"
    />
  )
}

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
    if (source === 'gator-extension') {
      return 'Sign in with Google to connect your Gator extension account.'
    }
    if (checkoutPlan === 'lifetime') {
      return 'Sign in to continue to secure checkout for Gator Lifetime ($37 one-time).'
    }
    if (checkoutPlan === 'cloud') {
      return 'Sign in to continue to secure checkout for Gator Cloud ($20/month).'
    }
    return 'Sign in with Google to manage billing and your Gator subscription.'
  }, [checkoutPlan, source])

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

  return (
    <>
      <Header />
      <section className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-lg flex-col justify-center px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">Account</p>
            <h1 className="mt-2 text-2xl font-semibold text-stone-900">Sign in to Gator</h1>
            <p className="mt-2 text-sm text-stone-600">{subtitle}</p>
          </div>

          {phase === 'success' ? (
            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium text-stone-900">You&apos;re signed in</p>
                {signedInEmail ? <p className="mt-1 text-sm text-stone-600">{signedInEmail}</p> : null}
              </div>
              {wantsExtensionHandoff ? (
                <p className="text-sm text-stone-600">
                  Your session was sent to the Gator extension. You can close this tab and return to the side panel.
                </p>
              ) : checkoutPlan ? (
                <div className="space-y-3">
                  <p className="text-sm text-stone-600">
                    Redirecting you to Stripe checkout with <strong>{signedInEmail}</strong> pre-filled…
                  </p>
                  <PixelButton type="button" onClick={redirectToAppCheckout} className="w-full">
                    Continue to checkout
                  </PixelButton>
                </div>
              ) : (
                <p className="text-sm text-stone-600">You can close this tab or continue browsing askgator.app.</p>
              )}
            </div>
          ) : (
            <>
              <PixelButton
                type="button"
                onClick={handleGoogleSignIn}
                disabled={phase === 'loading' || phase === 'signing-in' || phase === 'handoff'}
                className="flex w-full items-center justify-center gap-3"
              >
                {phase === 'loading' || phase === 'signing-in' || phase === 'handoff' ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <GoogleMark />
                )}
                <span>
                  {phase === 'loading'
                    ? 'Loading...'
                    : phase === 'handoff'
                    ? 'Connecting extension...'
                    : phase === 'signing-in'
                      ? 'Signing in...'
                      : 'Continue with Google'}
                </span>
              </PixelButton>

              {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}

              {wantsExtensionHandoff ? (
                <p className="mt-4 text-xs text-stone-500">
                  This page sends your Firebase session to extension ID{' '}
                  <code className="rounded bg-stone-100 px-1 py-0.5">{extensionId}</code> after sign-in.
                </p>
              ) : null}
            </>
          )}
        </div>
      </section>
    </>
  )
}
