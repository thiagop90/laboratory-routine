import { cn } from '@/lib/utils'
import type { Routine } from '@/types/routine'
import type { ComponentProps } from 'react'

type RoutineCardType = {
  routine: Routine
} & ComponentProps<'div'>

export function RoutineCard({ routine, className }: RoutineCardType) {
  return (
    <div className={cn('w-full rounded-[9px] p-4', className)}>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 text-sm">
            <span className="font-semibold">{routine.time}</span>
            <span>-</span>
            <h3 className="font-semibold">{routine.title}</h3>
          </div>

          <div className="ml-4 space-y-2">
            {routine.components.map((component, index) => (
              <div key={index} className="flex items-center gap-1 text-sm">
                <span>{component.name}</span>
                <span>-</span>
                <span>
                  {component.amount} {component.unit}
                </span>
              </div>
            ))}

            {routine.observations && (
              <div className="text-muted-foreground text-xs">
                Observação: {routine.observations}
              </div>
            )}
          </div>
        </div>

        <div className="grid gap-4 text-right text-sm font-medium">
          <span>CHO: {routine.nutritionalInfo.cho}g</span>
          <span>PTN: {routine.nutritionalInfo.ptn}g</span>
          <span>LIP: {routine.nutritionalInfo.lip}g</span>
          <span className="text-primary">
            {routine.nutritionalInfo.miliAbsorbanceUnits} mAU
          </span>
        </div>
      </div>
    </div>
  )
}
