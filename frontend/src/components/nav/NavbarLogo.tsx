'use client'

import { useAuthContext } from '@/state/context/AuthContext'

import Link from 'next/link'
import Image from 'next/image'

export default function NavbarLogo() {
  const { auth } = useAuthContext()

  return (
    <Link href={auth ? '/dashboard' : '/'}>
      <Image
        src="/logo.svg"
        alt="RM8s"
        width={108}
        height={64}
        draggable={false}
      />
    </Link>
  )
}
