'use client'

import { bounceFadeMaxW } from '@/util/animation'
import { motion } from 'framer-motion'
import { HiPlusCircle } from 'react-icons/hi'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import CreateResponsibilityForm from '@/components/forms/CreateResponsibility'

export default function ResponsibilitiesModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          initial="rest"
          animate="rest"
          whileHover="hover"
          className={
            'relative text-primary flex items-center gap-2 justify-end'
          }
        >
          <motion.span
            className="relative z-[1] hidden md:block text-sm overflow-hidden whitespace-nowrap"
            variants={bounceFadeMaxW}
          >
            Create a new Responsibility
          </motion.span>
          <span className="relative z-[2] text-4xl text-primary">
            <HiPlusCircle />
          </span>
        </motion.button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl w-full">
        <DialogHeader>
          <DialogTitle>Create Responsibility</DialogTitle>
          <DialogDescription className="space-y-1" asChild>
            <div>
              <p className="text-muted-foreground">
                Add a name, description, and an emoji for your new
                responsibility.
              </p>
              <p className="text-muted-foreground">
                Here&apos;s a preview of how it will look on your list:
              </p>
            </div>
            {/* <Separator className='!mt-4' /> */}
          </DialogDescription>
        </DialogHeader>
        <CreateResponsibilityForm />
      </DialogContent>
    </Dialog>
  )
}
