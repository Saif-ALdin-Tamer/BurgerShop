/**
 * Core Domain Entity: CartItem
 * Represents a burger item added to the shopping cart with quantity and optional customizations.
 */
export class CartItem {
  constructor(burger, quantity = 1, options = {}) {
    this.burger = burger;
    this.quantity = quantity;
    this.options = options; // e.g. { extraCheese: true, noOnions: false }
  }

  getTotalPrice() {
    let base = this.burger.price;
    if (this.options.extraCheese) base += 1.5;
    if (this.options.doublePatty) base += 3.5;
    return base * this.quantity;
  }
}
