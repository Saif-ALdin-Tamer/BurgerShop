import { Burger } from '../core/entities/Burger';

export const INITIAL_SMASH_BURGERS = [
  new Burger({
    id: 'smash-1',
    name: 'Truffle Burger',
    tagline: 'Gourmet Truffle',
    description: 'Double crispy smash beef patties layered with creamy truffle aioli, melted cheese, and sautéed wild mushrooms on a toasted brioche bun.',
    price: 16.99,
    priceDisplay: '$16.99 - $19.99  ',
    spiceLevel: 1,
    ingredients: ['Double Smash Beef Patties', 'Truffle Aioli', 'Wild Mushrooms', 'Melted Cheese', 'Brioche Bun'],
    nutrition: { calories: '820 kcal', fat: '42g', protein: '46g', carbs: '44g' },
    image: '/photos/truffle-burger.png',
    category: 'Smash Burgers',
    isPopular: true,
    showInHero: true
  }),
  new Burger({
    id: 'smash-2',
    name: 'Cheese Burger',
    tagline: 'Classic Smash',
    description: 'Double thin crispy-edged smash patties with melted American cheese, fresh lettuce, pickles, and signature house sauce.',
    price: 13.99,
    priceDisplay: '$13.99 - $16.99  ',
    spiceLevel: 1,
    ingredients: ['Double Smash Patties', 'American Cheese', 'Fresh Lettuce', 'Pickles', 'House Smash Sauce'],
    nutrition: { calories: '750 kcal', fat: '38g', protein: '42g', carbs: '40g' },
    image: '/photos/smash-cheeseburger.png',
    category: 'Smash Burgers',
    isPopular: true,
    showInHero: false
  }),
  new Burger({
    id: 'smash-3',
    name: 'Chili D',
    tagline: 'Fiery Hot',
    description: 'Spicy smash burger with sliced jalapeños, melted cheddar cheese, fiery chili sauce drizzle, and crisp lettuce.',
    price: 14.99,
    priceDisplay: '$14.99 - $17.99  ',
    spiceLevel: 4,
    ingredients: ['Double Smash Patties', 'Melted Cheddar', 'Pickled Jalapeños', 'Fiery Chili Sauce', 'Lettuce'],
    nutrition: { calories: '810 kcal', fat: '41g', protein: '44g', carbs: '42g' },
    image: '/photos/chili-d-burger.png',
    category: 'Smash Burgers',
    isPopular: true,
    showInHero: false
  }),
  new Burger({
    id: 'smash-4',
    name: 'BBQ Burger',
    tagline: 'Smoky & Crispy',
    description: 'Double smash patties with melted cheese, crispy golden fried onion strings, and hickory barbecue sauce glaze.',
    price: 14.50,
    priceDisplay: '$14.50 - $17.50  ',
    spiceLevel: 2,
    ingredients: ['Double Smash Patties', 'Hickory BBQ Glaze', 'Crispy Onion Strings', 'Melted Cheese', 'Brioche'],
    nutrition: { calories: '840 kcal', fat: '43g', protein: '45g', carbs: '48g' },
    image: '/photos/bbq-smash-burger.png',
    category: 'Smash Burgers',
    isPopular: false,
    showInHero: false
  })
];
