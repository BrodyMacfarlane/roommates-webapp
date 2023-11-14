import { Card } from '@/components/ui/card'
import { child } from '@/util/animation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Button } from '@/components/animated/button'

export default function OverviewCard() {
  return (
    <motion.div variants={child}>
      <Card className="space-y-4">
        <div className="flex justify-between gap-2 items-center">
          <div>
            <h5 className="font-semibold">Overview</h5>
            <p className="text-muted-foreground">
              A brief look at your day today.
            </p>
          </div>
          <div className="hidden sm:block">
            <Link href="/tasks" className="flex items-center gap-2  text-sm">
              Add or manage tasks{' '}
              <span className="text-xl">
                <HiArrowNarrowRight />
              </span>
            </Link>
          </div>
        </div>
        <Card variant="flat" className="space-y-2">
          <p className="text-muted-foreground">
            You have no tasks set for today.
          </p>
        </Card>
        <Button className="w-full sm:hidden">Add or manage your tasks</Button>
      </Card>
    </motion.div>
  )
}
