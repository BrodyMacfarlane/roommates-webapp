import Image from 'next/image'
import { ThemeToggle } from '@/components/ThemeToggle'
import Link from 'next/link'
import AnimatedLink from '@/components/animated/AnimatedLink'
import { Button, buttonVariants } from '@/components/animated/button'
import { cn } from '@/lib/utils'
import NavLinks from '@/components/nav/NavLinks'
import { HiMenuAlt3 } from 'react-icons/hi'
import MenuSheet from '@/components/sheets/MenuSheet'
import NavButtons from '@/components/nav/NavButtons'
import AccountSheet from './sheets/AccountSheet'

export default function Navbar() {
  return (
    <nav className="fixed z-50 top-0 left-0 w-full flex justify-center items-center shadow-md border-b border-border bg-background">
      <div className="py-4 flex gap-4 container items-center justify-between">
        <div className="flex items-center gap-9">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="RM8s"
              width={108}
              height={64}
              draggable={false}
            />
          </Link>
          <div className="hidden md:flex items-center gap-2">
            <NavLinks />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4">
            <NavButtons />
            <ThemeToggle />
          </div>
        </div>
        <div className="flex gap-4 md:hidden">
          <AccountSheet />
          <MenuSheet />
        </div>
      </div>
    </nav>
  )
}
