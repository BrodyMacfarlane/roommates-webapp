'use client'
import { ThemeProvider } from '@/components/context/ThemeProvider'
import { AuthWrapper } from '@/state/context/AuthContext'
import { ReactNode } from 'react'
import { OpenSheetWrapper } from './navbar/OpenSheetContext'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthWrapper>
        <OpenSheetWrapper>{children}</OpenSheetWrapper>
      </AuthWrapper>
    </ThemeProvider>
  )
}
