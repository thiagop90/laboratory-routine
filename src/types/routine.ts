export type Component = {
  name: string
  amount: number
  unit: string
}

export type NutritionalInfo = {
  cho: number
  ptn: number
  lip: number
  miliAbsorbanceUnits: number
}

export type Routine = {
  id: string
  time: string
  title: string
  components: Component[]
  nutritionalInfo: NutritionalInfo
  observations?: string
}
