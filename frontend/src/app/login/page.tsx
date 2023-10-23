import HeroBackground from '@/components/content/HeroBackground'
import LargeForm from '@/components/content/LargeForm'
import LoginForm from '@/components/forms/LoginForm'
import Image from 'next/image'
import Quiggo from '@/assets/img/quiggo.jpg'

export default function Login() {
  return (
    <main className="pt-0">
      <HeroBackground hideMobile>
        <div className="py-24">
          <LargeForm form={<LoginForm />} image={Quiggo} />
        </div>
      </HeroBackground>
    </main>
  )
}
