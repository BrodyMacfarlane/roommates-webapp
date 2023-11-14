'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { useRouter, useSearchParams } from 'next/navigation'
import { Button, buttonVariants } from '@/components/animated/button'

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
import FormError from './FormError'
import { apiAxios } from '@/util/api'
import AnimatedLink from '../animated/AnimatedLink'
import { AuthUser } from '@/state/context/AuthContext'
import { useAuthContext } from '@/state/context/AuthContext'

const formSchema = z.object({
  email: z.string().min(1, {
    message: 'Please enter your Email Address.',
  }),
  password: z.string().min(1, {
    message: 'Please enter your Password.',
  }),
  rememberMe: z.boolean(),
})

export default function SignInForm() {
  const { setAuth, setAuthUser } = useAuthContext()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const [loginError, setLoginError] = useState(null as string | null)
  const [submittingForm, setSubmittingForm] = useState(false)
  const email = form.watch('email')
  const password = form.watch('password')
  const rememberMe = form.watch('rememberMe')
  const router = useRouter()
  const query = useSearchParams()
  const redirectUrl = query.get('redirectUrl')

  async function onSubmit() {
    setSubmittingForm(true)
    const { email, password, rememberMe } = form.getValues()

    try {
      const response = await apiAxios.post<AuthUser>('/login', {
        email,
        password,
        rememberMe,
      })

      if (response.status === 200) {
        setAuthUser(response.data)
        return router.push(redirectUrl ? redirectUrl : '/dashboard')
      } else {
        setLoginError(
          'Error occurred while attempting login. Please try again later.'
        )
        setSubmittingForm(false)
      }
    } catch (err: any) {
      setLoginError(
        err.response.data.error
          ? err.response.data.error
          : err.message
          ? err.message
          : err
      )
      setSubmittingForm(false)
    }
  }

  useEffect(() => {
    setLoginError(null)
  }, [email, password])

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
          <h3>Log in to Your Account</h3>
          <p className="text-muted-foreground">
            Please enter your email and password.
          </p>
        </div>
      </div>
      <FormError errorMessage={loginError} />
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
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      id="remember"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <div className="w-full flex justify-between items-center !mt-0">
                    <FormLabel
                      htmlFor="remember"
                      className="text-sm font-normal"
                    >
                      Remember Me
                    </FormLabel>
                    <ForgotPasswordModal />
                  </div>
                </FormItem>
              )}
            />
            <div>
              <Button
                id="signin"
                className="w-full md:text-base"
                fetchText="Attempting log in"
                fetching={submittingForm}
                type="submit"
              >
                Login
              </Button>
            </div>
            <div className="relative w-full text-center">
              <div className="absolute top-1/2 left-0 h-[2px] bg-slate-200 w-full rounded-full"></div>
              <p className="relative inline-block z-[1] bg-background dark:bg-background text-muted-foreground text-sm px-2">
                Don&apos;t have an account?
              </p>
            </div>
            <div>
              <AnimatedLink
                linkProps={{ href: '/signup' }}
                buttonProps={{
                  className: 'w-full md:text-base',
                  variant: 'secondary',
                }}
              >
                Create an Account
              </AnimatedLink>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
