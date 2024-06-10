'use client'

import Checkbox from '@/components/alt-ui/checkbox'
import BreathingBlobs from '@/components/animated/BreathingBlobs'
import { Button } from '@/components/animated/button'
import {
  BreathingSessionWrapper,
  useBreathingSessionContext,
} from '@/components/context/breathing/BreathingSessionContext'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'

function ConfigView() {
  return <section>Config</section>
}

function BreathingView() {
  return (
    <div className="h-full flex justify-center items-center flex-grow">
      <BreathingBlobs />
    </div>
  )
}

function SessionView() {
  const { startSession, sessionLengthString, config } =
    useBreathingSessionContext()
  const { breathTimes, sessionLength, showTips } = config.values
  const {
    showTips: setShowTips,
    sessionLength: setSessionLength,
    breathTimes: setBreathTimes,
  } = config.setters

  return (
    <section className="space-y-6">
      <h4 className="font-semibold">New Breathing Session</h4>
      <div className="space-y-4">
        <div>
          <Slider
            defaultValue={[5]}
            value={[breathTimes.inhale]}
            onValueChange={(vals) =>
              setBreathTimes((prev) => ({ ...prev, inhale: vals[0] }))
            }
            max={15}
            step={0.1}
            className="w-60"
          />
          <p>{breathTimes.inhale}s inhale</p>
        </div>
        <div>
          <Slider
            defaultValue={[10]}
            value={[breathTimes.exhale]}
            onValueChange={(vals) =>
              setBreathTimes((prev) => ({ ...prev, exhale: vals[0] }))
            }
            max={30}
            step={0.1}
            className="w-60"
          />
          <p>{breathTimes.exhale}s exhale</p>
        </div>
        <div>
          <Slider
            defaultValue={[50]}
            value={[sessionLength]}
            onValueChange={(vals) => setSessionLength(vals[0])}
            max={100}
            step={1}
            className="w-60"
          />
          <p>{sessionLength} cycles</p>
        </div>
        <p>{sessionLengthString}</p>
        <div className="flex gap-2 items-center">
          <Switch
            id="show-tips"
            checked={showTips}
            onCheckedChange={(checked: boolean) => setShowTips(checked)}
          />
          <Label htmlFor="show-tips">Show tips</Label>
        </div>
      </div>
      <Button onClick={startSession}>Begin Session</Button>
    </section>
  )
}

function BreathingViews() {
  const { view } = useBreathingSessionContext()

  switch (view) {
    case 'session':
      return <SessionView />
    case 'breathing':
      return <BreathingView />
    case 'config':
      return <ConfigView />
  }
}

export default function BreathingClientPage() {
  return (
    <BreathingSessionWrapper>
      <BreathingViews />
    </BreathingSessionWrapper>
  )
}
