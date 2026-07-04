'use client';

import React from 'react';
import Link from 'next/link';

type Variant = 'solid' | 'outline';
type Tone = 'brand' | 'dark' | 'light';
type Size = 'sm' | 'md' | 'lg';

interface BasePropsCommon {
  children: React.ReactNode;
  variant?: Variant;
  tone?: Tone;
  size?: Size;
  icon?: React.ReactNode;
  ariaLabel?: string;
  className?: string;
  labelClassName?: string;
  disabled?: boolean;
}

type AnchorRest = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href' | 'className' | 'aria-label' | 'children'
>;

type ButtonRest = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'className' | 'aria-label' | 'children' | 'disabled' | 'onClick'
>;

interface AnchorProps extends BasePropsCommon, AnchorRest {
  href: string;
  external?: boolean;
  type?: never;
}

interface ButtonProps extends BasePropsCommon, ButtonRest {
  href?: undefined;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

type PixelButtonProps = AnchorProps | ButtonProps;

const SIZE_STYLES: Record<Size, string> = {
  sm: 'min-h-[36px] rounded-lg px-3.5 py-2 text-sm',
  md: 'min-h-[40px] rounded-xl px-4 py-2.5 text-sm',
  lg: 'min-h-[44px] rounded-xl px-5 py-3 text-[15px]',
};

function resolveAppearance(variant: Variant, tone: Tone) {
  if (variant === 'solid' && tone === 'brand') {
    return 'border border-fern bg-fern text-white shadow-sm hover:border-fern-dark hover:bg-fern-dark active:bg-fern-800';
  }
  if (variant === 'solid' && tone === 'dark') {
    return 'border border-neutral-950 bg-neutral-950 text-white shadow-sm hover:border-neutral-900 hover:bg-neutral-900 active:bg-neutral-800';
  }
  if (variant === 'solid' && tone === 'light') {
    return 'border border-slate-200 bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-200 active:bg-slate-300';
  }
  if (variant === 'outline' && tone === 'dark') {
    return 'border border-slate-200 bg-white text-slate-900 shadow-sm hover:border-slate-300 hover:bg-slate-50 active:bg-slate-100';
  }
  if (variant === 'outline' && tone === 'brand') {
    return 'border border-fern/30 bg-white text-fern shadow-sm hover:border-fern/50 hover:bg-fern-50 active:bg-fern-100';
  }
  return 'border border-slate-200 bg-white text-slate-900 shadow-sm hover:border-slate-300 hover:bg-slate-50 active:bg-slate-100';
}

function buildClassName({
  variant,
  tone,
  size,
  className,
  labelClassName,
  disabled,
}: {
  variant: Variant;
  tone: Tone;
  size: Size;
  className?: string;
  labelClassName?: string;
  disabled?: boolean;
}) {
  const wantsFullWidth = className?.includes('w-full');

  return [
    'inline-flex items-center justify-center gap-2 font-sans font-semibold leading-none transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
    SIZE_STYLES[size],
    resolveAppearance(variant, tone),
    wantsFullWidth ? 'w-full' : 'w-fit',
    disabled ? 'pointer-events-none opacity-60' : '',
    className,
    labelClassName,
  ]
    .filter(Boolean)
    .join(' ');
}

export default function PixelButton(props: PixelButtonProps) {
  const {
    children,
    variant = 'solid',
    tone = 'brand',
    size = 'md',
    icon,
    ariaLabel,
    className,
    labelClassName,
    disabled,
  } = props;

  const combinedClassName = buildClassName({
    variant,
    tone,
    size,
    className,
    labelClassName,
    disabled,
  });

  const content = (
    <>
      <span>{children}</span>
      {icon ? <span className="inline-flex shrink-0 items-center">{icon}</span> : null}
    </>
  );

  if ('href' in props && props.href) {
    const {
      href,
      external,
      children: _c,
      variant: _v,
      tone: _t,
      size: _s,
      icon: _i,
      ariaLabel: _a,
      className: _cn,
      labelClassName: _lcn,
      disabled: _d,
      ...rest
    } = props as AnchorProps;

    const isExternal = external || href.startsWith('http');

    if (disabled) {
      return (
        <span role="link" aria-disabled="true" aria-label={ariaLabel} className={combinedClassName}>
          {content}
        </span>
      );
    }

    if (isExternal) {
      return (
        <a
          {...rest}
          href={href}
          target={rest.target ?? '_blank'}
          rel={rest.rel ?? 'noopener noreferrer'}
          aria-label={ariaLabel}
          className={combinedClassName}
        >
          {content}
        </a>
      );
    }

    return (
      <Link {...rest} href={href} aria-label={ariaLabel} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  const {
    type,
    onClick,
    children: _c,
    variant: _v,
    tone: _t,
    size: _s,
    icon: _i,
    ariaLabel: _a,
    className: _cn,
    labelClassName: _lcn,
    disabled: _d,
    ...rest
  } = props as ButtonProps;

  return (
    <button
      {...rest}
      type={type ?? 'button'}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {content}
    </button>
  );
}
