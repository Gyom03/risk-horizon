"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
function Navbar() {
  const path = usePathname()
  if (path === "/hacked") return null
  return (
    <header className="px-4 lg:px-6 md:h-16 flex items-center bg-riskbg flex-col md:flex-row">
      <Link className="mt-3 md:mt-0 flex items-center justify-center " href="/">
        <Image alt="Risk Horizon logo" height="250" src="/logo_line_white.png" width="300" />
        <span className="sr-only">Risk Horizon asbl</span>
      </Link>
      <nav className="md:ml-auto flex gap-4 sm:gap-6 flex-col md:flex-row mt-6 md:mt-0 items-center md:items-start mb-4 md:mb-0">
        <Link className="text-sm font-medium hover:underline underline-offset-4 text-white cursor-pointer" href="/">
          Accueil
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-white cursor-pointer"
          href="/Missions"
        >
          Missions
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-white cursor-pointer"
          href="/A-propos"
        >
          A propos
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-white cursor-pointer"
          href="/Contact"
        >
          Contact
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4 text-white cursor-pointer" href="/OSI">
          OSI 2024
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
