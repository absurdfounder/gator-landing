'use client'

import { usePathname } from 'next/navigation'
import Footer from "@/components/ui/footer"
import Newsletter from "@/components/newsletter"

const CATALOG_PATH_PREFIXES = ['/plugin', '/integration', '/loops', '/download', '/skill']

function isCatalogPage(pathname: string) {
  return CATALOG_PATH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  )
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {  
  const pathname = usePathname()
  const hideChrome =
    pathname === '/wonder-auth' ||
    pathname === '/login' ||
    pathname === '/logout' ||
    pathname === '/billing' ||
    isCatalogPage(pathname)
  const hideNewsletter = hideChrome
  
  return (
    <>
      <main className={`grow ${hideChrome ? 'bg-[#0b0d0b]' : 'bg-gray-50'}`}>
        {children}
      </main>
      {!hideNewsletter && <Newsletter />}
      {!hideChrome && <Footer />}
    </>
  )
}