import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import HeroBackground from '@/components/content/HeroBackground'
import WavyText from '@/components/animated/WavyText'
import FreeBadge from '@/components/animated/home/FreeBadge'
import HeroContent from '@/components/animated/home/HeroContent'

export default function Hero() {
  return (
    <HeroBackground>
      <div className="my-9 flex flex-col justify-center items-center gap-2 py-16 lg:py-24">
        <div className="max-w-3xl w-full text-white space-y-9">
          <FreeBadge />
          <WavyText text="Offload Adulty,/Time-related Tasks" />
          <HeroContent />
        </div>
      </div>
    </HeroBackground>
  )
}
