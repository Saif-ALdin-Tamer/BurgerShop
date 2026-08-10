import { Burger } from '../core/entities/Burger';

export const INITIAL_DIPS = [
  new Burger({
    id: 'dip-1',
    name: 'Cheese Cup',
    tagline: 'Rich Cheddar',
    description: 'Smooth, rich melted warm yellow cheddar cheese sauce dip served in a clear cup.',
    price: 2.99,
    priceDisplay: '$2.99',
    spiceLevel: 0,
    ingredients: ['Melted Aged Cheddar Cheese'],
    nutrition: { calories: '160 kcal', fat: '13g', protein: '7g', carbs: '3g' },
    image: '/photos/cheese-cup-dip.png',
    category: 'Dips / Sauces',
    isPopular: true,
    showInHero: false
  }),
  new Burger({
    id: 'dip-3',
    name: 'Ranch',
    tagline: 'Herb Creamy',
    description: 'Cool garlic herb buttermilk ranch dipping sauce with dill.',
    price: 1.99,
    priceDisplay: '$1.99',
    spiceLevel: 0,
    ingredients: ['Buttermilk', 'Garlic', 'Dill', 'Herb Blend'],
    nutrition: { calories: '110 kcal', fat: '10g', protein: '1g', carbs: '3g' },
    image: '/photos/ranch-sauce-dip.png',
    category: 'Dips / Sauces',
    isPopular: false,
    showInHero: false
  })
];
