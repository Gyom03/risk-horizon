import React from "react"
import Link from "next/link"
interface NavbarContentProps {
  className?: string
}
function NavbarContent({ className }: NavbarContentProps) {
  return (
    <div className={className}>
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
    </div>
  )
}

export default NavbarContent
