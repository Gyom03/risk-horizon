import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Rethink_Sans } from "next/font/google"
import { Libre_Franklin } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Viewport } from "next"
import GoogleCaptchaWrapper from "@/components/google-captcha-wrapper"
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Querywrapper from "@/components/query-provider"
import { Toaster, toast } from 'sonner'

const queryClient = new QueryClient()

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
}
export const metadata: Metadata = {
  title: "Risk Horizon ASBL - Cybersécurité",
  description:
    "Risk Horizon ASBL est une association à but non lucratif qui vise à promouvoir la cybersécurité et la protection des données en ligne.",
  authors: [{ name: "Risk Horizon" }, { name: "Guillaume Richard" }, { name: "Guillaume Rosin" }],
  keywords: [
    "Cybersécurité",
    "Risk Horizon",
    "ASBL",
    "Security",
    "Data protection",
    "Protection en ligne",
    "Guillaume Richard",
    "Guillaume Rosin",
    "Guillaume",
    "Richard",
    "Rosin",
  ],
  creator: "Risk Horizon",
  publisher: "Risk Horizon",
  icons: ["favicon.ico"],
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: "https://risk-horizon.be",
    images: [
      {
        url: "https://risk-horizon.be/favicon.ico",
        width: 800,
        height: 600,
        alt: "Risk Horizon logo",
      },
    ],
  },
  metadataBase: new URL("https://risk-horizon.be"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <link rel="canonical" href="https://risk-horizon.be/" key="canonical" />
      <body className={inter.className}>
        <Toaster richColors />
        <Querywrapper>
          <GoogleCaptchaWrapper>
            <Navbar />
            {children}
            <Footer />
          </GoogleCaptchaWrapper>
        </Querywrapper>
      </body>
    </html>
  )
}
