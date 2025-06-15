import { create } from 'zustand'

export type LaboratoryStoreType = {
  search: string
  selectedFilter: string
  setSearch: (text: string) => void
  setSelectedFilter: (filter: string) => void
}

export const useLaboratoryStore = create<LaboratoryStoreType>((set) => ({
  search: '',
  selectedFilter: 'todos',
  setSearch: (text) => set({ search: text }),
  setSelectedFilter: (filter) => set({ selectedFilter: filter }),
}))
