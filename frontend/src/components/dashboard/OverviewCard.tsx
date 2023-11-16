import { Card } from '@/components/ui/card'
import { bounceToRight, child } from '@/util/animation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Button } from '@/components/animated/button'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

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
            <motion.div initial="rest" whileHover="hover" animate="rest">
              <Link href="/tasks" className="flex items-center gap-2  text-sm">
                Add or manage tasks{' '}
                <motion.span variants={bounceToRight} className="text-xl">
                  <HiArrowNarrowRight />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
        <Card variant="flat" className="space-y-2">
          <p className="text-muted-foreground">
            You have no tasks set for today.
          </p>
        </Card>
        <Link
          href="/tasks"
          className={cn(buttonVariants(), 'w-full sm:hidden')}
        >
          Add or manage tasks
        </Link>
      </Card>
    </motion.div>
  )
}
