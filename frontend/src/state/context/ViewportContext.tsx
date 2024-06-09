'use client'

import usePageDimensions from '@/hooks/usePageDimensions'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { Dispatch, ReactNode, RefObject, SetStateAction } from 'react'

type StateSetter<T> = Dispatch<SetStateAction<T>>
type ViewportDimensions = { width: number; height: number }

export type ViewportContext = {
  elementRef: RefObject<HTMLDivElement> | null
  dimensions: ViewportDimensions
}

const initValues: ViewportContext = {
  elementRef: null,
  dimensions: { width: 0, height: 0 },
}

const ViewportContext = createContext<ViewportContext>(initValues)

export function ViewportWrapper({ children }: { children: ReactNode }) {
  const { elementRef, dimensions } = usePageDimensions()

  return (
    <ViewportContext.Provider value={{ elementRef, dimensions }}>
      {children}
    </ViewportContext.Provider>
  )
}

export function useViewportContext() {
  return useContext(ViewportContext)
}
