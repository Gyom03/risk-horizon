"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import NavbarContent from "./navbarContent"
import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from "react"
import { Menu } from "lucide-react"
import { useEffect } from "react"
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const path = usePathname()
  if (path === "/hacked") return null

const navigation = [
  { name: 'Accueil', href: '/', current: false },
  { name: 'Découvrir Risk Horizon', href: '/Missions', current: false },
  { name: 'À propos de nous', href: '/A-propos', current: false },
  { name: 'Contact', href: '/Contact', current: false },
  { name: 'Salon OSI 2024', href: '/OSI', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


  useEffect(() => {
    navigation.map((item) => {
      if (window.location.pathname === item.href) {
        item.current = true;
      } else {
        item.current = false;
      }
    })
  }
  , [navigation])

  const classname = isMenuOpen ? "flex" : "hidden"
  return (
    <header className="px-4 pb-4 md:pb-0 lg:px-6 md:h-16 flex items-center bg-riskbg flex-col md:flex-row">
      <div className="mt-3  md:mt-0 flex items-center justify-center max-w-[300px]">
        <Disclosure as="nav" className="bg-gray-800 absolute top-0 w-full z-1">
        {({ open }: { open: boolean }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button 
                  className=" absolute 
                              inline-flex 
                              items-center 
                              justify-center 
                              rounded-md 
                              p-2 
                              text-gray-400 
                              hover:bg-gray-700 
                              hover:text-white 
                              focus:outline-none 
                              focus:ring-2 
                              focus:ring-inset 
                              focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    alt="Risk Horizon logo"
                    height="250"
                    src="/logo_line_white.png"
                    width="300"
                    className="w-[220px] md:w-[300px]"
                  />
                  <p className="text-white ml-2">
                    Risk Horizon asbl
                  </p>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 absolute">
                    {navigation.map((item) => (
                      <a
                        key={item.name}  
                        href={item.href}
                        className={
                          classNames(
                            item.current ? 
                            'bg-gray-900 text-white' 
                            : 
                            'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium')}
                        aria-current={item.current ? 'page' : undefined}>
                          {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
      </Disclosure>
      </div>
      {/* <nav className="w-full ">
        <NavbarContent className=" hidden md:flex md:ml-auto  justify-end gap-4 sm:gap-6 flex-col md:flex-row mt-6 md:mt-0 items-center md:items-start mb-4 md:mb-0" />

        <NavbarContent
          className={
            classname +
            "   md:hidden md:ml-auto  justify-end gap-4 sm:gap-6 flex-col md:flex-row mt-6 md:mt-0 items-center md:items-start mb-4 md:mb-0"
          }
        />
      </nav> */}
    </header>
  )
}

export default Navbar
