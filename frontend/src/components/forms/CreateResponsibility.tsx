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
import ResponsibilityCard from '@/components/tasks/ResponsibilityCard'
import { useState } from 'react'
import { apiAxios } from '@/util/api'
import { Responsibility } from '@/types/Responsibility'

const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: 'Please enter a name for your responsibility.',
    })
    .max(25, {
      message: 'Name cannot exceed 25 characters in length',
    }),
  description: z.string().max(255, {
    message: 'Description cannot exceed 255 characters in length.',
  }),
  emoji: z.string().max(7, {
    message: 'Must be a valid emoji string.',
  }),
})

export default function CreateResponsibilityForm() {
  const { theme } = useTheme()
  const [
    createResponsibilityRequestError,
    setCreateResponsibilityRequestError,
  ] = useState<string | null>(null)
  const [submittingForm, setSubmittingForm] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      emoji: '',
    },
  })

  const setEmoji = (emoji: string) => {
    form.setValue('emoji', emoji)
  }

  const emoji = form.watch('emoji')
  const name = form.watch('name')
  const description = form.watch('description')

  async function onSubmit() {
    setSubmittingForm(true)
    const { name, description, emoji } = form.getValues()

    try {
      const response = await apiAxios.post<Responsibility>('/responsibility', {
        name,
        description,
        emoji,
      })

      if (response.status === 200) {
        console.log(response.data)
      } else {
        setCreateResponsibilityRequestError(
          'Error occurred while creating responsibility. Please try again later.'
        )
        setSubmittingForm(false)
      }
    } catch (err: any) {
      setCreateResponsibilityRequestError(
        err.response.data.error
          ? err.response.data.error
          : err.message
          ? err.message
          : err
      )
      setSubmittingForm(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 my-4">
        <ResponsibilityCard
          name={name}
          description={description}
          emoji={emoji}
        />
        <div>
          <FormError errorMessage={createResponsibilityRequestError} />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    autoComplete="none"
                    placeholder="e.g. Quigley"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    autoComplete="none"
                    placeholder="e.g. The tri-colored doggo."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormLabel className="w-full">Emoji</FormLabel>
          {emoji ? (
            <div>
              <button onClick={() => setEmoji('')}>
                <div className="flex rounded-md p-4 border shadow-sm">
                  <Image
                    alt=""
                    src={`https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/${emoji}.png`}
                    width={32}
                    height={32}
                  />
                </div>
              </button>
            </div>
          ) : (
            <div>
              <EmojiPicker
                autoFocusSearch={false}
                onEmojiClick={(emoji) => setEmoji(emoji.unified)}
                previewConfig={{ showPreview: false }}
                width="100%"
                theme={theme ? (theme as Theme) : ('auto' as Theme)}
              />
            </div>
          )}
        </div>
        <DialogFooter>
          <Button
            className="w-full shadow-md h-16 rounded-none"
            size="lg"
            type="submit"
          >
            Create Responsibility
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}
