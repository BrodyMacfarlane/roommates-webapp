'use client'

import { useEffect } from 'react'
import { useHideNavbarContext } from '../context/navbar/HideNavbarContext'

export default function HideNavbar() {
  const [hideNavbar, setHideNavbar] = useHideNavbarContext()

  useEffect(() => {
    setHideNavbar(true)
    return () => setHideNavbar(false)
  }, [])

  return <></>
}
