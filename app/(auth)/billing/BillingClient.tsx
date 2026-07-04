'use client'

import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, type User } from 'firebase/auth'
import { CheckCircle2, ExternalLink, Loader2 } from 'lucide-react'

import Header from '@/components/ui/header'
import PixelButton from '@/components/ui/PixelButton'
import { GATOR_BILLING_SETTINGS_URL, gatorCheckoutUrl } from '@/lib/gatorBrand'
import { getFirebaseAuth, isFirebaseConfigured } from '@/lib/firebase/client'
import { formatUsd, MARKETING_PLANS } from '@/lib/pricing'

type BillingPhase = 'loading' | 'idle' | 'signing-in' | 'ready' | 'error'

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

export default function BillingClient() {
  const searchParams = useSearchParams()
  const checkoutPlanParam = searchParams.get('plan')?.trim().toLowerCase() || ''
  const checkoutPlan =
    checkoutPlanParam === 'lifetime' || checkoutPlanParam === 'cloud' ? checkoutPlanParam : null

  const [phase, setPhase] = useState<BillingPhase>('loading')
  const [error, setError] = useState('')
  const [signedInEmail, setSignedInEmail] = useState('')

  const redirectToAppBilling = useCallback(() => {
    window.location.assign(GATOR_BILLING_SETTINGS_URL)
  }, [])

  const redirectToCheckout = useCallback(
    (plan: 'lifetime' | 'cloud') => {
      window.location.assign(gatorCheckoutUrl(plan))
    },
    [],
  )

  const handleSignedInUser = useCallback(
    (user: User) => {
      setSignedInEmail(user.email || '')
      if (checkoutPlan) {
        redirectToCheckout(checkoutPlan)
        return
      }
      setPhase('ready')
    },
    [checkoutPlan, redirectToCheckout],
  )

  useEffect(() => {
    let cancelled = false

    isFirebaseConfigured().then((configured) => {
      if (cancelled) return
      if (!configured) {
        setPhase('error')
        setError('Billing is temporarily unavailable. Firebase is not configured.')
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
      unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) return
        handleSignedInUser(user)
      })
    })

    return () => unsubscribe()
  }, [handleSignedInUser, phase])

  const handleGoogleSignIn = async () => {
    const configured = await isFirebaseConfigured()
    if (!configured) {
      setPhase('error')
      setError('Billing is temporarily unavailable. Firebase is not configured.')
      return
    }

    setError('')
    setPhase('signing-in')

    try {
      const auth = await getFirebaseAuth()
      const provider = new GoogleAuthProvider()
      provider.setCustomParameters({ prompt: 'select_account' })
      const result = await signInWithPopup(auth, provider)
      handleSignedInUser(result.user)
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

  const paidPlans = MARKETING_PLANS.filter((plan) => plan.id !== 'lite')

  return (
    <>
      <Header />
      <section className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-3xl flex-col justify-center px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">Billing</p>
            <h1 className="mt-2 text-2xl font-semibold text-stone-900">Manage your Gator plan</h1>
            <p className="mt-2 text-sm text-stone-600">
              Sign in with Google to manage billing, upgrade plans, or open the Gator app billing portal.
            </p>
          </div>

          {phase === 'ready' ? (
            <div className="space-y-6">
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <p className="font-medium text-stone-900">Signed in as {signedInEmail}</p>
                <p className="mt-1 text-sm text-stone-600">
                  Open the Gator app to manage your subscription, invoices, and payment method.
                </p>
              </div>

              <PixelButton
                type="button"
                onClick={redirectToAppBilling}
                className="flex w-full items-center justify-center gap-2"
              >
                Open billing in Gator app
                <ExternalLink className="h-4 w-4" />
              </PixelButton>

              <div className="grid gap-3 sm:grid-cols-2">
                {paidPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className="rounded-xl border border-stone-200 p-4 text-left"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
                      {plan.badge}
                    </p>
                    <h2 className="mt-1 text-lg font-semibold text-stone-900">{plan.title}</h2>
                    <p className="mt-1 text-sm text-stone-600">
                      {formatUsd(plan.price)}
                      {plan.cadence ? ` ${plan.cadence}` : ''}
                    </p>
                    <PixelButton
                      type="button"
                      onClick={() => redirectToCheckout(plan.id as 'lifetime' | 'cloud')}
                      className="mt-4 w-full"
                      variant={plan.featured ? 'solid' : 'outline'}
                      tone={plan.featured ? 'brand' : 'dark'}
                    >
                      {plan.cta}
                    </PixelButton>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <PixelButton
                type="button"
                onClick={handleGoogleSignIn}
                disabled={phase === 'loading' || phase === 'signing-in'}
                className="flex w-full items-center justify-center gap-3"
              >
                {phase === 'loading' || phase === 'signing-in' ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <GoogleMark />
                )}
                <span>
                  {phase === 'loading'
                    ? 'Loading...'
                    : phase === 'signing-in'
                      ? 'Signing in...'
                      : 'Continue with Google'}
                </span>
              </PixelButton>

              {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}

              {checkoutPlan ? (
                <p className="mt-4 text-xs text-stone-500">
                  After sign-in you&apos;ll continue to secure checkout for Gator{' '}
                  {checkoutPlan === 'lifetime' ? 'Lifetime' : 'Cloud'}.
                </p>
              ) : null}
            </>
          )}
        </div>
      </section>
    </>
  )
}
