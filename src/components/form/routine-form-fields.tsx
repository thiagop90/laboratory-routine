import { useFormContext } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import type { RoutineFormSchema } from './routine-schema'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'
import { RoutineComponentCard } from './routine-component-card'
import { RoutineNutritionalInfo } from './routine-nutritional-info'
import { Textarea } from '../ui/textarea'

export function RoutineFormFields() {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext<RoutineFormSchema>()

  return (
    <div className="space-y-5 px-5 pb-4">
      <div className="grid grid-cols-[auto_1fr] items-start gap-3">
        <FormField
          control={control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Horário</FormLabel>
              <FormControl>
                <Input type="time" disabled={isSubmitting} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input
                  disabled={isSubmitting}
                  placeholder="Título da rotina"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <Separator />

      <RoutineComponentCard />

      <Separator />

      <RoutineNutritionalInfo />

      <Separator />

      <FormField
        control={control}
        name="observations"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Observações (opcional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Adicione observações adicionais..."
                className="resize-none"
                rows={3}
                disabled={isSubmitting}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
