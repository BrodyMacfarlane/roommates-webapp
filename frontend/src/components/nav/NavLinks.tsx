'use client'

import navigation from '@/data/navigation.json'
import Link from 'next/link'

import { FaTools } from 'react-icons/fa'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
  navigationMenuContentTriggerStyle,
} from '@/components/ui/navigation-menu'

type NavLink = {
  name: string
  href: string
}

type NavMenu = {
  name: string
  links: NavMenuLink[]
}

type NavMenuLink = {
  name: string
  description: string
  href: string
}

export default function NavLinks() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigation.navbar.menus.map((navMenu: NavMenu) => (
          <NavigationMenuItem key={navMenu.name}>
            <NavigationMenuTrigger>{navMenu.name}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-2">
                <div className="flex gap-2">
                  <div className="rounded-lg bg-gradient-to-br from-roommates-purple to-roommates-blue min-w-[120px] px-4 py-6 text-white text-3xl flex justify-center items-center">
                    <FaTools />
                  </div>
                  <div className="h-full w-full">
                    {navMenu.links.map((navMenuLink) => (
                      <Link
                        className="w-full"
                        key={navMenuLink.name}
                        href={navMenuLink.href}
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={navigationMenuContentTriggerStyle()}
                        >
                          <div className="w-full max-w-xs">
                            <p className="text-base font-medium text-foreground">
                              {navMenuLink.name}
                            </p>
                            <p className="text-sm font-normal text-muted-foreground">
                              {navMenuLink.description}
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        {navigation.navbar.links.map((navLink: NavLink) => (
          <NavigationMenuItem key={navLink.name}>
            <Link href={navLink.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {navLink.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
