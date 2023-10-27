'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { useRouter } from 'next/navigation'
import { Button, buttonVariants } from '@/components/ui/button'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import Checkbox from '@/components/alt-ui/checkbox'
import { Input } from '@/components/ui/input'

import { useForm } from 'react-hook-form'

import { useEffect, useState } from 'react'

import ForgotPasswordModal from '@/components/modals/ForgotPassword'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import FormError from '@/components/forms/FormError'

import validator from 'validator'
import { passwordValidate } from '@/util/validation'
import useSwr from 'swr'
import { apiAxios } from '@/util/api'

const formSchema = z
  .object({
    email: z.string().email({
      message: 'Please enter a valid email address.',
    }),
    password: z
      .string()
      .min(
        8,
        'Password must be at least 8 characters and have at least 1 capital letter, lowercase letter, and number.'
      )
      .max(30, 'Password cannot exceed 30 characters in length.')
      .refine(
        passwordValidate,
        'Password must be at least 8 characters and have at least 1 capital letter, lowercase letter, and number.'
      ),
    confirmPassword: z.string().min(1, {
      message: 'Please enter your Password.',
    }),
    terms: z.literal<boolean>(true, {
      errorMap: () => ({
        message: 'You must accept the listed terms of use and privacy policy.',
      }),
    }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        path: ['confirmPassword'],
        code: 'custom',
        message: 'Passwords do not match, please double check your inputs.',
      })
    }
  })

export default function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  })

  const [signUpError, setSignUpError] = useState(null as string | null)
  const [submittingForm, setSubmittingForm] = useState(false)
  const email = form.watch('email')
  const password = form.watch('password')
  const terms = form.watch('terms')

  async function onSubmit() {
    const { email, password, terms } = form.getValues()
    setSubmittingForm(true)

    try {
      const response = await apiAxios.post('/user', {
        email,
        password,
        terms,
      })

      console.log(response)
    } catch (err: any) {
      setSignUpError(err.message ? err.message : err)
      setSubmittingForm(false)
    }
  }

  useEffect(() => {
    setSignUpError(null)
  }, [email, password, terms])

  return (
    <div className="space-y-4 mx-auto w-full max-w-lg flex flex-col gap-2 text-center justify-center col-start-1 lg:col-start-2 col-span-2 lg:col-span-1 my-2 lg:my-12 py-2 sm:py-20 sm:px-8 lg:px-12">
      <div className="space-y-2">
        <Image
          className="mx-auto"
          src="/logo-small.svg"
          alt="RM8s"
          width={48}
          height={48}
          draggable={false}
        />
        <div className="">
          <h3>Create An Account</h3>
          <p className="text-muted-foreground">
            Enter your email and a password to get started.
          </p>
        </div>
      </div>
      <FormError errorMessage={signUpError} />
      <div className="text-left">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 my-2"
          >
            <FormField
              control={form.control}
              name="email"
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="current-password"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="py-2">
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-3">
                      <FormControl>
                        <Checkbox
                          id="terms"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <div className="w-full flex justify-between items-center !mt-0">
                        <FormLabel
                          htmlFor="terms"
                          className="text-sm font-normal text-muted-foreground"
                        >
                          I agree to the Roommates&nbsp;
                          <Link
                            className="text-roommates-blue dark:text-white/90 font-semibold hover:border-b-2 border-roommates-purple"
                            href="/"
                          >
                            Terms of Use
                          </Link>
                          &nbsp;and&nbsp;
                          <Link
                            className="text-roommates-blue dark:text-white/90 font-semibold hover:border-b-2 border-roommates-purple"
                            href="/"
                          >
                            Privacy Policy
                          </Link>
                          .
                        </FormLabel>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <Button
                id="signup"
                className="w-full md:text-base"
                type="submit"
                fetchText="Creating Account"
                fetching={submittingForm}
              >
                Create Account
              </Button>
            </div>
            <div className="relative w-full text-center">
              <div className="absolute top-1/2 left-0 h-[2px] bg-slate-200 w-full rounded-full"></div>
              <p className="relative inline-block z-[1] bg-background text-muted-foreground text-sm px-2">
                Already have an account?
              </p>
            </div>
            <div>
              <Link
                href="/login"
                className={cn(
                  'w-full md:text-base',
                  buttonVariants({ variant: 'secondary' })
                )}
              >
                Log In
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
