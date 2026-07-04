type ExtensionAuthPayload = {
  extensionId: string
  token: string
  email?: string | null
  uid: string
  expiresIn?: number
}

type ExtensionAuthResponse = {
  ok?: boolean
  error?: string
}

type ChromeRuntime = {
  sendMessage: (
    extensionId: string,
    message: Record<string, unknown>,
    callback: (response?: ExtensionAuthResponse) => void,
  ) => void
  lastError?: { message?: string }
}

function getChromeRuntime(): ChromeRuntime | undefined {
  if (typeof window === 'undefined') return undefined
  return (window as Window & { chrome?: { runtime?: ChromeRuntime } }).chrome?.runtime
}

export async function sendAuthSessionToExtension(payload: ExtensionAuthPayload) {
  const runtime = getChromeRuntime()
  if (!runtime?.sendMessage) {
    return {
      ok: false as const,
      error: 'Chrome extension API unavailable. Install the Gator extension and try again.',
    }
  }

  return new Promise<{ ok: true } | { ok: false; error: string }>((resolve) => {
    runtime.sendMessage(
      payload.extensionId,
      {
        type: 'GATOR_AUTH_SESSION',
        token: payload.token,
        email: payload.email ?? undefined,
        uid: payload.uid,
        expires_in: payload.expiresIn ?? 3600,
      },
      (response) => {
        const lastError = runtime.lastError?.message
        if (lastError) {
          resolve({ ok: false, error: lastError })
          return
        }
        if (response?.ok) {
          resolve({ ok: true })
          return
        }
        resolve({
          ok: false,
          error: response?.error || 'Extension did not accept the session.',
        })
      },
    )
  })
}
