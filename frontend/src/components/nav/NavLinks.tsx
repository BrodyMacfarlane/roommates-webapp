import navigation from '@/data/navigation.json'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

type NavLink = {
  name: string
  href: string
}

type NavMenu = {
  name: string
}

export default function NavLinks() {
  ;<NavigationMenu>
    <NavigationMenuList>
      {navigation.navbar.menus.map((navMenu: NavMenu) => (
        <NavigationMenuItem key={navMenu.name}>
          <NavigationMenuTrigger>{navMenu.name}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      ))}
      {navigation.navbar.links.map((navLink: NavLink) => (
        <NavigationMenuItem key={navLink.name}>
          <Link
            href={navLink.href}
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'sm' }),
              'hover:text-primary font-medium'
            )}
          >
            <NavigationMenuLink>{navLink.name}</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
}
