import { Geist, Geist_Mono, Noto_Sans, Nunito_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { AppHeader } from "@/components/layout/app-header"
import { AppFooter } from "@/components/layout/footer"

const nunitoSansHeading = Nunito_Sans({subsets:['latin'],variable:'--font-heading'})

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", notoSans.variable, nunitoSansHeading.variable)}
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <AppHeader/>
          <main className="flex-1">
            {children}
          </main>
          <AppFooter/>
        </ThemeProvider>
      </body>
    </html>
  )
}
