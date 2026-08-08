import { INITIAL_BURGERS } from './burgersData';

export class BurgerRepositoryImpl {
  async getAllBurgers() {
    // Simulating async API call behavior
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(INITIAL_BURGERS);
      }, 100);
    });
  }

  async getBurgerById(id) {
    const burgers = await this.getAllBurgers();
    return burgers.find((b) => b.id === id) || null;
  }
}
