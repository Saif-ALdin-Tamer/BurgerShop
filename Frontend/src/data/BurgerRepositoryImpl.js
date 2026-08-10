import { INITIAL_BURGERS } from './burgersData';
import { INITIAL_DRINKS } from './drinksData';
import { INITIAL_SMASH_BURGERS } from './smashBurgersData';
import { INITIAL_SHARING } from './sharingData';
import { INITIAL_SIDES } from './sidesData';
import { INITIAL_DIPS } from './dipsData';

export class BurgerRepositoryImpl {
  async getAllBurgers() {
    // Simulating async API call behavior returning combined menu items
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          ...INITIAL_SMASH_BURGERS,
          ...INITIAL_BURGERS,
          ...INITIAL_SHARING,
          ...INITIAL_SIDES,
          ...INITIAL_DIPS,
          ...INITIAL_DRINKS,
        ]);
      }, 100);
    });
  }

  async getBurgerById(id) {
    const items = await this.getAllBurgers();
    return items.find((item) => item.id === id) || null;
  }
}
