'use client'

import * as React from 'react'
import { useState } from 'react'

import { cn } from '@/lib/utils'
import { HiEye, HiEyeOff } from 'react-icons/hi'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const handleEyeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      setShowPassword((v) => !v)
    }

    return (
      <div className="relative">
        <input
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          className={cn(
            'flex w-full rounded-md border border-input bg-background px-3 py-2 shadow-sm text-base ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        {type === 'password' && (
          <div className="absolute top-0 right-0 h-full flex items-center">
            <button
              type="button"
              className="relative right-2 p-2 text-xl text-primary/70 hover:text-primary"
              onClick={handleEyeClick}
            >
              {showPassword ? <HiEye /> : <HiEyeOff />}
            </button>
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
