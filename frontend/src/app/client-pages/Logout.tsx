'use client'

import { useAuthContext } from '@/state/context/AuthContext'
import { apiAxios } from '@/util/api'
import { Metadata } from 'next'
import { useCallback, useEffect } from 'react'
import Quiggo from '@/assets/img/quiggo.jpg'
import { Skeleton } from '@/components/ui/skeleton'
import { Loader } from 'lucide-react'
import { Button } from '@/components/animated/button'
import AnimatedLink from '@/components/animated/AnimatedLink'
import LargeForm from '@/components/content/LargeForm'
import Image from 'next/image'

function LogoutContainer({ isAuth }: { isAuth: boolean | null }) {
  return (
    <div className="sm:col-span-2 lg:col-span-1 h-full">
      <div className="mx-auto bg-background w-full h-full flex flex-col gap-2 text-center justify-center col-start-1 lg:col-start-2 col-span-2 lg:col-span-1 py-12 md:py-24 lg:py-0 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-2 my-4">
          <LogoutContent isAuth={isAuth} />
        </div>
      </div>
    </div>
  )
}

function LogoutContent({ isAuth }: { isAuth: boolean | null }) {
  if (isAuth === null) {
    return (
      <div>
        <Skeleton className="h-9" />
        <Skeleton className="h-6" />
        <div className="flex gap-4 my-6 justify-center items-center">
          <Skeleton className="w-full h-12" />
          <Skeleton className="w-full h-12" />
        </div>
      </div>
    )
  } else if (isAuth) {
    return (
      <div>
        <h3>Please Wait</h3>
        <p className="text-muted-foreground my-2">Logging you out..</p>
        <div className="relative w-full flex justify-center items-center top-6 py-6">
          <Loader />
        </div>
      </div>
    )
  }
  return (
    <div className="space-y-3">
      <Image
        className="mx-auto"
        src="/logo-small.svg"
        alt="RM8s"
        width={48}
        height={48}
        draggable={false}
      />
      <div className="space-y-2">
        <h3>Successfully logged out</h3>
        <p className="text-muted-foreground">
          Thank you for visiting Roommates.
        </p>
      </div>
      <div className="flex gap-4 my-6 justify-center items-center">
        <AnimatedLink
          linkProps={{ href: '/' }}
          buttonProps={{ variant: 'secondary' }}
        >
          Return Home
        </AnimatedLink>
        <AnimatedLink linkProps={{ href: '/login' }}>Login</AnimatedLink>
      </div>
    </div>
  )
}

export default function LogoutClientPage() {
  const { auth, setAuth } = useAuthContext()

  const logout = useCallback(async (): Promise<void> => {
    const res = await apiAxios.post('logout')
    if (res.status === 200) setAuth(false)
  }, [setAuth])

  useEffect(() => {
    if (auth) {
      logout()
    }
  }, [auth, logout])

  return (
    <main className="sm:bg-slate-50">
      <div className="container pt-2 pb-12 sm:pt-12 sm:pb-24">
        <LargeForm form={<LogoutContainer isAuth={auth} />} image={Quiggo} />
      </div>
    </main>
  )
}
