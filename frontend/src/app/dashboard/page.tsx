'use client'

import OverviewCard from '@/components/dashboard/OverviewCard'
import TaskHistoryCard from '@/components/dashboard/TaskHistoryCard'
import UpcomingTasksCard from '@/components/dashboard/UpcomingTasksCard'
import { container } from '@/util/animation'
import { motion } from 'framer-motion'

export default function Dashboard() {
  return (
    <main className="relative">
      <section>
        <h1 className="sr-only">Dashboard</h1>
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
      </section>
    </main>
  )
}
