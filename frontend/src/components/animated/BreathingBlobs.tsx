import { useCallback, useEffect, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import HideNavbar from '../invokers/HideNavbar'
import { useViewportContext } from '@/state/context/ViewportContext'
import { useBreathingSessionContext } from '../context/breathing/BreathingSessionContext'
import BlobBg from '../breathing/BlobBg'
import { cn } from '@/lib/utils'

const blobs = [
  'M53.3,-45.8C64.5,-28.4,65.9,-6.5,60.1,11.6C54.3,29.7,41.2,44,23,55.8C4.9,67.6,-18.3,76.9,-35.9,70.2C-53.5,63.4,-65.4,40.5,-71,16.1C-76.7,-8.3,-76.1,-34.3,-63.2,-52C-50.4,-69.7,-25.2,-79.2,-2.1,-77.6C21,-75.9,42.1,-63.1,53.3,-45.8Z',
  'M46.2,-35.6C60.2,-19.4,71.9,-0.1,69.1,17.2C66.3,34.6,48.9,50.1,29.4,58.6C9.8,67,-12,68.5,-28.6,60.2C-45.2,51.9,-56.7,33.7,-60.5,14.5C-64.4,-4.7,-60.6,-25,-49.2,-40.6C-37.9,-56.3,-18.9,-67.2,-1.4,-66.1C16.1,-65,32.3,-51.8,46.2,-35.6Z',
  'M54.2,-42.4C65.4,-29.2,66.2,-6.9,62.5,16.3C58.9,39.6,50.7,63.9,32.9,74.9C15.2,85.9,-12,83.7,-34.1,72.4C-56.1,61.1,-73,40.8,-74.5,20.9C-75.9,1,-61.9,-18.6,-46.9,-32.7C-31.9,-46.8,-15.9,-55.4,2.8,-57.6C21.5,-59.8,43,-55.6,54.2,-42.4Z',
  'M56.2,-45.5C71.4,-25.9,81.1,-2.6,77.1,18.7C73.2,40,55.5,59.4,36,65.1C16.4,70.9,-5.1,63.1,-20.5,52.1C-35.8,41,-45,26.7,-50.3,9.7C-55.6,-7.3,-57.1,-27,-48,-45.3C-39,-63.5,-19.5,-80.4,0.5,-80.8C20.6,-81.2,41.1,-65.2,56.2,-45.5Z',
]

function calculateAnimationDuration() {
  const secondsPerStep = 4
  const numberOfSteps = blobs.length + 1
  return `${numberOfSteps * secondsPerStep}s`
}

function generateBlobKeyframes(keyframes: string[]) {
  return keyframes.join(';').concat(`;${keyframes[0]}`)
}

export function Blob({
  keyframes = blobs,
  animationDuration = '20s',
  size = 300,
  colors = ['#6723CD', '#3D2DC4'],
  increaseInterval,
  decreaseInterval,
  transparent = false,
}: {
  keyframes?: string[]
  animationDuration?: string
  size?: number
  colors?: string[]
  increaseInterval?: number
  decreaseInterval?: number
  transparent?: boolean
}) {
  const blobKeyframes = useMemo(() => generateBlobKeyframes(keyframes), [])
  const id = useMemo(() => uuidv4(), [])
  const [isAnimating, setIsAnimating] = useState(false)

  const isBreathing = useMemo(() => {
    if (
      increaseInterval &&
      decreaseInterval &&
      increaseInterval > 0 &&
      decreaseInterval > 0
    ) {
      return true
    } else return false
  }, [increaseInterval, decreaseInterval])

  useEffect(() => {
    if (isBreathing) {
      setIsAnimating(true)
    }
  }, [isBreathing])

  const handleTransitionEnd = useCallback(() => {
    setIsAnimating(!isAnimating)
  }, [isAnimating])

  useEffect(() => {
    console.log(size, isAnimating, increaseInterval, decreaseInterval)
  }, [size, isAnimating, increaseInterval, decreaseInterval])

  return (
    <svg
      key={`breathing-blob-${id}`}
      className={cn(
        'absolute',
        isBreathing ? (isAnimating ? 'tr-full' : 'tr-small') : ''
      )}
      width={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={
        isBreathing
          ? {
              transition: `transform ${isAnimating ? increaseInterval : decreaseInterval}s linear`,
              willChange: 'transform',
            }
          : {}
      }
      onTransitionEnd={handleTransitionEnd}
    >
      <defs>
        <linearGradient
          id={`gradient-${id}`}
          x1="100%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: colors[0] }} />
          <stop offset="100%" style={{ stopColor: colors[1] }} />
        </linearGradient>
      </defs>
      <path
        transform="translate(100 100)"
        fill={`url(#gradient-${id})`}
        opacity={transparent ? 0.7 : 1}
      >
        <animate
          attributeName="d"
          dur={animationDuration}
          repeatCount="indefinite"
          values={blobKeyframes}
          keySplines="
            0.5 0 0.5 1;
            0.5 0 0.5 1;
            0.5 0 0.5 1;
            0.5 0 0.5 1"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
        />
      </path>
    </svg>
  )
}

export default function BreathingBlobs() {
  const animationDuration = useMemo(() => calculateAnimationDuration(), [])
  const { dimensions } = useViewportContext()
  const [blobSize, setBlobSize] = useState(0)
  const { config } = useBreathingSessionContext()
  const { breathTimes } = config.values

  useEffect(() => {
    if (dimensions.height > dimensions.width) setBlobSize(dimensions.width)
    else setBlobSize(dimensions.height)
  }, [dimensions])

  const inhaleTime = useMemo(() => breathTimes.inhale, [breathTimes.inhale])
  const exhaleTime = useMemo(() => breathTimes.exhale, [breathTimes.exhale])

  if (blobSize > 0) {
    return (
      <>
        <HideNavbar />
        <BlobBg />
        <div className="absolute flex justify-center items-center left-0 top-0 w-full h-full overflow-hidden">
          <Blob
            keyframes={blobs}
            animationDuration={animationDuration}
            size={blobSize}
            colors={['#F1FFF6', '#F8DFFF']}
            // transparent
          />
          <Blob
            keyframes={blobs}
            animationDuration={animationDuration}
            size={blobSize}
            increaseInterval={inhaleTime}
            decreaseInterval={exhaleTime}
          />
        </div>
      </>
    )
  }
}
