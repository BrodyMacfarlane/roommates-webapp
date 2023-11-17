import { invertColor } from '@/util/color'

export default function EmojiPlaceholder({
  name,
  bgColor,
}: {
  name: string
  bgColor?: string | null
}) {
  return (
    <div>
      <div
        className="w-8 h-8 flex justify-center items-center text-2xl font-semibold select-none"
        style={bgColor ? { color: invertColor(bgColor, true) } : {}}
      >
        {name[0] || '-'}
      </div>
    </div>
  )
}
