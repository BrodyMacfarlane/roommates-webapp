'use client'
import { ThemeProvider } from '@/components/context/ThemeProvider'
import { AuthWrapper } from '@/state/context/AuthContext'
import { ReactNode } from 'react'
import { OpenSheetWrapper } from './navbar/OpenSheetContext'
import { HideNavbarWrapper } from './navbar/HideNavbarContext'
import { ViewportWrapper } from '@/state/context/ViewportContext'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthWrapper>
        <OpenSheetWrapper>
          <HideNavbarWrapper>
            <ViewportWrapper>{children}</ViewportWrapper>
          </HideNavbarWrapper>
        </OpenSheetWrapper>
      </AuthWrapper>
    </ThemeProvider>
  )
}
