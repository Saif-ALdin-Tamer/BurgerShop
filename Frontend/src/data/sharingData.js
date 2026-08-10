import { Burger } from '../core/entities/Burger';

export const INITIAL_SHARING = [
  new Burger({
    id: 'sharing-1',
    name: "Friend's Box",
    tagline: 'Party Platter',
    description: 'Abundant sharing platter filled with crispy chicken tenders, golden onion rings, waffle fries, potato wedges, and dipping sauces.',
    price: 24.99,
    priceDisplay: '$24.99',
    spiceLevel: 0,
    ingredients: ['Crispy Chicken Tenders', 'Onion Rings', 'Waffle Potato Wedges', 'French Fries', 'Dipping Cups'],
    nutrition: { calories: '1250 kcal', fat: '65g', protein: '55g', carbs: '110g' },
    image: '/photos/friends-sharing-box.png',
    category: 'For Sharing',
    isPopular: true,
    showInHero: false
  }),
  new Burger({
    id: 'sharing-2',
    name: 'Explosion',
    tagline: 'Loaded Feast',
    description: 'Basket of seasoned French fries loaded with melted cheese splash, crispy bacon bits, jalapeños, and special sauce.',
    price: 14.99,
    priceDisplay: '$14.99',
    spiceLevel: 3,
    ingredients: ['Seasoned Fries', 'Melted Cheese Splash', 'Crispy Bacon Bits', 'Jalapeños', 'Special Sauce'],
    nutrition: { calories: '920 kcal', fat: '52g', protein: '28g', carbs: '85g' },
    image: '/photos/explosion-sharing.png',
    category: 'For Sharing',
    isPopular: true,
    showInHero: false
  }),
  new Burger({
    id: 'sharing-3',
    name: 'Cheese Fries',
    tagline: 'Cheesy Loaded',
    description: 'Basket of golden crispy French fries smothered in warm, rich melted yellow cheddar cheese sauce.',
    price: 8.99,
    priceDisplay: '$8.99',
    spiceLevel: 0,
    ingredients: ['Crispy French Fries', 'Melted Cheddar Sauce', 'House Seasoning'],
    nutrition: { calories: '680 kcal', fat: '38g', protein: '14g', carbs: '70g' },
    image: '/photos/cheese-fries-sharing.png',
    category: 'For Sharing',
    isPopular: false,
    showInHero: false
  }),
  new Burger({
    id: 'sharing-4',
    name: 'Crunchy Bacon Mountain',
    tagline: 'Bacon Overload',
    description: 'Loaded french fries pile topped with melted cheese sauce, mountain of crunchy bacon crumbles, and scallions.',
    price: 11.99,
    priceDisplay: '$11.99',
    spiceLevel: 1,
    ingredients: ['Crispy Fries', 'Smokey Bacon Crumbles', 'Melted Cheddar', 'Green Scallions'],
    nutrition: { calories: '810 kcal', fat: '46g', protein: '24g', carbs: '75g' },
    image: '/photos/bacon-mountain.png',
    category: 'For Sharing',
    isPopular: true,
    showInHero: false
  })
];
