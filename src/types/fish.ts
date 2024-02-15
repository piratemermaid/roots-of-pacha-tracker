import type { Season } from './data';

export type FishingLocation =
  | 'The Land'
  | 'Forest (Lake)'
  | 'Forest (River)'
  | 'Savanna'
  | 'Beach';

type Weather = 'Any' | 'Rainy';

export type Time = 'Morning' | 'Noon' | 'Afternoon' | 'Night';

export type Fish = {
  name: string;
  locations: FishingLocation[];
  seasons: Season[];
  weather: Weather;
  time: Time[];
  tier: 1 | 2 | 3 | 4;
};
