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
import { Card } from '../ui/card'

export default function MenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="flex justify-center items-center"
        >
          <HiMenuAlt3 className="w-7 h-7 text-gray-600 hover:text-primary dark:text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="py-9">
          <div className="space-y-6">
            {navigation.desktop.navbar.menus.map((navMenu) => (
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
                      <Card className="my-2">
                        <p className="w-full text-lg">{navLink.name}</p>
                        <p className="text-muted-foreground text-sm">
                          {navLink.description}
                        </p>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-2 mt-9">
            {navigation.desktop.navbar.links.map((navLink) => (
              <div key={navLink.name}>
                <Link key={navLink.name} href={navLink.href} className="w-full">
                  <Card className="bg-primary/10">
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
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
