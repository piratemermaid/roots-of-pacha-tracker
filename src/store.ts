import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { AnimalName } from './types/animal';

type State = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  userAnimalColors: Record<AnimalName, string[]>;
  addUserAnimalColor: (animal: AnimalName, color: string) => void;
  removeUserAnimalColor: (animal: AnimalName, color: string) => void;
};

export const useStore = create<State, [['zustand/persist', State]]>(
  persist(
    (set, get) => ({
      darkMode: false,
      toggleDarkMode: () => {
        const darkMode = get().darkMode;
        return set({ darkMode: !darkMode });
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
    }),
    {
      name: 'userAnimals',
    }
  )
);
