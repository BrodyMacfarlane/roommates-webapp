'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import CreateTaskForm from '@/components/forms/CreateTask'
import PlusButton from '@/components/animated/PlusButton'
import { useState } from 'react'
import { Task } from '@/types/Task'

export default function TasksModal({
  addTask,
}: {
  addTask: (task: Task) => void
}) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Dialog open={open} onOpenChange={(o) => setOpen(o)}>
      <DialogTrigger asChild>
        <div>
          <PlusButton>Create a new Task</PlusButton>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl w-full">
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
          <DialogDescription className="space-y-1" asChild>
            <div className="[&>p]:text-muted-foreground space-y-2">
              <p>
                Please enter a name, description, and frequency for your new
                task.
              </p>
              <p>Here&apos;s a preview of how it will look on your list:</p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <CreateTaskForm closeModal={() => setOpen(false)} addTask={addTask} />
      </DialogContent>
    </Dialog>
  )
}
