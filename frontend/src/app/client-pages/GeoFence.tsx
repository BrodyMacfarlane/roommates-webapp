'use client'

import { Button } from '@/components/ui/button'
import { useCallback, useState } from 'react'
import { HiLocationMarker } from 'react-icons/hi'

const initialPositionState: GeolocationCoordinates | null = null

const watchOptions: PositionOptions = {
  enableHighAccuracy: true,
  timeout: 60 * 1000,
  maximumAge: 5 * 60 * 60 * 1000,
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180)
}

function getDistanceFromLatLonInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const R = 6371 // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c // Distance in km
  const dFeet = (d * 3280.8399).toFixed()
  return dFeet
}

export default function GeoFenceClientPage() {
  const [position, setPosition] = useState<GeolocationCoordinates | null>(
    initialPositionState
  )
  const [locationError, setLocationError] = useState<string | null>(null)
  const fence = { center: { lat: 40.775229, lon: -111.734441 }, rad: 10 }

  const successCb = useCallback(
    (position: GeolocationPosition) => {
      console.log(
        position.coords.latitude,
        position.coords.longitude,
        position.coords.accuracy,
        position.coords.speed
      )
      setPosition(position.coords)
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

  if (position) {
    return (
      <>
        <p>{position.latitude}</p>
        <p>{position.longitude}</p>
        <p>{position.speed}</p>
        <p>
          current km from point:{' '}
          {getDistanceFromLatLonInKm(
            position.latitude,
            position.longitude,
            fence.center.lat,
            fence.center.lon
          )}
        </p>
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
