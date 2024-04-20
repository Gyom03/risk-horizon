import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Rethink_Sans } from "next/font/google"
import { Libre_Franklin } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
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
  icons: ["logo_mono.png"],
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: "https://risk-horizon.be",
    images: [
      {
        url: "https://risk-horizon.be/logo_mono.png",
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
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
