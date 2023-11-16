'use client'

import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function ResponsibilityCard({
  name,
  description,
  emoji,
}: {
  name: string
  description?: string
  emoji?: string
}) {
  return (
    <Card
      variant="flat"
      className="space-y-2 flex flex-col items-center justify-center text-center cursor-pointer md:max-w-sm py-6 w-full"
    >
      <div className="flex rounded-full p-4 bg-background">
        {emoji ? (
          <Image
            alt=""
            src={`https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/${emoji}.png`}
            width={32}
            height={32}
            draggable={false}
          />
        ) : (
          <div className="w-8 h-8" />
        )}
      </div>
      <div className="space-y-1 select-none">
        <p className="text-lg font-medium">{name || 'Quigley'}</p>
        <p className="text-muted-foreground">
          {description || 'The tri-colored doggo.'}
        </p>
      </div>
    </Card>
  )
}
