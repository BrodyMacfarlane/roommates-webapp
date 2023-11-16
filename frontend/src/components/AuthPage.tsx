'use client'

import { useAuthContext } from '@/state/context/AuthContext'
import { useRouter, usePathname } from 'next/navigation'

export default function AuthPage({
  LoadingSkeleton,
  children,
}: {
  LoadingSkeleton: React.ReactNode
  children: React.ReactNode
}) {
  const { auth } = useAuthContext()
  const router = useRouter()
  const pathname = usePathname()

  if (auth) return children
  else if (auth === false) {
    router.push(`/login?redirectUrl=${pathname}`)
  } else return LoadingSkeleton
}
