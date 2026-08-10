export class Location {
  constructor({ id, city, state, country, phone, address, isOpen = true }) {
    this.id = id;
    this.city = city;
    this.state = state;
    this.country = country;
    this.phone = phone;
    this.address = address;
    this.isOpen = isOpen;
  }

  getDisplayName() {
    return this.state ? `${this.city}, ${this.state}` : `${this.city}, ${this.country}`;
  }
}
