'use client'

import { Card } from '@/components/ui/card'
import Image from 'next/image'
import EmojiPlaceholder from '@/components/EmojiPlaceholder'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'

export default function ResponsibilityCard({
  name,
  description,
  emoji,
  color,
  placeholders = false,
}: {
  name: string
  description: string | null
  emoji: string | null
  color: string | null
  placeholders?: boolean
}) {
  return (
    <Card
      variant="flat"
      className="space-y-2 flex flex-col items-center justify-center text-center md:max-w-sm py-6 w-full"
    >
      <div
        className={cn('flex rounded-full p-4', color ? '' : 'bg-background')}
        style={color ? { backgroundColor: color } : {}}
      >
        {emoji ? (
          <Image
            alt=""
            src={`https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/${emoji}.png`}
            width={32}
            height={32}
            draggable={false}
          />
        ) : (
          <EmojiPlaceholder name={name} bgColor={color} />
        )}
      </div>
      <div className="space-y-1 select-none">
        <p className="text-lg font-medium">
          {name ? name : placeholders ? 'Quigley' : ''}
        </p>
        <p className="text-muted-foreground">
          {description
            ? description
            : placeholders
              ? 'The tri-colored doggo.'
              : ''}
        </p>
      </div>
    </Card>
  )
}
