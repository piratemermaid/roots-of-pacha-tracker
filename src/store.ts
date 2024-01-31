import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  count: number;
  incrementCount: () => void;
};

export const useStore = create<State, [['zustand/persist', State]]>(
  persist(
    (set, get) => ({
      count: 0,
      incrementCount: () => set({ count: get().count + 1 }),
    }),
    {
      name: 'count',
    }
  )
);
