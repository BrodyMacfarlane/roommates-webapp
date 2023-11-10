'use client'

import ResponsibilitiesCard from '@/components/tasks/ResponsibilitiesCard'
import TasksCard from '@/components/tasks/TasksCard'
import { container } from '@/util/animation'
import { motion } from 'framer-motion'

export default function Tasks() {
  return (
    <main className="relative">
      <section>
        <h1 className="sr-only">Tasks</h1>
        <motion.div
          className="space-y-4"
          variants={container({ stagger: 0.25, delay: 0 })}
          initial="hidden"
          animate="visible"
        >
          <ResponsibilitiesCard />
          <TasksCard />
        </motion.div>
      </section>
    </main>
  )
}
