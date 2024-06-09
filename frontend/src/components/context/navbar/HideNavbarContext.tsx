'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

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

  return (
    <HideNavbarContext.Provider value={[hideNavbar, setHideNavbar]}>
      {children}
    </HideNavbarContext.Provider>
  )
}

export function useHideNavbarContext() {
  return useContext(HideNavbarContext)
}
