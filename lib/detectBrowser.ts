export type ExtensionBrowser = 'chrome' | 'firefox' | 'safari'

export function detectExtensionBrowser(userAgent = ''): ExtensionBrowser {
  const ua = userAgent.toLowerCase()

  if (/firefox|fxios/.test(ua)) {
    return 'firefox'
  }

  // Safari must be checked before Chrome — Chromium browsers include "safari" in UA.
  if (/safari/.test(ua) && !/chrome|chromium|crios|crmo|edg|opr|brave/.test(ua)) {
    return 'safari'
  }

  return 'chrome'
}
