import Image from 'next/image'
import { ThemeToggle } from '@/components/ThemeToggle'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import NavLinks from '@/components/nav/NavLinks'
import { HiMenuAlt3 } from 'react-icons/hi'

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
            <Link
              href="/login"
              className={buttonVariants({ variant: 'secondary' })}
            >
              Login
            </Link>
            <Link href="/signup" className={buttonVariants({})}>
              Get Started
            </Link>
            <ThemeToggle />
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="flex justify-center items-center md:hidden"
        >
          <HiMenuAlt3 className="w-7 h-7 text-gray-600 hover:text-primary dark:text-white" />
        </Button>
      </div>
    </nav>
  )
}
