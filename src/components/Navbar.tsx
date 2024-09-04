'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
  useUser
} from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from './ui/button'
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet'
import { Menu } from 'lucide-react'

const navigation = [
  { name: 'Accueil', href: '/', current: false, private: false },
  { name: 'À propos', href: '/about', current: false, private: false },
  { name: 'Contact', href: '/Contact', current: false, private: false },
  { name: 'OSI 2024', href: '/OSI', current: false, private: false },
  { name: 'Dashboard', href: '/dashboard', current: false, private: true }
]

function classNames (...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function Navbar () {
  const router = useRouter()

  // Get user from clerk
  const { user } = useUser()

  const [isOpen, setIsOpen] = useState(false)

  // Display bg of button when user is on the page
  useEffect(() => {
    navigation.map(item => {
      if (window.location.pathname === item.href) {
        setIsOpen(false)
        item.current = true
      } else {
        item.current = false
      }
    })
  }, [])

  const path = usePathname()
  if (path === '/hacked') return null
  // const classname = isMenuOpen ? "flex" : "hidden"
  return (
    <nav className='bg-riskbg h-16'>
      <div className=' mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <Image
              alt='Risk Horizon logo'
              src='/logo_line_white.png'
              width='250'
              height='150'
              className=' lg:w-[30vw]!important md:w-[15vw]!important h-auto cursor-pointer'
              onClick={() => router.push('/')}
            />
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-center space-x-4'>
              {/* {navItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-[#5f3494] text-white'
                      : 'text-white hover:bg-gray-700 hover:text-white',
                    'rounded-sm px-3 mr-1 py-2 text-[18px] text-nowrap font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))} */}

              {navigation.map(item =>
                // Verify if displayed for all users
                !item.private ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-[#5f3494] text-white'
                        : 'text-white hover:bg-gray-700 hover:text-white',
                      'rounded-sm px-3 mr-1 py-2 text-[18px] text-nowrap font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                    {/* {!item.private ? (item.name):(user ? item.name : '')} */}
                  </a>
                ) : user ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-[#5f3494] text-white'
                        : 'text-white hover:bg-gray-700 hover:text-white',
                      'rounded-sm px-3 mr-1 py-2 text-[18px] text-nowrap font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ) : null
              )}
              <div className='text-white w-max cursor-pointer rounded-md p-2 hover:bg-gray-700 flex border-2 items-center'>
                {/* SignedOut match to user disconnected */}
                <SignedOut>
                  <SignInButton forceRedirectUrl={'/dashboard/'}>
                    Se connecter
                  </SignInButton>
                </SignedOut>
                {/* SignIn match to user connected */}
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </div>
          <div className='md:hidden flex items-center'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant='outline' size='icon' className='md:hidden'>
                  <Menu className='h-6 w-6' />
                  <span className='sr-only'>Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='bg-riskbg'>
                <div className='flex flex-col space-y-4 mt-4'>
                  {/* {navItems.map(item => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-[#5f3494] text-white'
                          : 'text-white hover:bg-gray-700 hover:text-white',
                        'rounded-sm px-3 mr-1 py-2 text-[18px] text-nowrap font-medium'
                      )}
                      onClick={() => setIsOpen(false)}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))} */}
                  {navigation.map(item =>
                    !item.private ? (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-[#5f3494] text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-base font-medium flex justify-center'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ) : user ? (
                      <Link
                        key={item.name}
                        as='a'
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-[#5f3494] text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-base font-medium flex justify-center'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ) : null
                  )}
                  <div className='text-white w-full cursor-pointer hover:bg-gray-700 flex border-t-2 px-2 pt-1 flex-shrink-0 text-center justify-center'>
                    <SignedOut>
                      <SignInButton forceRedirectUrl={'/dashboard/'}>
                        Se connecter
                      </SignInButton>
                    </SignedOut>
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
