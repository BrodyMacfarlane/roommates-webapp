import HeroBackground from '@/components/content/HeroBackground'
import LargeForm from '@/components/content/LargeForm'
import SignupForm from '@/components/forms/SignupForm'
import Quiggo from '@/assets/img/quiggo.jpg'
import { Suspense } from 'react'

export default function Signup() {
  return (
    <main className="pt-0">
      <HeroBackground hideMobile>
        <div className="pt-24 pb-12">
          <LargeForm
            form={
              <Suspense>
                <SignupForm />
              </Suspense>
            }
            image={Quiggo}
          />
        </div>
      </HeroBackground>
    </main>
  )
}
