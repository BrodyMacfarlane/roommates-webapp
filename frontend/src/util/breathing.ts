export function calculateSessionMS(
  breathInterval: number,
  reps: number
): number {
  return breathInterval * reps * 1000
}

export function calculateSessionLengthString(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000)
  let h = Math.floor(totalSeconds / 3600)
  let m = Math.floor((totalSeconds % 3600) / 60)
  let s: string | number = totalSeconds % 60

  const formattedHours = h > 0 ? `${h} hours, ` : ''
  const formattedMinutes = m > 0 ? `${m} minutes and ` : ''

  s = s < 10 ? `${s} seconds` : `${s} seconds`

  return `${formattedHours}${formattedMinutes}${s}`
}
