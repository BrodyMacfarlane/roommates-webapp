import ChristmasCardClientPage from '@/app/client-pages/ChristmasCard'
import localFont from "next/font/local"

const handwriting = localFont({
  src: [
    {
      path: '../../../assets/christmas/fonts/handwriting.ttf',
      weight: '400',
    },
  ],
  variable: '--font-handwriting',
})

export default function ChristmasCard() {
  return (
    <main
      className={`${handwriting.variable} font-handwriting uppercase text-2xl md:text-3xl`}
    >
      <ChristmasCardClientPage />
    </main>
  )
}
