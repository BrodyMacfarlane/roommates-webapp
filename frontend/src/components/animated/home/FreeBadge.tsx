'use client'

import { Badge } from '@/components/ui/badge'
import { motion, Variants, HTMLMotionProps } from 'framer-motion'

export default function FreeBadge() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex gap-2 justify-center items-center"
    >
      <Badge className="bg-roommates-blue hover:bg-roommates-blue">Free</Badge>
      <p className="text-white/60 text-sm font-light">Costs absolutely $0.</p>
    </motion.div>
  )
}
