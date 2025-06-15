import { ScrollArea } from '../ui/scroll-area'
import { Skeleton } from '../ui/skeleton'

export function RoutinesListSkeleton() {
  return (
    <ScrollArea className="mt-2 overflow-hidden">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="mb-2 h-[175px] w-full overflow-hidden rounded-[9px] border p-4"
        >
          <div className="flex justify-between">
            <div className="grid space-y-3">
              <Skeleton className="h-3 w-[215px]" />
              <div className="ml-4 space-y-3">
                <Skeleton className="h-3 w-[125px]" />
                <Skeleton className="h-3 w-[145px]" />
                <Skeleton className="h-3 w-[165px]" />
                <Skeleton className="h-3 w-[185px]" />
                <Skeleton className="h-3 w-[205px]" />
              </div>
            </div>

            <div className="grid">
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} className="h-3 w-[55px]" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </ScrollArea>
  )
}
