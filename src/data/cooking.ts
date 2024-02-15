import { CookingMeal } from '../types/cooking';

const COOKING: CookingMeal[] = [
  {
    name: 'Oxygala',
    ingredients: [{ name: 'Any Sour Cream', quantity: 1 }],
    buff: '6 Fish Rarity',
  },
  {
    name: 'Spaghetti',
    ingredients: [
      { name: 'Tomato', quantity: 1 },
      { name: 'Any Flour', quantity: 1 },
    ],
    buff: '6 Ore Yield',
  },
  {
    name: 'Mushroom Tart',
    ingredients: [
      { name: 'Any Mushroom', quantity: 1 },
      { name: 'Any Flour', quantity: 1 },
    ],
    buff: '6 Wood Yield',
  },
  {
    name: 'Arroz Con Leche',
    ingredients: [
      { name: 'Any Milk', quantity: 1 },
      { name: 'Wild Rice', quantity: 1 },
    ],
    buff: '30 Max Stamina',
  },
];

export default COOKING;
