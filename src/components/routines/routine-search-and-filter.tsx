'use client'

import { useLaboratoryStore } from '@/store/laboratory-store'
import { Search } from 'lucide-react'
import { Input } from '../ui/input'
import { Button, buttonVariants } from '../ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select'
import { cn } from '@/lib/utils'

export function RoutineSearchAndFilter() {
  const { search, selectedFilter, setSearch, setSelectedFilter } =
    useLaboratoryStore()

  return (
    <div className="flex gap-2 border-b pb-2">
      <div className="relative">
        <Search className="absolute top-2 left-3 size-4" />
        <Input
          type="text"
          placeholder="Buscar rotinas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-8 w-[350px] pl-10"
        />
      </div>

      <Button type="submit" size="sm">
        Buscar
      </Button>

      <Select value={selectedFilter} onValueChange={setSelectedFilter}>
        <SelectTrigger
          size="sm"
          className={cn(
            buttonVariants({ variant: 'secondary' }),
            '[&_svg]:hidden',
          )}
        >
          Filtragem Avançada
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todos">Todos os períodos</SelectItem>
          <SelectItem value="matinal">Matinal (06:00-12:00)</SelectItem>
          <SelectItem value="vespertino">Vespertino (12:00-18:00)</SelectItem>
          <SelectItem value="noturno">Noturno (18:00+)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
