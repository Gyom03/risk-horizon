import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "$/lib/components/Navbar"
import Footer from "$/lib/components/footer"
import type { Viewport } from "next"
import GoogleCaptchaWrapper from "$/lib/components/google-captcha-wrapper"
import { QueryClient } from "@tanstack/react-query"
import Querywrapper from "$/lib/components/query-provider"
import { Toaster } from "sonner"
import { Analytics } from "@vercel/analytics/react"
import "$/lib/styles/globals.css"

import Script from "next/script"
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
  authors: [{ name: "Risk Horizon" }, { name: "Maxime Curon"}, { name: "Guillaume Richard" }, { name: "Guillaume Rosin" }],
  keywords: [
    "Cybersécurité",
    "Risk Horizon",
    "ASBL",
    "Security",
    "Data protection",
    "Protection des données",
    "Protection de la vie privée",
    "Privacy",
    "Privacy protection",
    "Cybersecurity",
    "Sécurité informatique",
    "Sécurité des données",
    "Data security",
    "Sécurité des réseaux",
    "Network security",
    "Sécurité des applications",
    "Application security",
    "Sécurité des logiciels", 
    "Software security",
    "Sécurité des systèmes d'information",
    "Information system security",
    "Sécurité des systèmes informatiques",
    "Sécurité des systèmes d'exploitation",
    "Operating system security",
    "Sécurité des systèmes embarqués",
    "Embedded system security",
    "Sécurité des systèmes industriels",
    "Industrial system security",
    "Sécurité des systèmes de contrôle",
    "Control system security",
    "Sécurité des systèmes de gestion",
    "Management system security",
    "Sécurité des systèmes de communication",
    "Communication system security",
    "Sécurité des systèmes de transport",
    "Transport system security",
    "Sécurité des systèmes",
    "System security",
    "Maxime Curon",
    "Guillaume Richard",
    "Guillaume Rosin",
    "Guillaume",
    "Richard",
    "Rosin",
    "Curon",
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
        url: "https://risk-horizon.be/opengraph-image2.png",
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
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4K7L0NDNK9"></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4K7L0NDNK9');`}
        </Script>
      </head>
      {/* <CSPostHogProvider> */}
      <link rel="canonical" href="https://risk-horizon.be/" key="canonical" />
<body>
  

        <Toaster richColors />
        <Querywrapper>
          <GoogleCaptchaWrapper>
            <Navbar />
              {children}
            <Footer />
          </GoogleCaptchaWrapper>
        </Querywrapper>
        <Analytics />
</body> 
    </html>
  )
}
