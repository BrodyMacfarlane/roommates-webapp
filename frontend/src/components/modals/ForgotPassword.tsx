'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import ForgotPasswordForm from '@/components/forms/ForgotPassword'

export default function ForgotPasswordModal() {
  const [passwordResetSuccessful, setPasswordResetSuccessful] = useState(
    null as boolean | null
  )

  return (
    <Dialog>
      <DialogTrigger>
        <span className="font-medium hover:underline text-sm text-primary p-2 !m-0">
          Forgot Your Password?
        </span>
      </DialogTrigger>
      <DialogContent className="container">
        <DialogHeader>
          <DialogTitle>
            {passwordResetSuccessful
              ? 'Password Reset Requested'
              : 'Forgot Your Password?'}
          </DialogTitle>
          <DialogDescription>
            {passwordResetSuccessful
              ? "We've emailed you a link to reset your password."
              : 'Please enter your email, and we will send you a link to reset your password.'}
          </DialogDescription>
          {passwordResetSuccessful ? (
            <></>
          ) : (
            <ForgotPasswordForm
              setPasswordResetSuccessful={setPasswordResetSuccessful}
            />
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
