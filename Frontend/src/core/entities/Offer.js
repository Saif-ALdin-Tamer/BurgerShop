export class Offer {
  constructor({
    id,
    title,
    badgeText,
    description,
    promoCode,
    dealPrice,
    originalPrice,
    image,
    burgerId,
    expiresIn = 'Limited Time',
  }) {
    this.id = id;
    this.title = title;
    this.badgeText = badgeText;
    this.description = description;
    this.promoCode = promoCode;
    this.dealPrice = Number(dealPrice);
    this.originalPrice = Number(originalPrice);
    this.image = image;
    this.burgerId = burgerId;
    this.expiresIn = expiresIn;
  }

  getSavingsAmount() {
    return (this.originalPrice - this.dealPrice).toFixed(2);
  }
}
