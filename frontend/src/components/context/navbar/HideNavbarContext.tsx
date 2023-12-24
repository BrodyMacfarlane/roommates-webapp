'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

const pathsToHideNavbarOn = ['/christmas']

export type IHideNavbarContext = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
]

const HideNavbarContext = createContext<IHideNavbarContext>([
  false,
  () => false,
])

export function HideNavbarWrapper({ children }: { children: ReactNode }) {
  const [hideNavbar, setHideNavbar] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    if (pathsToHideNavbarOn.find((p) => p === pathname)) setHideNavbar(true)
    else setHideNavbar(false)
  }, [pathname])

  return (
    <HideNavbarContext.Provider value={[hideNavbar, setHideNavbar]}>
      {children}
    </HideNavbarContext.Provider>
  )
}

export function useHideNavbarContext() {
  return useContext(HideNavbarContext)
}
