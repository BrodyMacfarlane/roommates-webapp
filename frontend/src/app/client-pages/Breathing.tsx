'use client'

import Checkbox from '@/components/alt-ui/checkbox'
import BreathingBlobs from '@/components/animated/BreathingBlobs'
import { Button } from '@/components/animated/button'
import {
  BreathingSessionWrapper,
  useBreathingSessionContext,
} from '@/components/context/breathing/BreathingSessionContext'
import { Label } from '@/components/ui/label'

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
  const { showTips: setShowTips } = config.setters

  return (
    <section className="space-y-4">
      <h4 className="font-semibold">New Breathing Session</h4>
      <div className="space-y-2">
        <p>{breathTimes.inhale}s inhale</p>
        <p>{breathTimes.exhale}s exhale</p>
        <p>{sessionLength} reps</p>
        <p>{sessionLengthString}</p>
        <div className="flex gap-2 items-center">
          <Checkbox
            id="show-tips"
            value={showTips}
            onChange={() => setShowTips((prev) => !prev)}
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
