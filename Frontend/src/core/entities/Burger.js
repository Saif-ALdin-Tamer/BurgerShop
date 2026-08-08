/**
 * Core Domain Entity: Burger
 * Represents a menu item with metadata, pricing, spice level, ingredients, and nutrition details.
 */
export class Burger {
  constructor({
    id,
    name,
    tagline = 'New',
    description,
    price,
    spiceLevel = 1, // 1 to 4 hot peppers
    ingredients = [],
    nutrition = { calories: '0', fat: '0g', protein: '0g', carbs: '0g' },
    image,
    category = 'Beef',
    isPopular = false,
  }) {
    this.id = id;
    this.name = name;
    this.tagline = tagline;
    this.description = description;
    this.price = Number(price);
    this.spiceLevel = spiceLevel;
    this.ingredients = ingredients;
    this.nutrition = nutrition;
    this.image = image;
    this.category = category;
    this.isPopular = isPopular;
  }

  getFormattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }
}
