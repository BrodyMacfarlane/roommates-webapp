'use client'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { child, container } from '@/util/animation'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroContent() {
  return (
    <motion.div
      variants={container({ stagger: 0.5, delay: 0.5 })}
      initial="hidden"
      animate={'visible'}
      className="space-y-9"
    >
      <motion.p
        variants={child}
        className="text-white/60 text-center font-light text-lg"
      >
        Get reminders for housework, pet care, car maintenance, and more.
        <br />
        All in one place with those who share the responsibilities with you.
      </motion.p>
      <motion.div
        variants={child}
        className="flex justify-center items-center gap-2"
      >
        <Link
          href="/signup"
          className={cn(
            buttonVariants({ size: 'lg' }),
            'bg-white text-primary hover:bg-slate-100 hover:text-roommates-blue dark:hover:text-roommates-blue'
          )}
        >
          Get Started
        </Link>
        <Link href="/about" className={buttonVariants({ size: 'lg' })}>
          Learn More
        </Link>
      </motion.div>
      <motion.div variants={child} className="space-y-2">
        <p className="text-white/60 text-center font-light text-sm">
          Existing user?{' '}
          <Link
            href="/login"
            className="font-bold text-white hover:text-white hover:underline"
          >
            Login here
          </Link>
          .
        </p>
      </motion.div>
    </motion.div>
  )
}
