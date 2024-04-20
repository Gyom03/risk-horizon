import React from "react"
import Image from "next/image"
import Link from "next/link"

function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-[#111827]">
      <Link className="flex items-center justify-center" href="/">
        <Image alt="Risk Horizon logo" height="250" src="/logo_line_white.png" width="300" />
        <span className="sr-only">Risk Horizon asbl</span>
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
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-white cursor-pointer"
          href="/A-propos"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-white cursor-pointer"
          href="/Contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
