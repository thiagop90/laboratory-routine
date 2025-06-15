import { z } from 'zod'

export const componentSchema = z.object({
  name: z.string().min(1, 'Nome do componente é obrigatório'),
  amount: z.number().min(0.1, 'Quantidade é obrigatória'),
  unit: z.string().min(1, 'Unidade é obrigatória'),
})

export const nutritionalInfoSchema = z.object({
  cho: z.number().min(0.1, 'Mínimo 0.1'),
  ptn: z.number().min(0.1, 'Mínimo 0.1'),
  lip: z.number().min(0.1, 'Mínimo 0.1'),
  miliAbsorbanceUnits: z.number().min(0.1, 'Mínimo 0.1'),
})

export const routineFormSchema = z.object({
  time: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Obrigatório'),
  title: z.string().min(1, 'Título é obrigatório'),
  components: z
    .array(componentSchema)
    .min(1, 'Pelo menos um componente é obrigatório'),
  nutritionalInfo: nutritionalInfoSchema,
  observations: z.string().optional(),
})

export type RoutineFormSchema = z.infer<typeof routineFormSchema>
export type ComponentSchema = z.infer<typeof componentSchema>
export type NutritionalInfoSchema = z.infer<typeof nutritionalInfoSchema>
