'use client'

import { listRoutines } from '@/services/routine'
import { useQuery } from '@tanstack/react-query'
import { RoutineCard } from './routine-card'
import { ScrollArea } from '../ui/scroll-area'
import { cn } from '@/lib/utils'
import { RoutinesListSkeleton } from './routines-list-skeleton'
import { useLaboratoryStore } from '@/store/laboratory-store'
import { useMemo } from 'react'

const TIME_FILTERS = {
  matinal: { start: '06:00', end: '12:00' },
  vespertino: { start: '12:00', end: '18:00' },
  noturno: { start: '18:00', end: '23:59' },
} as const

export function RoutinesList() {
  const { search, selectedFilter } = useLaboratoryStore()

  const { data: routines, isLoading } = useQuery({
    queryKey: ['routines'],
    queryFn: listRoutines,
  })

  const filteredRoutines = useMemo(() => {
    if (!routines) return []

    return routines.filter((routine) => {
      const searchTerm = search.toLowerCase().trim()
      const matchesSearch =
        !searchTerm ||
        routine.title.toLowerCase().includes(searchTerm) ||
        routine.components.some((comp) =>
          comp.name.toLowerCase().includes(searchTerm),
        )

      if (!matchesSearch) return false

      if (selectedFilter === 'todos') return true

      const routineTime = routine.time
      const filter = TIME_FILTERS[selectedFilter as keyof typeof TIME_FILTERS]

      if (!filter) return true

      return routineTime >= filter.start && routineTime < filter.end
    })
  }, [routines, search, selectedFilter])

  if (isLoading) return <RoutinesListSkeleton />

  return (
    <ScrollArea className="overflow-hidden">
      {filteredRoutines.length > 0 ? (
        <div className="mr-2.5 grid gap-2 pb-6">
          {filteredRoutines?.map((routine, index) => (
            <RoutineCard
              key={routine.id}
              routine={routine}
              className={cn(index % 2 === 1 ? 'bg-muted' : '')}
            />
          ))}
        </div>
      ) : (
        <div className="text-muted-foreground mt-2 flex items-center justify-center p-8">
          <div className="text-center">
            <p className="text-sm">Nenhuma rotina encontrada</p>
            <p className="mt-1 text-xs">
              Tente ajustar os filtros ou termo de busca
            </p>
          </div>
        </div>
      )}
    </ScrollArea>
  )
}
