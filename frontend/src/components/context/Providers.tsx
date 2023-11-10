'use client'
import { ThemeProvider } from '@/components/context/ThemeProvider'
import { AuthWrapper } from '@/state/context/AuthContext'
import { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthWrapper>{children}</AuthWrapper>
    </ThemeProvider>
  )
}
