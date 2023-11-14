'use client'

import * as React from 'react'
import { type VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { ButtonProps, buttonVariants } from '@/components/animated/button'

export default function ClientButton({
  ref,
  props,
  variant,
  size,
  className,
  fetching,
  fetchText,
  asChild = false,
}: {
  ref: React.ForwardedRef<HTMLButtonElement>
  props: ButtonProps
  variant: VariantProps<typeof buttonVariants>['variant']
  size: VariantProps<typeof buttonVariants>['size']
  className?: string
  fetching: boolean
  fetchText?: string
  asChild?: boolean
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        transition: {
          duration: 0.1,
        },
      }}
      whileTap={{
        scale: 1,
        transition: {
          duration: 0.1,
        },
      }}
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
      disabled={props.disabled || fetching}
    >
      {fetching && fetchText ? (
        <span className="w-full h-full flex justify-center items-center">
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          {fetchText}
        </span>
      ) : (
        props.children
      )}
    </motion.button>
  )
}
