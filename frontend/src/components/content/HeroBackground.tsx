import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function HeroBackground({
  children,
  hideMobile,
}: {
  children: JSX.Element
  hideMobile?: boolean
}) {
  return (
    <div
      className={cn(
        'relative min-h-screen flex items-center',
        hideMobile
          ? 'bg-white dark:bg-gray-900 md:bg-gradient-to-b md:from-roommates-purple md:to-roommates-blue'
          : 'bg-gradient-to-b from-roommates-purple to-roommates-blue'
      )}
    >
      <section className="relative z-10 sc">{children}</section>
      <div
        className={cn(
          'absolute z-0 left-0 top-0 h-full w-full max-w-[69%] lg:max-w-lg xl:max-w-2xl',
          hideMobile ? 'hidden md:block' : ''
        )}
      >
        <Image
          src="items-bg.svg"
          alt=""
          fill
          className="object-cover object-right"
        />
      </div>
      <div className="hidden lg:block absolute z-0 right-0 top-0 h-full w-full max-w-lg xl:max-w-2xl">
        <Image
          src="items-bg-reversed.svg"
          alt=""
          fill
          className="object-cover object-left"
        />
      </div>
    </div>
  )
}
