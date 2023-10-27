import { Card } from '@/components/ui/card'

export default function GeoFence() {
  return (
    <main className="relative">
      <section>
        <h1 className="sr-only">Geo Fence Easter Egg</h1>
        <Card className="p-4">
          <h5 className="font-semibold text-secondary-foreground/80">
            Waiting for an event..
          </h5>
        </Card>
      </section>
    </main>
  )
}
