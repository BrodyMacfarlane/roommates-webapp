'use client'

import { Card } from '@/components/ui/card'
import { child } from '@/util/animation'
import { motion } from 'framer-motion'
import ResponsibilitiesModal from '@/components/modals/Responsibilities'
import useSwr from 'swr'
import { Responsibility } from '@/types/Responsibility'
import { apiFetcher } from '@/util/api'
import ResponsibilityCard from '@/components/tasks/ResponsibilityCard'
import { Skeleton } from '@/components/ui/skeleton'
import { useEffect, useState } from 'react'

function ResponsibilityData({
  data,
  isLoading,
  error,
}: {
  data: Responsibility[] | undefined
  isLoading: boolean
  error: any
}) {
  if (data && data.length) {
    return (
      <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center">
        {data.map((responsibility) => (
          <ResponsibilityCard
            key={responsibility.id}
            name={responsibility.name}
            description={responsibility.description}
            emoji={responsibility.emoji}
            color={responsibility.color ? `#${responsibility.color}` : null}
          />
        ))}
      </div>
    )
  } else if (!data?.length && !isLoading) {
    return (
      <Card variant="flat" className="space-y-2">
        <p className="text-muted-foreground">You have no responsibilities.</p>
      </Card>
    )
  } else return <Skeleton />
}

export default function ResponsibilitiesCard() {
  const [responsibilities, setResponsibilities] = useState<Responsibility[]>([])
  const { data, isLoading, error } = useSwr<Responsibility[]>(
    'responsibilities',
    apiFetcher
  )

  const addResponsibility = (responsibility: Responsibility) => {
    setResponsibilities((rs) => rs.concat(responsibility))
  }

  useEffect(() => {
    if (data) setResponsibilities(data)
  }, [data])

  return (
    <motion.div variants={child}>
      <Card className="space-y-4">
        <div className="flex justify-between gap-2 items-center">
          <div>
            <h5 className="font-semibold">Responsibilities</h5>
            <p className="text-muted-foreground">
              Your current responsibilities.
            </p>
          </div>
          <div>
            <ResponsibilitiesModal addResponsibility={addResponsibility} />
          </div>
        </div>
        <ResponsibilityData
          data={responsibilities}
          isLoading={isLoading}
          error={error}
        />
      </Card>
    </motion.div>
  )
}
