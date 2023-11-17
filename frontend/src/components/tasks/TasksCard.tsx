'use client'

import { Card } from '@/components/ui/card'
import { bounceFadeMaxW, child } from '@/util/animation'
import { motion } from 'framer-motion'
import { HiPlusCircle } from 'react-icons/hi'
import PlusButton from '@/components/animated/PlusButton'

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
            <PlusButton>Create a new Task</PlusButton>
          </div>
        </div>
        <Card variant="flat" className="space-y-2">
          <p className="text-muted-foreground">You have no tasks.</p>
        </Card>
      </Card>
    </motion.div>
  )
}
