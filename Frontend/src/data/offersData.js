import { Offer } from '../core/entities/Offer';

export const OFFERS_DATA = [
  new Offer({
    id: 'offer-1',
    title: 'Double Angus BOGO 50% OFF',
    badgeText: 'BUY 1 GET 1 50% OFF',
    description: 'Order one Flame-Grilled Double Angus Burger and get the second one at 50% off! Includes secret house sauce and aged cheddar.',
    promoCode: 'DOUBLE50',
    dealPrice: 18.75,
    originalPrice: 25.00,
    image: '/enhancedBurgerPhoto/burger-double-angus-transparent.png',
    burgerId: 'burger-7',
    expiresIn: 'Ends in 4 hours'
  }),
  new Offer({
    id: 'offer-2',
    title: 'Cheese Monster Drip Combo',
    badgeText: 'SAVE 30%',
    description: 'Get our premium Melted Cheese Drip Deluxe Burger paired with a Classic Ice Cold Cola for a discounted combo price.',
    promoCode: 'CHEESE30',
    dealPrice: 14.99,
    originalPrice: 20.49,
    image: '/enhancedBurgerPhoto/melted-cheese-drip-transparent.png',
    burgerId: 'burger-8',
    expiresIn: 'Today Only'
  }),
  new Offer({
    id: 'offer-3',
    title: 'Double Cheese Splash Deal',
    badgeText: 'HOT DEAL',
    description: 'Double Cheese Splash Monster + Craft Strawberry Milkshake bundle. The ultimate cheese splash experience!',
    promoCode: 'SPLASHDEAL',
    dealPrice: 15.99,
    originalPrice: 20.00,
    image: '/enhancedBurgerPhoto/double-splash-transparent.png',
    burgerId: 'burger-6',
    expiresIn: 'Limited Stock'
  }),
  new Offer({
    id: 'offer-4',
    title: 'Family Craft Burger Box',
    badgeText: 'FAMILY BUNDLE',
    description: '4 Artisan Burgers of your choice (Double Cheese Splash, Flame-Grilled Angus, Melted Cheese Drip) + 4 Refreshing Drinks.',
    promoCode: 'FAMILYFIESTA',
    dealPrice: 39.99,
    originalPrice: 56.00,
    image: '/enhancedBurgerPhoto/burger-double-angus-transparent.png',
    burgerId: 'burger-9',
    expiresIn: 'Weekend Special'
  })
];
