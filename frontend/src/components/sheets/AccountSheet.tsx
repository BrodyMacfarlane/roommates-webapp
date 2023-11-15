'use client'

import { HiUser, HiUserCircle } from 'react-icons/hi'

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetClose,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { useAuthContext } from '@/state/context/AuthContext'
import { useOpenSheetContext } from '../context/navbar/OpenSheetContext'
import { FaUserCircle } from 'react-icons/fa'
import { useState } from 'react'
import { apiAxios } from '@/util/api'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { child } from '@/util/animation'

export default function AccountSheet() {
  const { setAuth, authUser } = useAuthContext()
  const [openSheet, setOpenSheet] = useOpenSheetContext()
  const [loggingOut, setLoggingOut] = useState<boolean>(false)
  const router = useRouter()

  const handleOpenChange = (open: boolean) => {
    if (open === true) setOpenSheet('account')
    else setOpenSheet(null)
  }

  const logout = async () => {
    setLoggingOut(true)
    const res = await apiAxios.post('logout')
    if (res.status === 200) router.push('/logout')
    setLoggingOut(false)
    setAuth(false)
  }

  if (authUser)
    return (
      <Sheet open={openSheet === 'account'} onOpenChange={handleOpenChange}>
        <motion.div variants={child} initial="hidden" animate="visible">
          <SheetTrigger className="group" asChild>
            <Button
              variant="outline"
              size="sm"
              className="flex justify-center items-center gap-1"
            >
              <FaUserCircle className="w-4 h-4" />
              <span className="text-sm">{authUser?.nickname}</span>
            </Button>
          </SheetTrigger>
        </motion.div>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Image
                className="mx-auto"
                src="/logo-small.svg"
                alt="RM8s"
                width={48}
                height={48}
                draggable={false}
              />
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="py-3">
            <div className="space-y-6"></div>
          </div>
          <SheetFooter>
            <Button
              fetching={loggingOut}
              fetchText="Logging you out"
              onClick={logout}
              className="w-full"
              size="lg"
            >
              Logout
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
}
