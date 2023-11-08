'use client'

import { FC } from 'react'
import { motion, Variants, HTMLMotionProps } from 'framer-motion'
import { container, child } from '@/util/animation'

interface Props extends HTMLMotionProps<'div'> {
  text: string
  delay?: number
  duration?: number
}

const WavyText: FC<Props> = ({
  text,
  delay = 0,
  duration = 0.05,
  ...props
}: Props) => {
  const letters = Array.from(text)

  return (
    <motion.h1
      className="text-center leading-tight text-white text-4xl md:text-6xl lg:text-7xl"
      variants={container({ stagger: duration })}
      initial="hidden"
      animate={'visible'}
      {...props}
    >
      {letters.map((letter, index) => {
        if (letter === '/') return <br key={index} />
        return (
          <motion.span className="inline-block" key={index} variants={child}>
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        )
      })}
    </motion.h1>
  )
}

export default WavyText
