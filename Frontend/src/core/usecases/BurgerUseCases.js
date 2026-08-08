/**
 * Core Domain Use Cases for Burger operations
 */
export class BurgerUseCases {
  constructor(burgerRepository) {
    this.burgerRepository = burgerRepository;
  }

  async getFeaturedBurgers() {
    const burgers = await this.burgerRepository.getAllBurgers();
    return burgers;
  }

  async getBurgersByCategory(category) {
    const burgers = await this.burgerRepository.getAllBurgers();
    if (!category || category === 'All') return burgers;
    return burgers.filter((b) => b.category.toLowerCase() === category.toLowerCase());
  }

  calculateCartTotals(cartItems) {
    const subtotal = cartItems.reduce((acc, item) => acc + item.getTotalPrice(), 0);
    const tax = subtotal * 0.08;
    const deliveryFee = subtotal > 30 || subtotal === 0 ? 0 : 3.99;
    const total = subtotal + tax + deliveryFee;

    return {
      subtotal,
      tax,
      deliveryFee,
      total,
    };
  }
}
