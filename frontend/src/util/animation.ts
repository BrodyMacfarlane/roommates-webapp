import { Variants } from 'framer-motion'

export function container({
  stagger = 0.05,
  delay = 0,
}: {
  stagger?: number
  delay?: number
}): Variants {
  return {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: i * delay },
    }),
  }
}

export const child: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
}

export const enterFromSide: Variants = {
  initial: {
    x: -250,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
  animate: {
    x: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
}

export const bounceToRight: Variants = {
  rest: {
    x: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
  hover: {
    x: 5,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
}

export const bounceFadeMaxW: Variants = {
  rest: {
    x: 30,
    maxWidth: '0%',
    opacity: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
  hover: {
    x: 0,
    maxWidth: '100%',
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
}
