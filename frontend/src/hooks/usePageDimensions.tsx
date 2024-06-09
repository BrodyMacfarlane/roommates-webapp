import { useEffect, useRef, useState } from 'react'

export default function usePageDimensions() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current || !('getBoundingClientRect' in elementRef.current))
      return
    const calculateDimensions = () => {
      const { width, height } = elementRef.current!.getBoundingClientRect()
      setDimensions({ width, height })
    }

    calculateDimensions()

    const resizeObserver = new ResizeObserver(calculateDimensions)
    resizeObserver.observe(elementRef.current)

    window.addEventListener('resize', calculateDimensions)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', calculateDimensions)
    }
  }, [elementRef.current])

  return { elementRef, dimensions }
}
