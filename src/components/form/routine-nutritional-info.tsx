import { useFormContext } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import type { RoutineFormSchema } from './routine-schema'

type NutritionalField = {
  name: keyof RoutineFormSchema['nutritionalInfo']
  label: string
  unit: string
}

export function RoutineNutritionalInfo() {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext<RoutineFormSchema>()

  const nutritionalFields: NutritionalField[] = [
    { name: 'cho', label: 'Carboidratos', unit: 'g' },
    { name: 'ptn', label: 'Proteínas', unit: 'g' },
    { name: 'lip', label: 'Lipídios', unit: 'g' },
    {
      name: 'miliAbsorbanceUnits',
      label: 'Mili Absorbance Units',
      unit: 'mAU',
    },
  ]

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Informações Nutricionais</h3>

      <div className="grid grid-cols-2 items-start gap-3">
        {nutritionalFields.map((info) => (
          <FormField
            key={info.name}
            control={control}
            name={`nutritionalInfo.${info.name}`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {info.label} ({info.unit})
                </FormLabel>
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
        ))}
      </div>
    </div>
  )
}
