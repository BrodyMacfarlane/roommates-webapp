import { Card } from '@/components/ui/card'
import GeoFenceClientPage from '@/app/client-pages/GeoFence'

export default function GeoFence() {
  return (
    <main className="relative">
      <section>
        <h1 className="sr-only">Geo Fence Easter Egg</h1>
        <Card
          variant="flat"
          className="min-h-[80vh] flex flex-col justify-center text-center space-y-4"
        >
          <GeoFenceClientPage />
        </Card>
      </section>
    </main>
  )
}
