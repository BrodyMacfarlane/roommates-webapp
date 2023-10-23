import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import HeroBackground from '@/components/content/HeroBackground'

export default function Hero() {
  return (
    <HeroBackground>
      <div className="my-9 flex flex-col justify-center items-center gap-2 py-16 lg:py-24">
        <div className="max-w-3xl w-full text-white space-y-9">
          <div className="flex gap-2 justify-center items-center">
            <Badge className="bg-roommates-blue hover:bg-roommates-blue">
              Free
            </Badge>
            <p className="text-white/60 text-sm font-light">
              Costs absolutely $0.
            </p>
          </div>
          <h1 className="text-center leading-tight text-white text-4xl md:text-6xl lg:text-7xl">
            Offload Adulty,
            <br />
            Time-related Tasks
          </h1>
          <p className="text-white/60 text-center font-light text-lg">
            Get reminders for housework, pet care, car maintenance, and more.
            <br />
            All in one place with those who share the responsibilities with you.
          </p>
          <div className="flex justify-center items-center gap-2">
            <Link
              href="/signup"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'bg-white text-primary hover:bg-slate-100 hover:text-roommates-blue dark:hover:text-roommates-blue'
              )}
            >
              Get Started
            </Link>
            <Link href="/about" className={buttonVariants({ size: 'lg' })}>
              Learn More
            </Link>
          </div>
          <div className="space-y-2">
            <p className="text-white/60 text-center font-light text-sm">
              Existing user?{' '}
              <Link
                href="/login"
                className="font-bold text-white hover:text-white hover:underline"
              >
                Login here
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </HeroBackground>
  )
}
