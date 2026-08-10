import { Burger } from '../core/entities/Burger';

export const INITIAL_SIDES = [
  new Burger({
    id: 'side-1',
    name: 'French Fries',
    tagline: 'Crispy Classic',
    description: 'Classic golden crispy salted French fries served hot in a takeaway box container.',
    price: 4.99,
    priceDisplay: '$4.99',
    spiceLevel: 0,
    ingredients: ['Golden Potatoes', 'Sea Salt'],
    nutrition: { calories: '380 kcal', fat: '18g', protein: '4g', carbs: '48g' },
    image: '/photos/french-fries-side.png',
    category: 'Sides',
    isPopular: false,
    showInHero: false
  }),
  new Burger({
    id: 'side-2',
    name: 'Coleslaw',
    tagline: 'Fresh & Creamy',
    description: 'Fresh hand-shredded cabbage and sweet carrots tossed in creamy mayo dressing.',
    price: 3.99,
    priceDisplay: '$3.99',
    spiceLevel: 0,
    ingredients: ['Shredded Cabbage', 'Carrots', 'Creamy Mayo Dressing'],
    nutrition: { calories: '190 kcal', fat: '14g', protein: '2g', carbs: '15g' },
    image: '/photos/coleslaw-side.png',
    category: 'Sides',
    isPopular: false,
    showInHero: false
  }),
  new Burger({
    id: 'side-3',
    name: 'Mozzarella Sticks',
    tagline: 'Cheesy Pull',
    description: 'Golden breaded mozzarella cheese sticks fried crisp with gooey stretchy cheese inside.',
    price: 6.99,
    priceDisplay: '$6.99',
    spiceLevel: 0,
    ingredients: ['Mozzarella Cheese', 'Seasoned Breadcrumbs', 'Italian Herbs'],
    nutrition: { calories: '440 kcal', fat: '24g', protein: '18g', carbs: '36g' },
    image: '/photos/mozzarella-sticks.png',
    category: 'Sides',
    isPopular: true,
    showInHero: false
  })
];
