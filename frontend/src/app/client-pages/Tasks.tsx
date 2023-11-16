'use client'

import AnimatedLink from '@/components/animated/AnimatedLink'
import ResponsibilitiesCard from '@/components/tasks/ResponsibilitiesCard'
import TasksCard from '@/components/tasks/TasksCard'
import { Skeleton } from '@/components/ui/skeleton'
import { container } from '@/util/animation'
import { motion } from 'framer-motion'

export function TasksLoadingSkeleton() {
  return (
    <motion.div
      className="space-y-4"
      variants={container({ stagger: 0.25, delay: 0 })}
      initial="hidden"
      animate="visible"
    >
      <Skeleton className="w-full h-24" />
      <Skeleton className="w-full h-24" />
    </motion.div>
  )
}

export default function TasksClientPage() {
  return (
    <div className="space-y-6">
      {/* <div className='w-full flex justify-end'>
        <AnimatedLink linkProps={{ href: '/dashboard' }}>Go to Dashboard</AnimatedLink>
      </div> */}
      <motion.div
        className="space-y-4"
        variants={container({ stagger: 0.25, delay: 0 })}
        initial="hidden"
        animate="visible"
      >
        <ResponsibilitiesCard />
        <TasksCard />
      </motion.div>
    </div>
  )
}
