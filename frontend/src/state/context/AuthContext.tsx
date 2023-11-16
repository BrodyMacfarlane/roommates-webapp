'use client'

import { apiFetcher } from '@/util/api'
import React, { createContext, useContext, useEffect, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import type { ReactNode } from 'react'
import useSwr from 'swr'

export type Auth = boolean | null
export type AuthUser = {
  createdAt: Date
  email: string
  nickname: string | null
  id: 1
  isEmailConfirmed: boolean
  remember_me_token: string | null
  updated_at: Date
}
export type AuthContext = {
  auth: Auth
  setAuth: Dispatch<SetStateAction<Auth>>
  authUser?: AuthUser
  setAuthUser: Dispatch<SetStateAction<AuthUser | undefined>>
}

const AuthContext = createContext<AuthContext>({
  auth: null,
  setAuth: () => null,
  setAuthUser: () => null,
})

export function AuthWrapper({ children }: { children: ReactNode }) {
  const [auth, setAuth]: [Auth, Dispatch<SetStateAction<Auth>>] = useState(
    null as Auth
  )
  const [authUser, setAuthUser] = useState<AuthUser>()

  const { data, isLoading, error } = useSwr<AuthUser>(
    'logged_in_user',
    apiFetcher
  )

  useEffect(() => {
    if (auth === false) {
      setAuthUser(undefined)
    }
  }, [auth])

  useEffect(() => {
    if (authUser) {
      setAuth(true)
    }
  }, [authUser])

  useEffect(() => {
    if (data) {
      setAuthUser(data)
    }
  }, [data])

  useEffect(() => {
    if (error) {
      setAuth(false)
    }
  }, [error])

  return (
    <AuthContext.Provider value={{ auth, setAuth, authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}
