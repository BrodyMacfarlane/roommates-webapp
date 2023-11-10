import { Card } from '@/components/ui/card'
import { child } from '@/util/animation'
import { motion } from 'framer-motion'

export default function UpcomingTasksCard() {
  return (
    <motion.div className="w-full" variants={child}>
      <Card className="space-y-4">
        <div>
          <h5 className="font-semibold">Upcoming Tasks</h5>
          <p className="text-muted-foreground">Tasks to come.</p>
        </div>
        <Card variant="flat">
          <p className="text-muted-foreground">You have no upcoming tasks.</p>
        </Card>
      </Card>
    </motion.div>
  )
}
