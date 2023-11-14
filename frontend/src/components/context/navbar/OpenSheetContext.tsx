'use client'

import { usePathname } from 'next/navigation'
import React, { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

export type Sheet = 'nav' | 'account' | null
export type IOpenSheetContext = [
  Sheet,
  React.Dispatch<React.SetStateAction<Sheet>>,
]

const OpenSheetContext = createContext<IOpenSheetContext>([null, () => null])

export function OpenSheetWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [openSheet, setOpenSheet] = useState('' as Sheet)

  React.useEffect(() => {
    setOpenSheet(null)
  }, [pathname])

  return (
    <OpenSheetContext.Provider value={[openSheet, setOpenSheet]}>
      {children}
    </OpenSheetContext.Provider>
  )
}

export function useOpenSheetContext() {
  return useContext(OpenSheetContext)
}
