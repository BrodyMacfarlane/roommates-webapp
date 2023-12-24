'use client'
import { ThemeProvider } from '@/components/context/ThemeProvider'
import { AuthWrapper } from '@/state/context/AuthContext'
import { ReactNode } from 'react'
import { OpenSheetWrapper } from './navbar/OpenSheetContext'
import { HideNavbarWrapper } from './navbar/HideNavbarContext'

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
          <HideNavbarWrapper>{children}</HideNavbarWrapper>
        </OpenSheetWrapper>
      </AuthWrapper>
    </ThemeProvider>
  )
}
