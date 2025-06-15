'use client'

import { useForm } from 'react-hook-form'
import { Icons } from '../icons'
import { Button } from '../ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer'
import { Form } from '../ui/form'

import { zodResolver } from '@hookform/resolvers/zod'
import { ScrollArea } from '../ui/scroll-area'

import { routineFormSchema, type RoutineFormSchema } from './routine-schema'
import { RoutineFormFields } from './routine-form-fields'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createRoutine } from '@/services/routine'
import { toast } from 'sonner'

export function RoutineCreateForm() {
  const [open, setOpen] = useState(false)
  const queryClient = useQueryClient()

  const form = useForm<RoutineFormSchema>({
    resolver: zodResolver(routineFormSchema),
    defaultValues: {
      time: '',
      title: '',
      components: [{ name: '', amount: 0, unit: '' }],
      nutritionalInfo: {
        cho: 0,
        ptn: 0,
        lip: 0,
        miliAbsorbanceUnits: 0,
      },
      observations: '',
    },
  })

  const { mutateAsync: createRoutineFn } = useMutation({
    mutationFn: createRoutine,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['routines'] })
    },
  })

  async function onSubmit(values: RoutineFormSchema) {
    try {
      await createRoutineFn(values)
      form.reset()
      setOpen(false)
      toast.success('Rotina criada com sucesso!')
    } catch (error) {
      console.error(error)
    }
  }

  const {
    formState: { isSubmitting },
  } = form

  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
      dismissible={!isSubmitting}
      direction="right"
    >
      <DrawerTrigger asChild>
        <Button size="sm">
          <Icons.plus />
          Adicionar Rotina
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Adicionar nova Rotina</DrawerTitle>
        </DrawerHeader>

        <ScrollArea className="overflow-hidden">
          <Form {...form}>
            <form id="routine-form" onSubmit={form.handleSubmit(onSubmit)}>
              <RoutineFormFields />
            </form>
          </Form>
        </ScrollArea>

        <DrawerFooter className="border-t">
          <DrawerClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DrawerClose>

          <Button form="routine-form" type="submit">
            Salvar Rotina
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
