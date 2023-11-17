'use client'

import { bounceFadeMaxW, scale } from '@/util/animation'
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
import PlusButton from '@/components/animated/PlusButton'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'
import { Responsibility } from '@/types/Responsibility'

export default function ResponsibilitiesModal({
  addResponsibility,
}: {
  addResponsibility: (responsibility: Responsibility) => void
}) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Dialog open={open} onOpenChange={(o) => setOpen(o)}>
      <DialogTrigger asChild>
        <div>
          <PlusButton>Create a new Responsibility</PlusButton>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl w-full">
        <DialogHeader>
          <DialogTitle>Create Responsibility</DialogTitle>
          <DialogDescription className="space-y-1" asChild>
            <div className="[&>p]:text-muted-foreground space-y-2">
              <p>
                Please enter a name for your new responsibility.
                <br />
                You can optionally add a description, emoji, and color to be
                displayed with any tasks you create related to it.
              </p>
              <p>Here&apos;s a preview of how it will look on your list:</p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <CreateResponsibilityForm
          closeModal={() => setOpen(false)}
          addResponsibility={addResponsibility}
        />
      </DialogContent>
    </Dialog>
  )
}
