'use client'
import navigation from '@/data/navigation.json'
import Link from 'next/link'
import { Card } from '@/components/ui/card'

import { useOpenSheetContext } from '@/components/context/navbar/OpenSheetContext'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function MobileNavItem({
  name,
  links,
  auth,
}: (typeof navigation.desktop.navbar.menus)[0]) {
  const [openSheet, setOpenSheet] = useOpenSheetContext()
  const pathname = usePathname()

  return (
    <div className="space-y-2">
      <p className="font-semibold text-xl text-primary">{name}</p>
      <div className="space-y-6">
        {links.map((navLink) => (
          <Link
            key={navLink.name}
            href={navLink.href}
            className="w-full"
            onClick={() => setOpenSheet(null)}
          >
            <Card
              variant="flat"
              className={cn(
                'my-2',
                pathname === navLink.href && 'border border-primary'
              )}
            >
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
