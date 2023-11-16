'use client'

import OverviewCard from '@/components/dashboard/OverviewCard'
import TaskHistoryCard from '@/components/dashboard/TaskHistoryCard'
import UpcomingTasksCard from '@/components/dashboard/UpcomingTasksCard'
import { Skeleton } from '@/components/ui/skeleton'
import { container } from '@/util/animation'
import { motion } from 'framer-motion'

export function DashboardLoadingSkeleton() {
  return (
    <motion.div
      className="space-y-4"
      variants={container({ stagger: 0.25, delay: 0 })}
      initial="hidden"
      animate="visible"
    >
      <Skeleton className="w-full h-24" />
      <div className="flex flex-col lg:flex-row gap-4">
        <Skeleton className="w-full h-24" />
        <Skeleton className="w-full h-24" />
      </div>
    </motion.div>
  )
}

export default function DashboardClientPage() {
  return (
    <motion.div
      className="space-y-4"
      variants={container({ stagger: 0.25, delay: 0 })}
      initial="hidden"
      animate="visible"
    >
      <OverviewCard />
      <div className="flex flex-col lg:flex-row gap-4">
        <UpcomingTasksCard />
        <TaskHistoryCard />
      </div>
    </motion.div>
  )
}
