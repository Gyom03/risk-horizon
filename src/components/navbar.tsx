"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import NavbarContent from "./navbarContent"
import { useState } from "react"
import { Menu } from "lucide-react"
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const path = usePathname()
  if (path === "/hacked") return null

  const classname = isMenuOpen ? "flex" : "hidden"
  return (
    <header className="px-4 pb-4 md:pb-0 lg:px-6 md:h-16 flex items-center bg-riskbg flex-col md:flex-row">
      <Link className="mt-3 mx-20 md:mt-0 flex items-center justify-center max-w-[300px]" href="/">
        <Image
          alt="Risk Horizon logo"
          height="250"
          src="/logo_line_white.png"
          width="300"
          className="w-[220px] md:w-[300px]"
        />
        <span className="sr-only">Risk Horizon asbl</span>
        <button
          className="md:hidden absolute items-center justify-center right-5 "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={30} color="white" />
        </button>
      </Link>
      <nav className="w-full ">
        <NavbarContent className=" hidden md:flex md:ml-auto  justify-end gap-4 sm:gap-6 flex-col md:flex-row mt-6 md:mt-0 items-center md:items-start mb-4 md:mb-0" />

        <NavbarContent
          className={
            classname +
            "   md:hidden md:ml-auto  justify-end gap-4 sm:gap-6 flex-col md:flex-row mt-6 md:mt-0 items-center md:items-start mb-4 md:mb-0"
          }
        />
      </nav>
    </header>
  )
}

export default Navbar
