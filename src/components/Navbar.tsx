"use client"
import React, { useState } from "react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useEffect, useMemo } from "react"
import { SignedOut, SignInButton, SignedIn, UserButton, useUser } from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "./ui/button"
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet"
import { Menu } from "lucide-react"
const navigation = [
  { name: "Accueil", href: "/", current: false, private: false },
  { name: "Mission", href: "/Missions", current: false, private: false },
  { name: "À propos", href: "/about", current: false, private: false },
  { name: "Contact", href: "/Contact", current: false, private: false },
  { name: "OSI 2024", href: "/OSI", current: false, private: false },
  { name: "Dashboard", href: "/dashboard", current: false, private: true },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

function Navbar() {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Accueil", href: "/", current: false, private: false },
    { name: "À propos", href: "/about", current: false, private: false },
    { name: "Contact", href: "/Contact", current: false, private: false },
    { name: "OSI 2024", href: "/OSI", current: false, private: false },
  ]

  const path = usePathname()
  if (path === "/hacked") return null
  // const classname = isMenuOpen ? "flex" : "hidden"
  return (
    <nav className="bg-riskbg h-16">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Image
              alt="Risk Horizon logo"
              src="/logo_line_white.png"
              width="280"
              height="180"
              className="mr-5 lg:w-[30vw]!important md:w-[15vw]!important ml-6 md:ml-5 h-auto cursor-pointer"
              onClick={() => router.push("/")}
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:underline  px-3 mr-1 py-2 text-[18px] text-nowrap font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <div className="translate-y-[6px]">
                {/* SignedOut match to user disconnected */}
                <SignedOut>
                  <SignInButton forceRedirectUrl={"/dashboard/"}>Se connecter</SignInButton>
                </SignedOut>
                {/* SignIn match to user connected */}
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-riskbg">
                <div className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:underline  px-3 mr-1 py-2 text-[18px] text-nowrap font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="scale-150 translate-x-24  mt-14">
                    {/* SignedOut match to user disconnected */}
                    <SignedOut>
                      <SignInButton forceRedirectUrl={"/dashboard/"}>Se connecter</SignInButton>
                    </SignedOut>
                    {/* SignIn match to user connected */}
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
