import { Card } from '@/components/ui/card'
import { child } from '@/util/animation'
import { motion } from 'framer-motion'

export default function TaskHistoryCard() {
  return (
    <motion.div className="w-full" variants={child}>
      <Card className="space-y-4">
        <div>
          <h5 className="font-semibold">Task History</h5>
          <p className="text-muted-foreground">Tasks that came.</p>
        </div>
        <Card variant="flat">
          <p className="text-muted-foreground">
            You have no tasks in your history.
          </p>
        </Card>
      </Card>
    </motion.div>
  )
}
