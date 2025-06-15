import { RoutineCreateForm } from '@/components/form/routine-create-form'
import { Icons } from '@/components/icons'
import { RoutineSearchAndFilter } from '@/components/routines/routine-search-and-filter'
import { RoutinesList } from '@/components/routines/routines-list'

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[880px] flex-col p-6 pb-0">
      <header className="mb-12 space-y-8">
        <div className="flex items-center justify-between">
          <span className="font-medium">Cadastros</span>

          <div className="flex items-center gap-3.5">
            <span className="text-primary text-lg font-semibold">Alamo</span>

            <button
              type="button"
              className="bg-primary flex h-6 items-center gap-1 rounded-[5px] p-1.5"
            >
              <Icons.task />
              <span className="text-sm font-medium text-white">Tarefas</span>
            </button>

            <div className="flex gap-2">
              <Icons.notification />
              <Icons.info />
              <Icons.config />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-[28px] font-semibold">
            Gestão de rotinas de laboratório
          </h2>

          <RoutineCreateForm />
        </div>
      </header>

      <RoutineSearchAndFilter />

      <RoutinesList />
    </div>
  )
}
