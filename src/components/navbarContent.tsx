import React from "react"
import Link from "next/link"

interface NavbarContentProps {
  className?: string
}
function NavbarContent({ className }: NavbarContentProps) {
  return (
    <div className={className + "flex"}>
      <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/">
        Accueil
      </Link>
      <Link
        className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        href="/Missions"
      >
        Missions
      </Link>
      <Link
        className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
        href="/A-propos"
      >
        A propos
      </Link>
      <Link
        className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
        href="/Contact"
      >
        Contact
      </Link>
      <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer" href="/OSI">
        OSI 2024
      </Link>
    </div>
  )
}

export default NavbarContent
