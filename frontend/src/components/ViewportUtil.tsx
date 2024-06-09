'use client'

import { useViewportContext } from '@/state/context/ViewportContext'

export default function ViewportUtil() {
  const { elementRef } = useViewportContext()
  return (
    <div
      ref={elementRef}
      className="fixed top-0 left-0 opacity-0 w-[100svw] h-[100svh] z-[-1000] pointer-events-none bg-transparent"
    />
  )
}
