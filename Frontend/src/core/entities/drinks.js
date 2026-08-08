export class Drinks {
    constructor({
        id,
        name,
        tagline = 'Refreshment',
        description,
        price,
        spiceLevel = 0,
        ingredients = [],
        nutrition = { calories: '0 kcal', fat: '0g', protein: '0g', carbs: '0g' },
        image,
        category = 'Drinks',
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
