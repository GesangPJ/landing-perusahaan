// header aplikasi

import Link from "next/link"

import { DesktopNav } from "./desktop-nav"
import { MobileNav } from "./mobile-nav"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4">
        <div className="lg:hidden">
          <MobileNav />
        </div>

        <Link
          href="/"
          className="mr-6 text-lg font-semibold tracking-tight"
        >
         Perusahaan
        </Link>

        {/* Desktop navigation */}
        <DesktopNav />
      </div>
    </header>
  )
}