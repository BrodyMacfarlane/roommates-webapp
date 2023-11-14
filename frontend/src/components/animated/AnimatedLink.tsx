'use client'

import Link, { LinkProps } from 'next/link'
import { ButtonProps, buttonVariants } from '@/components/animated/button'
import { cn } from '@/lib/utils'
import { MotionProps, motion } from 'framer-motion'

const AnimatedLink = function ({
  linkProps,
  buttonProps = { variant: 'default', size: 'default', className: '' },
  motionProps,
  children,
}: {
  linkProps: LinkProps
  buttonProps?: ButtonProps
  motionProps?: MotionProps
  children: React.ReactNode
}) {
  return (
    <motion.div
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
    >
      <Link
        className={cn(
          buttonVariants({
            variant: buttonProps.variant,
            size: buttonProps.size,
          }),
          buttonProps.className
        )}
        {...linkProps}
      >
        {children}
      </Link>
    </motion.div>
  )
}

export default motion(AnimatedLink)
