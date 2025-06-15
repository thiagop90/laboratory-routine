import { useFieldArray, useFormContext } from 'react-hook-form'
import { Button } from '../ui/button'
import { Plus, Trash } from 'lucide-react'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import type { RoutineFormSchema } from './routine-schema'

export function RoutineComponentCard() {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext<RoutineFormSchema>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'components',
  })

  function addComponent() {
    append({ name: '', amount: 0, unit: '' })
  }

  function removeComponent(index: number) {
    if (fields.length > 1) {
      remove(index)
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Componentes</h3>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={addComponent}
          disabled={isSubmitting}
        >
          <Plus />
          Adicionar
        </Button>
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className="space-y-3 rounded-lg border p-4">
          <div className="relative">
            <span className="text-sm font-medium">Componente {index + 1}</span>
            {fields.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-0 right-0 rounded-full"
                onClick={() => removeComponent(index)}
                disabled={isSubmitting}
              >
                <Trash />
              </Button>
            )}
          </div>

          <FormField
            control={control}
            name={`components.${index}.name`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    {...field}
                    placeholder="Nome do componente"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 items-start gap-3">
            <FormField
              control={control}
              name={`components.${index}.amount`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantidade</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      min="0"
                      step="0.1"
                      disabled={isSubmitting}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`components.${index}.unit`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unidade</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione a unidade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mL">mL</SelectItem>
                        <SelectItem value="mg">mg</SelectItem>
                        <SelectItem value="gotas">gota(s)</SelectItem>
                        <SelectItem value="unidade">unidade</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
