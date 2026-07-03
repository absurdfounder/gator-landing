const iconSrc = '/images/gator-icon.png'
const logoSrc = '/images/gator-logo.png'

type GatorLogoProps = {
  className?: string
  variant?: 'icon' | 'full'
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
  const content =
    variant === 'full' ? (
      <img
        src={logoSrc}
        alt="gator"
        width={280}
        height={80}
        className={`h-8 w-auto sm:h-9 object-contain object-left ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    ) : (
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

  if (asLink) {
    return (
      <a href="/" className="shrink-0" aria-label="gator">
        {content}
      </a>
    )
  }

  return content
}
