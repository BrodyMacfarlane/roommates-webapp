'use client'

export default function FormError({
  errorMessage,
}: {
  errorMessage: string | null
}) {
  return errorMessage && <div className="text-destructive">{errorMessage}</div>
}
