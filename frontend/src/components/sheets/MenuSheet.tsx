'use client'

import { HiMenuAlt3 } from 'react-icons/hi'

import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetClose,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button, buttonVariants } from '@/components/ui/button'
import navigation from '@/data/navigation.json'
import Link from 'next/link'
import Image from 'next/image'
import { Card } from '../ui/card'
import { useAuthContext } from '@/state/context/AuthContext'
import { useOpenSheetContext } from '@/components/context/navbar/OpenSheetContext'
import AnimatedLink from '@/components/animated/AnimatedLink'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function MenuSheet() {
  const { auth } = useAuthContext()
  const [openSheet, setOpenSheet] = useOpenSheetContext()

  const handleOpenChange = (open: boolean) => {
    if (open === true) setOpenSheet('nav')
    else setOpenSheet(null)
  }

  return (
    <Sheet open={openSheet === 'nav'} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="flex justify-center items-center"
        >
          <HiMenuAlt3 className="w-7 h-7" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Image
              className="mx-auto"
              src="/logo-small.svg"
              alt="RM8s"
              width={48}
              height={48}
              draggable={false}
            />
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="relative flex-grow overflow-scroll p-6">
          <div className="space-y-6">
            {navigation.desktop.navbar.menus.map((navMenu) => {
              if (!navMenu.auth || (auth && navMenu.auth)) {
                return (
                  <div className="space-y-2" key={navMenu.name}>
                    <p className="font-semibold text-xl text-primary">
                      {navMenu.name}
                    </p>
                    <div className="space-y-6">
                      {navMenu.links.map((navLink) => (
                        <Link
                          key={navLink.name}
                          href={navLink.href}
                          className="w-full"
                        >
                          <Card variant="flat" className="my-2">
                            <p className="w-full text-lg">{navLink.name}</p>
                            <p className="text-muted-foreground text-sm">
                              {navLink.description}
                            </p>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }
            })}
          </div>
          <div className="space-y-2 mt-9">
            {navigation.desktop.navbar.links.map((navLink) => (
              <div key={navLink.name}>
                <Link key={navLink.name} href={navLink.href} className="w-full">
                  <Card variant="flat" className="bg-primary/10">
                    <div>
                      <p className="w-full text-lg font-semibold text-primary">
                        {navLink.name}
                      </p>
                      <p className="w-full text-sm text-muted-foreground">
                        {navLink.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <SheetFooter>
          <div className="space-y-2 w-full">
            <Link
              href="/signup"
              className={cn(
                'w-full',
                buttonVariants({ size: 'lg', variant: 'secondary' })
              )}
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className={cn(
                'w-full',
                buttonVariants({ size: 'lg', variant: 'default' })
              )}
            >
              Login
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
