import React, { Dispatch, SetStateAction, useCallback, useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/animated/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

type FormSchema = z.infer<typeof formSchema>

const formSchema = z.object({
  selectedRecoveryOptionValue: z
    .string()
    .min(1, {
      message: `Please enter your email.`,
    })
    .email(),
})

export default function ForgotPasswordForm({
  setPasswordResetSuccessful,
}: {
  setPasswordResetSuccessful: Dispatch<SetStateAction<boolean | null>>
}) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectedRecoveryOptionValue: '',
    },
  })

  const onSubmit = ({ selectedRecoveryOptionValue }: FormSchema) => {}

  const handleSubmitNoPropogation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    form.handleSubmit(onSubmit)(e)
  }

  return (
    <div>
      <Form {...form}>
        <form
          method="post"
          onSubmit={handleSubmitNoPropogation}
          className="space-y-6 my-2 text-left"
        >
          <FormField
            control={form.control}
            name="selectedRecoveryOptionValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email Address"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button id="forgot-password" type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
