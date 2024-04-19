import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Rethink_Sans } from "next/font/google"
import { Libre_Franklin } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
const inter = Inter({ subsets: ["latin"] })
/* const rethink_sans = Rethink_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rethink_sans",
})
const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre_franklin",
}) */

export const metadata: Metadata = {
  title: "Risk Horizon",
  description: "Risk Horizon asbl",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="px-4 lg:px-6 h-16 flex items-center bg-[#111827]">
          <Link className="flex items-center justify-center" href="/">
            <Image alt="Logo" height="250" src="/logo_line_white.png" width="300" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-white cursor-pointer" href="/">
              Accueil
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-white cursor-pointer"
              href="/Missions"
            >
              Missions
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-white cursor-pointer" href="#">
              About
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-white cursor-pointer" href="#">
              Contact
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
