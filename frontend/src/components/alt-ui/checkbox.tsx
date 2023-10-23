import { cn } from '@/lib/utils'
import { type ClassValue } from 'clsx'
import { ChangeEventHandler } from 'react'

export default function Checkbox({
  id,
  value,
  onChange,
  className,
  disabled = false,
}: {
  id?: string
  value: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
  className?: ClassValue
  disabled?: boolean
}) {
  return (
    <input
      id={id}
      className={cn(
        'h-4 w-4 text-primary focus:ring-primary border-input shadow-sm rounded',
        className
      )}
      type="checkbox"
      checked={value}
      onChange={onChange}
      disabled={disabled}
    />
  )
}
