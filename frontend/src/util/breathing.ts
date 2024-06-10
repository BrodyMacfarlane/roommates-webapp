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

  const formattedHours = h > 0 ? `${h} hour${h === 1 ? '' : 's'}, ` : ''
  const formattedMinutes = m > 0 ? `${m} minute${m === 1 ? '' : 's'} and ` : ''

  s =
    s < 10
      ? `${s} second${s === 1 ? '' : 's'}`
      : `${s} second${s === 1 ? '' : 's'}`

  return `${formattedHours}${formattedMinutes}${s}`
}
