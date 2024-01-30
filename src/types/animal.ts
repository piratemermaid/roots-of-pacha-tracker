export type AnimalName =
  | 'Ibex'
  | 'Boar'
  | 'Bison'
  | 'Guanaco'
  | 'Ostrich'
  | 'Aurochs'
  | 'Junglefowl'
  | 'Horse';

export type Animal = { name: AnimalName; colors: string[] };
