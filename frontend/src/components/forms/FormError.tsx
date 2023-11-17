'use client'

export default function FormError({
  errorMessage,
}: {
  errorMessage: string | null
}) {
  return (
    errorMessage && (
      <div className="my-2 bg-destructive/5 p-4 text-center rounded-md">
        <p className="text-destructive">{errorMessage}</p>
      </div>
    )
  )
}
