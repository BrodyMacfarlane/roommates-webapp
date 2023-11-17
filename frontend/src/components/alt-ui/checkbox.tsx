import { cn } from '@/lib/utils'
import { type ClassValue } from 'clsx'
import { ChangeEventHandler } from 'react'

export default function Checkbox({
  id,
  value,
  onChange,
  className,
  disabled = false,
  error = false,
}: {
  id?: string
  value: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
  className?: ClassValue
  disabled?: boolean
  error?: boolean
}) {
  return (
    <input
      id={id}
      className={cn(
        'h-6 w-6 text-primary focus:ring-primary border-input shadow-sm rounded',
        className,
        error && 'border-destructive focus:ring-destructive'
      )}
      type="checkbox"
      checked={value}
      onChange={onChange}
      disabled={disabled}
    />
  )
}
