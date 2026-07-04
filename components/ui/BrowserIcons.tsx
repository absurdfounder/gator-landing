type IconProps = {
  className?: string
}

export function ChromeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#fff" />
      <path
        fill="#DB4437"
        d="M24 4c10.2 0 18.8 6.5 22 15.5H24a9.5 9.5 0 0 0-8.1 14.5l-7.5-13A22 22 0 0 1 24 4Z"
      />
      <path
        fill="#0F9D58"
        d="M8.4 30.5 16 17a9.5 9.5 0 0 0 16 0l7.6 13.5A22 22 0 0 1 24 44 22 22 0 0 1 8.4 30.5Z"
      />
      <path
        fill="#FFCD40"
        d="M24 4c5.9 0 11.2 2.6 14.8 6.7L31.2 24.3A9.5 9.5 0 0 0 24 19.5c-3.4 0-6.4 1.8-8.1 4.5L8.4 30.5A22 22 0 0 1 24 4Z"
      />
      <circle cx="24" cy="24" r="9" fill="#4285F4" />
      <circle cx="24" cy="24" r="6.5" fill="#fff" />
    </svg>
  )
}

export function FirefoxIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#fff" />
      <path
        fill="#FF7139"
        d="M24 6c8.8 0 16.4 5.4 19.5 13-3.4-1.2-7.2-.4-9.8 2.2-2.8 2.8-3.6 6.9-2.4 10.4 1.2 3.3 4.2 5.8 7.7 6.4-2.1 4.8-6.9 8-12.5 8-7.7 0-14-6.3-14-14 0-5.2 2.8-9.7 7-12.2C20.2 7.2 22 6 24 6Z"
      />
      <path
        fill="#FF9500"
        d="M35.8 19.2c.8 2.1 1.2 4.3 1.2 6.6 0 7.7-6.3 14-14 14-3.8 0-7.2-1.5-9.7-3.9 5.2.3 9.8-3.1 11.1-8.1 1.1-4.2-.5-8.6-3.8-11.1 2.1-.9 4.4-1.3 6.8-1.1 3.3.3 6.2 1.6 8.4 3.6Z"
      />
      <circle cx="24" cy="24" r="10" fill="#0060DF" />
      <circle cx="24" cy="24" r="7" fill="#00C2FF" opacity="0.55" />
    </svg>
  )
}

export function SafariIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#fff" />
      <circle cx="24" cy="24" r="18" fill="#0A84FF" />
      <circle cx="24" cy="24" r="15" fill="#fff" />
      <path fill="#FF3B30" d="M24 11 31 33 24 28 17 33Z" />
      <path fill="#fff" d="M24 11v17l7 5-7-22Z" opacity="0.35" />
      <circle cx="24" cy="24" r="1.5" fill="#1C1C1E" />
    </svg>
  )
}

export function EdgeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#fff" />
      <path
        fill="#0078D4"
        d="M24 6c9.9 0 18.2 6.3 21.3 15.1-3.2-.9-6.6-.3-9.2 1.8-3.1 2.4-4.8 6.2-4.8 10.4 0 2.2.6 4.2 1.7 6-3.4 2.6-7.6 4.1-12.1 4.1C9.6 37.4 4 31.8 4 24.9 4 14.4 12.8 6 24 6Z"
      />
      <path
        fill="#50E6FF"
        d="M42.8 23.3c.1.5.2 1 .2 1.6 0 7.4-5.4 13.5-12.5 14.6 4.8-1.2 8.4-5.5 8.4-10.7 0-2.4-.8-4.6-2.1-6.4 1.9-.9 3.4-2.4 4.4-4.2 1.2 1.6 1.9 3.5 1.6 5.1Z"
      />
      <path
        fill="#00A4EF"
        d="M24 14c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10Z"
      />
    </svg>
  )
}

export function BraveIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#fff" />
      <path
        fill="#FB542B"
        d="M24 8 34 14v10l-4 12-6 4-6-4-4-12V14Z"
      />
      <path fill="#fff" d="M24 16 28 20v6l-2 6-2 2-2-2-2-6v-6Z" opacity="0.9" />
    </svg>
  )
}
