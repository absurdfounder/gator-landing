const iconSrc = '/images/gator-icon.png'
const logoSrc = '/images/gator-logo.png'

type GatorLogoProps = {
  className?: string
  variant?: 'icon' | 'full' | 'wordmark'
  iconClassName?: string
  asLink?: boolean
  priority?: boolean
  theme?: 'light' | 'dark'
}

export default function GatorLogo({
  className = '',
  variant = 'full',
  iconClassName = 'h-9 w-9 sm:h-10 sm:w-10',
  asLink = false,
  priority = false,
  theme = 'light',
}: GatorLogoProps) {
  let content: React.ReactNode

  if (variant === 'wordmark') {
    content = (
      <span className={`inline-flex items-center gap-2.5 ${className}`}>
        <img
          src={iconSrc}
          alt=""
          width={512}
          height={512}
          className={`object-contain ${iconClassName}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          aria-hidden
        />
        <span className="font-display text-xl font-bold lowercase tracking-tight text-gator sm:text-2xl">
          gator
        </span>
      </span>
    )
  } else if (variant === 'full' && theme === 'dark') {
    content = (
      <img
        src={logoSrc}
        alt="gator"
        width={280}
        height={80}
        className={`h-8 w-auto sm:h-9 object-contain object-left ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    )
  } else if (variant === 'full' && theme === 'light') {
    content = (
      <span className={`inline-flex items-center gap-2.5 ${className}`}>
        <img
          src={iconSrc}
          alt=""
          width={512}
          height={512}
          className="h-8 w-8 object-contain sm:h-9 sm:w-9"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          aria-hidden
        />
        <span className="font-display text-xl font-bold lowercase tracking-tight text-gator sm:text-2xl">
          gator
        </span>
      </span>
    )
  } else if (variant === 'full') {
    content = (
      <img
        src={logoSrc}
        alt="gator"
        width={280}
        height={80}
        className={`h-8 w-auto sm:h-9 object-contain object-left ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    )
  } else {
    content = (
      <img
        src={iconSrc}
        alt=""
        width={512}
        height={512}
        className={`object-contain ${iconClassName} ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        aria-hidden
      />
    )
  }

  if (asLink) {
    return (
      <a href="/" className="shrink-0" aria-label="gator">
        {content}
      </a>
    )
  }

  return content
}
