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

type CropType = 'Fruit' | 'Vegetable' | 'Grain' | 'Root' | 'Legume' | 'Seed';

type CropLocation =
  | 'The Land'
  | 'Forest'
  | 'Savanna'
  | 'Beach'
  | 'Jungle'
  | 'Horse Area';

type Season = 'Spring' | 'Summer' | 'Fall' | 'Winter';

export type Crop = {
  name: string;
  type: CropType;
  locations: CropLocation[];
  daysGrowth: number;
  daysRegrowth: number | null;
  seasons: Season[];
};
