'use client'

import { useAuthContext } from '@/state/context/AuthContext'
import AnimatedLink from '@/components/animated/AnimatedLink'
import AccountSheet from '@/components/sheets/AccountSheet'

export default function NavButtons() {
  const { auth } = useAuthContext()
  if (auth) return <AccountSheet />
  else
    return (
      <>
        <AnimatedLink
          linkProps={{ href: '/login' }}
          buttonProps={{ variant: 'secondary' }}
        >
          Login
        </AnimatedLink>
        <AnimatedLink linkProps={{ href: '/signup' }}>Get Started</AnimatedLink>
      </>
    )
}
