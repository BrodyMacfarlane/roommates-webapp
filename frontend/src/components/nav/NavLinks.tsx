import navigation from '@/data/navigation.json'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

type NavLink = {
  name: string
  href: string
}

export default function NavLinks() {
  return navigation.navbar.links.map((navLink: NavLink) => (
    <Link
      key={navLink.name}
      href={navLink.href}
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'sm' }),
        'hover:text-primary font-medium'
      )}
    >
      {navLink.name}
    </Link>
  ))
}
