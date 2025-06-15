import { timeToMinutes } from '@/lib/time-to-minutes'
import type { Routine } from '@/types/routine'
import { ulid } from 'ulid'

export const mockRoutines: Routine[] = [
  {
    id: '1',
    time: '10:00',
    title: 'Procedimento Matinal',
    components: [
      { name: 'Solução A', amount: 5, unit: 'mL' },
      { name: 'Composto B ou C', amount: 250, unit: 'mg' },
      { name: 'Reagente Mediolab', amount: 2, unit: 'gotas' },
      { name: 'Catalisador (CATPURE)', amount: 5, unit: 'mg' },
    ],
    nutritionalInfo: { cho: 26, ptn: 25, lip: 1.3, miliAbsorbanceUnits: 215 },
    observations: 'Misturar em recipiente estéril. Executar em fluxo laminar',
  },
  {
    id: '2',
    time: '13:00',
    title: 'Procedimento de Meio-dia',
    components: [
      { name: 'Solução B', amount: 10, unit: 'mL' },
      { name: 'Composto D ou E', amount: 150, unit: 'mg' },
      { name: 'Reagente ClearMix', amount: 3, unit: 'gotas' },
      { name: 'Estabilizante (STABILAB)', amount: 2, unit: 'mg' },
    ],
    nutritionalInfo: { cho: 26, ptn: 25, lip: 1.3, miliAbsorbanceUnits: 189 },
    observations: 'Aguardar por 3 minutos antes de aplicar',
  },
  {
    id: '3',
    time: '16:30',
    title: 'Teste Térmico',
    components: [
      { name: 'Solução Térmica', amount: 7, unit: 'mL' },
      { name: 'Agente B ou C', amount: 300, unit: 'mg' },
      { name: 'Gotas de Neutralizante', amount: 2, unit: 'gotas' },
      { name: 'Controle de Temperatura', amount: 1, unit: 'unidade' },
      { name: 'Condutor (HEATPULSE)', amount: 6, unit: 'mg' },
    ],
    nutritionalInfo: { cho: 26, ptn: 25, lip: 1.3, miliAbsorbanceUnits: 202 },
    observations: 'Usar luvas nitrílicas reforçadas',
  },
  {
    id: '4',
    time: '18:00',
    title: 'Finalização do Ciclo',
    components: [
      { name: 'Solução de Lavagem', amount: 8, unit: 'mL' },
      { name: 'Composto X ou Z', amount: 200, unit: 'mg' },
      { name: 'Neutralizante Final', amount: 1, unit: 'gota' },
      { name: 'Agente Secativo', amount: 0.2, unit: 'mL' },
      { name: 'Catalisador (ENDO-CLEAN)', amount: 4, unit: 'mg' },
    ],
    nutritionalInfo: { cho: 26, ptn: 25, lip: 1.3, miliAbsorbanceUnits: 210 },
    observations: 'Armazenar amostra a 4°C',
  },
]

export async function listRoutines(): Promise<Routine[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [...mockRoutines].sort((a, b) => {
    return timeToMinutes(a.time) - timeToMinutes(b.time)
  })
}

export async function createRoutine(
  routine: Omit<Routine, 'id'>,
): Promise<Routine> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const newRoutine = { ...routine, id: ulid() }
  mockRoutines.push(newRoutine)
  return newRoutine
}
