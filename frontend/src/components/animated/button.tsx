import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { HTMLMotionProps, motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import ClientButton from '../ui/client/button'

const buttonVariants = cva(
  'inline-flex whitespace-nowrap items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary-hover hover:text-primary-foreground',
        destructive:
          'bg-destructive text-destructive-foreground hover:text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:text-primary hover:underline',
      },
      size: {
        default: 'h-12 px-6 py-2',
        sm: 'h-10 rounded-md px-4',
        lg: 'h-14 rounded-md px-12 py-2 text-base font-semibold',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends HTMLMotionProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  fetching?: boolean
  fetchText?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      asChild = false,
      variant,
      size,
      fetching = false,
      fetchText,
      ...props
    },
    ref
  ) => {
    return (
      <ClientButton
        className={className}
        variant={variant}
        size={size}
        fetching={fetching}
        fetchText={fetchText}
        props={props}
        asChild={asChild}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
