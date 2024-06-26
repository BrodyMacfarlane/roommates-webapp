import HeroBackground from '@/components/content/HeroBackground'
import LargeForm from '@/components/content/LargeForm'
import LoginForm from '@/components/forms/LoginForm'
import Image from 'next/image'
import Quiggo from '@/assets/img/quiggo.jpg'
import { Suspense } from 'react'

export default function Login() {
  return (
    <main className="pt-0">
      <HeroBackground hideMobile>
        <div className="pt-24 pb-12">
          <LargeForm
            form={
              <Suspense>
                <LoginForm />
              </Suspense>
            }
            image={Quiggo}
          />
        </div>
      </HeroBackground>
    </main>
  )
}
