import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { AnimalName } from './types/data';
import type { TableFilters } from './components/SortableCropsTable';

type State = {
  darkMode: boolean;
  toggleDarkMode: () => void;

  notes: string;
  setNotes: (notes: string) => void;

  userAnimalColors: Record<AnimalName, string[]>;
  addUserAnimalColor: (animal: AnimalName, color: string) => void;
  removeUserAnimalColor: (animal: AnimalName, color: string) => void;
  setUserAnimalColors: (animalColors: Record<AnimalName, string[]>) => void;

  cropFilters: TableFilters;
  setCropFilters: (newFilters: TableFilters) => void;
};

export const useStore = create<State, [['zustand/persist', State]]>(
  persist(
    (set, get) => ({
      darkMode: false,
      toggleDarkMode: () => {
        const darkMode = get().darkMode;
        return set({ darkMode: !darkMode });
      },

      notes: '',
      setNotes: (notes) => {
        return set({ notes });
      },

      userAnimalColors: {
        Ibex: [],
        Boar: [],
        Bison: [],
        Guanaco: [],
        Ostrich: [],
        Aurochs: [],
        Junglefowl: [],
        Horse: [],
      },
      addUserAnimalColor: (animal, color) => {
        const userAnimalColors = get().userAnimalColors;
        const currentColors = userAnimalColors[animal];

        userAnimalColors[animal] = [...currentColors, color];

        return set({ userAnimalColors });
      },
      removeUserAnimalColor: (animal, color) => {
        const userAnimalColors = get().userAnimalColors;
        const currentColors = userAnimalColors[animal];

        userAnimalColors[animal] = currentColors.filter(
          (userColor) => userColor !== color
        );

        return set({ userAnimalColors });
      },
      setUserAnimalColors: (animalColors) =>
        set({ userAnimalColors: animalColors }),

      cropFilters: { season: null },
      setCropFilters: (newFilters) => set({ cropFilters: newFilters }),
    }),
    {
      name: 'userAnimals',
    }
  )
);
