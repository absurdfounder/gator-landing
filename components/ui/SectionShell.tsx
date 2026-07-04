import React from 'react';

interface SectionShellProps {
  id?: string;
  /** @deprecated Section labels removed — use in-content headlines instead */
  eyebrow?: string;
  /** @deprecated */
  eyebrowNumber?: string;
  className?: string;
  bgClass?: string;
  noBorder?: boolean;
  noBorderBottom?: boolean;
  /** First section below fixed site header — clears TopBar + nav overlap */
  clearSiteHeader?: boolean;
  children: React.ReactNode;
}

/** Standard landing-page section wrapper — content width + top spacing only. */
export default function SectionShell({
  id,
  className = '',
  bgClass = 'bg-canvas',
  clearSiteHeader = false,
  children,
}: SectionShellProps) {
  const sectionClasses = [
    'relative',
    bgClass || 'bg-canvas',
    clearSiteHeader ? 'site-header-clear' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const frameClasses = [
    'max-w-7xl mx-auto min-w-0 overflow-x-hidden',
    'px-4 sm:px-6',
    'pt-4 sm:pt-6 md:pt-8',
    bgClass || 'bg-canvas',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={sectionClasses}>
      <div className={frameClasses}>{children}</div>
    </section>
  );
}
