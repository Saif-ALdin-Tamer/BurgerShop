export class Burger {
  constructor({
    id,
    name,
    tagline = 'New',
    description,
    price,
    priceDisplay,
    spiceLevel = 1,
    ingredients = [],
    nutrition = { calories: '0', fat: '0g', protein: '0g', carbs: '0g' },
    image,
    category = 'Beef',
    isPopular = false,
    showInHero = false,
    showInMenu = true,
  }) {
    this.id = id;
    this.name = name;
    this.tagline = tagline;
    this.description = description;
    this.price = Number(price);
    this.priceDisplay = priceDisplay;
    this.spiceLevel = spiceLevel;
    this.ingredients = ingredients;
    this.nutrition = nutrition;
    this.image = image;
    this.category = category;
    this.isPopular = isPopular;
    this.showInHero = showInHero;
    this.showInMenu = showInMenu;
  }

  getFormattedPrice() {
    if (this.priceDisplay) return this.priceDisplay;
    return `$${this.price.toFixed(2)}`;
  }
}
