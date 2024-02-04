import type { VillagerData } from '../types/data';

const VILLAGERS: Record<string, VillagerData> = {
  Acre: {
    clan: 'Pachan',
    birthday: { month: 'Winter', day: 17 },
    gifts: ['Copper', 'Obsidian'],
  },
  Ada: {
    clan: 'Pachan',
    birthday: { month: 'Summer', day: 12 },
    gifts: ['Mandrake', 'Rose Hips', 'Red Mushroom', 'Burdock Root'],
  },
  Ata: {
    clan: 'Pachan',
    birthday: { month: 'Fall', day: 2 },
    gifts: ['Copper', 'Obsidian'],
  },
  Brah: {
    clan: 'Pachan',
    birthday: { month: 'Spring', day: 25 },
    gifts: ['Potato', 'Strawberry', 'Fried Eggs'],
  },
  Brub: {
    clan: 'Yakuan',
    birthday: { month: 'Winter', day: 13 },
    gifts: ['Beans', 'Sea Kale'],
  },
  Croll: {
    clan: 'Pachan',
    birthday: { month: 'Winter', day: 23 },
    gifts: ['Roasted Fish', 'Pickled Beets', 'Pickled Garlic'],
  },
  Daari: {
    clan: 'Pachan',
    birthday: { month: 'Fall', day: 15 },
    gifts: ['Milk Thistle', 'Oregano', 'Amaranth'],
  },
  Era: {
    clan: 'Pachan',
    birthday: { month: 'Fall', day: 11 },
    gifts: ['Chile', 'Oregano'],
  },
  Frer: {
    clan: 'Pachan',
    birthday: { month: 'Summer', day: 18 },
    gifts: ['Kohlrabi', 'Tomato Juice'],
  },
  Garrek: {
    clan: 'Pachan',
    birthday: { month: 'Winter', day: 26 },
    gifts: ['Beets Juice', 'Any Mushroom'],
  },
  Gin: {
    clan: 'Pachan',
    birthday: { month: 'Fall', day: 20 },
    gifts: ['Corn', 'Potato', 'Any Smoked Meat'],
  },
  Grob: {
    clan: 'Pachan',
    birthday: { month: 'Spring', day: 20 },
    gifts: ['Beets', 'Potato', 'Smoked Red Meat'],
  },
  Ibon: {
    clan: 'Pachan',
    birthday: { month: 'Spring', day: 16 },
    gifts: ['Sunflower', 'Kohlrabi', 'Pink Shell', 'Datura Flower'],
  },
  Igrork: {
    clan: 'Pachan',
    birthday: { month: 'Winter', day: 15 },
    gifts: ['Teff', 'Beryl', 'Pickled Beets'],
  },
  Illoe: {
    clan: 'Pachan',
    birthday: { month: 'Spring', day: 9 },
    gifts: ['Sunflower', 'Burdock Root', 'Watercress'],
  },
  Inza: {
    clan: 'Yakuan',
    birthday: { month: 'Fall', day: 12 },
    gifts: ['Strawberry', 'Broccoli', 'Mint', 'Any River Fish'],
  },
  Jag: {
    clan: 'Pachan',
    birthday: { month: 'Spring', day: 4 },
    gifts: ['Sesame', 'Hardwood', 'Smoked Red Meat', 'Lavender'],
  },
  Jelrod: {
    clan: 'Pachan',
    birthday: { month: 'Spring', day: 22 },
    gifts: ['Winter Peas', 'Smoked Red Meat'],
  },
  Jizu: {
    clan: 'Pachan',
    birthday: { month: 'Summer', day: 20 },
    gifts: ['Fennel', 'Pine Cone', 'Citronella'],
  },
  Juuk: {
    clan: 'Pachan',
    birthday: { month: 'Summer', day: 23 },
    gifts: ['Chile', 'Broccoli'],
  },
  Krak: {
    clan: 'Yakuan',
    birthday: { month: 'Fall', day: 22 },
    gifts: ['Sunflower', 'Cabbage'],
  },
  Maeri: {
    clan: 'Pachan',
    birthday: { month: 'Winter', day: 20 },
    gifts: ['Sunflower', 'Pickled Beets'],
  },
  Mana: {
    clan: 'Pachan',
    birthday: { month: 'Winter', day: 5 },
    gifts: ['Quinoa', 'Tomato Juice', 'Carrot Juice'],
  },
  Nari: {
    clan: 'Pachan',
    birthday: { month: 'Summer', day: 17 },
    gifts: ['Amaranth', 'Cabbage', 'Elecampane', 'Copper'],
  },
  Nokk: {
    clan: 'Pachan',
    birthday: { month: 'Fall', day: 26 },
    gifts: ['Carrot', 'Tomato', 'Oregano', 'Smoked Red Meat', 'Rosemary'],
  },
  Okka: {
    clan: 'Pachan',
    birthday: { month: 'Winter', day: 9 },
    gifts: ['Citronella'],
  },
  Reese: {
    clan: 'Pachan',
    birthday: { month: 'Winter', day: 7 },
    gifts: ['Sunflower', 'Strange Mushroom', 'Lavender'],
  },
  Ron: {
    clan: 'Pachan',
    birthday: { month: 'Fall', day: 6 },
    gifts: ['Roasted Vegetables', 'Any Juice'],
  },
  Tare: {
    clan: 'Pachan',
    birthday: { month: 'Summer', day: 6 },
    gifts: ['Chile', 'Oregano', 'Parsley'],
  },
  Tetih: {
    clan: 'Pachan',
    birthday: { month: 'Spring', day: 5 },
    gifts: ['Cassava', 'Amethyst', 'Gold', 'Aged Wine'],
  },
  Touk: {
    clan: 'Mograni',
    birthday: { month: 'Fall', day: 10 },
    gifts: ['Potato', 'Datura Flower', 'Dried Red Meat', 'Alfalfa'],
  },
  Vallah: {
    clan: 'Mograni',
    birthday: { month: 'Winter', day: 1 },
    gifts: ['Kohlrabi', 'Oregano', 'Rosemary', 'Copper', 'Mint'],
  },
  Voda: {
    clan: 'Pachan',
    birthday: { month: 'Summer', day: 7 },
    gifts: ['Buckwheat', 'Tomato', 'Lavender'],
  },
  Vor: {
    clan: 'Pachan',
    birthday: { month: 'Summer', day: 10 },
    gifts: ['Strawberry Juice', 'Poop', 'Smoked Red Meat'],
  },
  Vuak: {
    clan: 'Pachan',
    birthday: { month: 'Summer', day: 12 },
    gifts: ['Mandrake'],
  },
  Zeda: {
    clan: 'Pachan',
    birthday: { month: 'Summer', day: 9 },
    gifts: ['Chile', 'Kohlrabi', 'Smoked Red Meat', 'Mint'],
  },
  Zelk: {
    clan: 'Pachan',
    birthday: { month: 'Spring', day: 11 },
    gifts: ['Eggplant', 'Any Mushroom'],
  },
};

export default VILLAGERS;
