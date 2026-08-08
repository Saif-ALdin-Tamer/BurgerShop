import { INITIAL_BURGERS } from './burgersData';
import { INITIAL_DRINKS } from './drinksData';

export class BurgerRepositoryImpl {
  async getAllBurgers() {
    // Simulating async API call behavior returning combined burgers & drinks
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...INITIAL_BURGERS, ...INITIAL_DRINKS]);
      }, 100);
    });
  }

  async getBurgerById(id) {
    const items = await this.getAllBurgers();
    return items.find((item) => item.id === id) || null;
  }
}
