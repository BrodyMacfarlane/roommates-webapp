'use client'

import { bounceFadeMaxW, scale } from '@/util/animation'
import { HTMLMotionProps, motion } from 'framer-motion'
import React from 'react'
import { HiPlusCircle } from 'react-icons/hi'

const PlusButton = React.forwardRef<
  HTMLButtonElement,
  HTMLMotionProps<'button'>
>((props, ref) => {
  return (
    <motion.button
      ref={ref}
      initial="rest"
      animate="rest"
      whileHover="hover"
      className={'relative text-primary flex items-center gap-2 justify-end'}
      {...props}
    >
      <motion.span
        className="relative z-[1] hidden md:block text-sm overflow-hidden whitespace-nowrap"
        variants={bounceFadeMaxW}
      >
        {props.children}
      </motion.span>
      <motion.span
        variants={scale}
        className="relative z-[2] text-4xl text-primary"
      >
        <HiPlusCircle />
      </motion.span>
    </motion.button>
  )
})

PlusButton.displayName = 'PlusButton'

export default PlusButton
