'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import Image from 'next/image'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import FormError from '@/components/forms/FormError'
import { useForm } from 'react-hook-form'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import EmojiPicker, { Theme } from 'emoji-picker-react'
import { DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
// import TaskCard from '@/components/tasks/TaskCard'
import { useCallback, useEffect, useRef, useState } from 'react'
import { apiAxios } from '@/util/api'
import { Task } from '@/types/Task'
import EmojiPlaceholder from '@/components/EmojiPlaceholder'
import { HexColorPicker } from 'react-colorful'
import { HiX } from 'react-icons/hi'

const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: 'Please enter a name for your task.',
    })
    .max(25, {
      message: 'Name cannot exceed 25 characters in length',
    }),
  description: z
    .string()
    .max(255, {
      message: 'Description cannot exceed 255 characters in length.',
    })
    .optional(),
  emoji: z
    .string()
    .max(7, {
      message: 'Must be a valid emoji string.',
    })
    .nullable(),
  color: z
    .string()
    .min(7, {
      message: 'Must be a valid color hex.',
    })
    .max(7, {
      message: 'Must be a valid color hex.',
    })
    .nullable(),
})

export default function CreateTaskForm({
  closeModal,
  addTask,
}: {
  closeModal: () => void
  addTask: (task: Task) => void
}) {
  const [submittingForm, setSubmittingForm] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })

  async function onSubmit() {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 my-4">
        <DialogFooter>
          <Button
            className="w-full shadow-md h-16 rounded-none"
            size="lg"
            type="submit"
            fetching={submittingForm}
            fetchText="Creating Task"
          >
            Create Task
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}
