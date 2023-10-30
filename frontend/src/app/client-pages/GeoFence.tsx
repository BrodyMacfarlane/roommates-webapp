'use client'

import { Button } from '@/components/ui/button'
import { useCallback, useState } from 'react'
import { HiLocationMarker } from 'react-icons/hi'

type Position = { lon: number | null; lat: number | null }
const initialPositionState: Position = { lon: null, lat: null }

const watchOptions: PositionOptions = {
  enableHighAccuracy: true,
  timeout: 60 * 1000,
  maximumAge: 5 * 60 * 60 * 1000,
}

export default function GeoFenceClientPage() {
  const [position, setPosition] = useState<Position>(initialPositionState)
  const [locationError, setLocationError] = useState<string | null>(null)

  const successCb = useCallback(
    (position: GeolocationPosition) => {
      console.log(
        position.coords.latitude,
        position.coords.longitude,
        position.coords.accuracy,
        position.coords.speed
      )
      setPosition({
        lon: position.coords.longitude,
        lat: position.coords.latitude,
      })
    },
    [setPosition]
  )

  const errorCb = useCallback(
    (error: GeolocationPositionError) => {
      console.log('error fetching location', error)
      setLocationError(error.message)
    },
    [setLocationError]
  )

  const openLocationDialog = () => {
    // navigator.geolocation.getCurrentPosition((res) => console.log(res))
    navigator.geolocation.watchPosition(successCb, errorCb, watchOptions)
  }

  if (position.lat && position.lon) {
    return (
      <>
        <p>{position.lon}</p>
        <p>{position.lat}</p>
      </>
    )
  }

  return (
    <>
      <h5 className="font-semibold text-secondary-foreground/80">
        Please share your location with the app to proceed.
      </h5>
      <div className="flex justify-center">
        <Button onClick={openLocationDialog} className="w-full flex gap-2">
          <span className="text-2xl">
            <HiLocationMarker />
          </span>
          Open Location Dialog
        </Button>
      </div>
    </>
  )
}
