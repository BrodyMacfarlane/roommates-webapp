export default function EmojiPlaceholder({ name }: { name: string }) {
  return (
    <div className="w-8 h-8 flex justify-center items-center text-2xl">
      {name[0] || '-'}
    </div>
  )
}
