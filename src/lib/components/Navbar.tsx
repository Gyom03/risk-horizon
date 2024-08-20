"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useMemo } from "react"


const navigation = [
  { name: 'Accueil', href: '/', current: false },
  { name: 'Mission', href: '/missions', current: false },
  { name: 'À propos', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'OSI 2024', href: '/OSI', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  // J'ai pas compris le truc avec hacked ¯\_(ツ)_/¯
  // const path = usePathname();
  // if (path === "/hacked") return null;

const router = useRouter();

  useEffect(() => {
    navigation.map((item) => {
      if (window.location.pathname === item.href) {
        item.current = true;
      } else {
        item.current = false;
      }
    })
  }
  , [])


  // const classname = isMenuOpen ? "flex" : "hidden"
  return (
    <div className=" bg-riskbg  ">
     <Disclosure as="nav" className="bg-[#040437] absolute top-0 w-full z-1">
        {({ open }: { open: boolean }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton 
                  className=" absolute 
                              inline-flex 
                              items-center 
                              justify-center 
                              rounded-md 
                              p-2 
                              text-gray-400 
                              hover:bg-[#040437]
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
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    alt="Risk Horizon logo"
                    src="/logo_line_white.png"
                    width="220"
                    height="150"
                    className="w-[220px] h-auto cursor-pointer"
                    onClick={() =>  router.push('/')}
                  />
                </div>
                <div className="hidden w-full w-min-[90px] relative right-3 sm:ml-6 sm:block">
                  <div className="flex  absolute">
                    {navigation.map((item) => (
                      <a
                        key={item.name}  
                        href={item.href}
                        className={
                          classNames(
                            item.current ? 
                            'bg-[#5f3494] text-white' 
                            : 
                            'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 mr-1 py-2 text-[16px] text-nowrap font-medium')}
                        aria-current={item.current ? 'page' : undefined}>
                          {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2  pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-[#5f3494] text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium flex justify-center'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
      </Disclosure>
      {/* <nav className="w-full ">
        <NavbarContent className=" hidden md:flex md:ml-auto  justify-end gap-4 sm:gap-6 flex-col md:flex-row mt-6 md:mt-0 items-center md:items-start mb-4 md:mb-0" />

        <NavbarContent
          className={
            classname +
            "   md:hidden md:ml-auto  justify-end gap-4 sm:gap-6 flex-col md:flex-row mt-6 md:mt-0 items-center md:items-start mb-4 md:mb-0"
          }
        />
      </nav> */}
    </div>
  )
}

export default Navbar

