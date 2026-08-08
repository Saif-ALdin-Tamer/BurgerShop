import { Drinks } from '../core/entities/Drinks';

export const INITIAL_DRINKS = [
  new Drinks({
    id: 'drink-1',
    name: 'Classic Ice Cold Cola',
    tagline: 'Refreshment',
    description: 'Vintage ice-cold fountain Coca-Cola served in a chilled glass with crushed ice and fresh lemon zest.',
    price: 3.50,
    spiceLevel: 0,
    ingredients: ['Classic Cola', 'Crushed Ice', 'Lemon Slice'],
    nutrition: { calories: '150 kcal', fat: '0g', protein: '0g', carbs: '38g' },
    image: '/photos/cola-isolated-transparent.png',
    category: 'Drinks',
    isPopular: true
  }),
  new Drinks({
    id: 'drink-2',
    name: 'Craft Strawberry Milkshake',
    tagline: 'Sweet Treat',
    description: 'Hand-spun artisanal strawberry ice cream shake topped with fresh whipped cream and a cherry.',
    price: 5.50,
    spiceLevel: 0,
    ingredients: ['Organic Strawberries', 'Whole Milk Ice Cream', 'Whipped Cream', 'Maraschino Cherry'],
    nutrition: { calories: '420 kcal', fat: '16g', protein: '0g', carbs: '58g' },
    image: '/photos/milkshake-isolated-transparent.png',
    category: 'Drinks',
    isPopular: true
  }),
  new Drinks({
    id: 'drink-3',
    name: 'Sparkling Citrus Lemonade',
    tagline: 'Fresh Squeezed',
    description: 'Hand-pressed Meyer lemons blended with cane sugar syrup, sparkling soda water, and fresh mint leaves.',
    price: 4.25,
    spiceLevel: 0,
    ingredients: ['Fresh Meyer Lemon', 'Mint Leaves', 'Sparkling Soda Water', 'Cane Sugar'],
    nutrition: { calories: '120 kcal', fat: '0g', protein: '0g', carbs: '30g' },
    image: '/photos/lemonade-isolated-transparent.png',
    category: 'Drinks',
    isPopular: false
  }),
  new Drinks({
    id: 'drink-4',
    name: 'Iced Vanilla Bean Latte',
    tagline: 'Espresso Bar',
    description: 'Double shot of artisan espresso poured over cold whole milk, Madagascar vanilla syrup, and crystal ice.',
    price: 4.99,
    spiceLevel: 0,
    ingredients: ['Artisan Espresso', 'Madagascar Vanilla', 'Whole Milk', 'Crystal Ice'],
    nutrition: { calories: '180 kcal', fat: '5g', protein: '6g', carbs: '26g' },
    image: '/photos/latte-isolated-transparent.png',
    category: 'Drinks',
    isPopular: false
  })
];