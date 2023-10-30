'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import type { ReactNode } from 'react'

export type Auth = boolean | null
export type AuthContext = [auth: Auth, setAuth: Dispatch<SetStateAction<Auth>>]

const AuthContext = createContext<AuthContext>([null, () => null])

export function AuthWrapper({ children }: { children: ReactNode }) {
  const [auth, setAuth]: [Auth, Dispatch<SetStateAction<Auth>>] = useState(
    null as Auth
  )

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}
