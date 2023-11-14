'use client'

import { Card } from '@/components/ui/card'
import { child } from '@/util/animation'
import { motion } from 'framer-motion'
import { HiPlusCircle } from 'react-icons/hi'

export default function TasksCard() {
  return (
    <motion.div variants={child}>
      <Card className="space-y-4">
        <div className="flex justify-between gap-2 items-center">
          <div>
            <h5 className="font-semibold">Tasks</h5>
            <p className="text-muted-foreground">Your current tasks.</p>
          </div>
          <div>
            <button
              className={
                'group text-primary flex items-center gap-2 justify-end'
              }
            >
              <span className="hidden md:block group-hover:max-w-full group-hover:opacity-100 opacity-0 max-w-0 text-sm overflow-hidden whitespace-nowrap transition-[max-width,opacity] duration-300">
                Create a new Task
              </span>
              <span className="text-4xl text-primary">
                <HiPlusCircle />
              </span>
            </button>
          </div>
        </div>
        <Card variant="flat" className="space-y-2">
          <p className="text-muted-foreground">You have no tasks.</p>
        </Card>
      </Card>
    </motion.div>
  )
}
