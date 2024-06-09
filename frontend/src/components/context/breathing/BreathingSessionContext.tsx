'use client'

import {
  calculateSessionLengthString,
  calculateSessionMS,
} from '@/util/breathing'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { Dispatch, ReactNode, SetStateAction } from 'react'

type View = 'session' | 'breathing' | 'config'
type BreathTimes = { inhale: number; exhale: number }
type SessionLength = number
type StateSetter<T> = Dispatch<SetStateAction<T>>

export type BreathingSessionContext = {
  view: View
  startSession: () => void
  sessionLengthString: string
  config: {
    values: {
      breathTimes: BreathTimes
      sessionLength: SessionLength
      showTips: boolean
    }
    setters: {
      breathTimes: StateSetter<BreathTimes>
      sessionLength: StateSetter<SessionLength>
      showTips: StateSetter<boolean>
    }
  }
}

const initValues: BreathingSessionContext = {
  view: 'session',
  startSession: () => null,
  sessionLengthString: 'hh:mm:ss',
  config: {
    values: {
      breathTimes: { inhale: 5, exhale: 10 },
      sessionLength: 50,
      showTips: true,
    },
    setters: {
      breathTimes: () => null,
      sessionLength: () => null,
      showTips: () => null,
    },
  },
}

const BreathingSessionContext =
  createContext<BreathingSessionContext>(initValues)

export function BreathingSessionWrapper({ children }: { children: ReactNode }) {
  const [view, setView] = useState<View>(initValues.view)
  const [breathTimes, setBreathTimes] = useState(
    initValues.config.values.breathTimes
  )
  const [sessionLength, setSessionLength] = useState(
    initValues.config.values.sessionLength
  )
  const [showTips, setShowTips] = useState(initValues.config.values.showTips)

  const breathInterval = useMemo(
    () => breathTimes.inhale + breathTimes.exhale,
    [breathTimes]
  )

  const sessionLengthInMS = useMemo(
    () => calculateSessionMS(breathInterval, sessionLength),
    [breathInterval, sessionLength]
  )

  const sessionLengthString = useMemo(
    () => calculateSessionLengthString(sessionLengthInMS),
    [sessionLengthInMS]
  )

  const startSession = useCallback(() => {
    setView('breathing')

    setTimeout(() => {
      setView('session')
    }, sessionLengthInMS)
  }, [sessionLengthInMS])

  return (
    <BreathingSessionContext.Provider
      value={{
        view,
        sessionLengthString,
        startSession,
        config: {
          values: { breathTimes, sessionLength, showTips },
          setters: {
            breathTimes: setBreathTimes,
            sessionLength: setSessionLength,
            showTips: setShowTips,
          },
        },
      }}
    >
      {children}
    </BreathingSessionContext.Provider>
  )
}

export function useBreathingSessionContext() {
  return useContext(BreathingSessionContext)
}
