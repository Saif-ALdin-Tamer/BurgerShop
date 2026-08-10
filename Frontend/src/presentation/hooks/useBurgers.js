import { useState, useEffect, useMemo } from 'react';
import { BurgerRepositoryImpl } from '../../data/BurgerRepositoryImpl';
import { BurgerUseCases } from '../../core/usecases/BurgerUseCases';

const repository = new BurgerRepositoryImpl();
const burgerUseCases = new BurgerUseCases(repository);

export const useBurgers = () => {
  const [burgers, setBurgers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const fetchBurgers = async () => {
      setLoading(true);
      try {
        const data = await burgerUseCases.getFeaturedBurgers();
        if (isMounted) {
          setBurgers(data);
        }
      } catch (err) {
        console.error('Error fetching burgers:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchBurgers();
    return () => {
      isMounted = false;
    };
  }, []);

  const heroBurgers = useMemo(() => {
    const featured = burgers.filter((b) => b.showInHero);
    return featured.length > 0 ? featured : burgers.filter((b) => b.isPopular).slice(0, 5);
  }, [burgers]);

  const filteredBurgers = useMemo(() => {
    const menuItems = burgers.filter((b) => b.showInMenu !== false);
    if (activeCategory === 'All') return menuItems;
    return menuItems.filter((b) => b.category.toLowerCase() === activeCategory.toLowerCase());
  }, [burgers, activeCategory]);

  const activeBurger = useMemo(() => {
    if (heroBurgers.length === 0) return null;
    return heroBurgers[activeIndex % heroBurgers.length];
  }, [heroBurgers, activeIndex]);

  const nextBurger = () => {
    if (heroBurgers.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % heroBurgers.length);
  };

  const prevBurger = () => {
    if (heroBurgers.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + heroBurgers.length) % heroBurgers.length);
  };

  const categories = useMemo(() => {
    const set = new Set();
    burgers.forEach((b) => {
      if (b.category) set.add(b.category);
    });
    return ['All', ...Array.from(set)];
  }, [burgers]);

  return {
    burgers,
    heroBurgers,
    categories,
    filteredBurgers,
    activeBurger,
    activeIndex,
    setActiveIndex,
    nextBurger,
    prevBurger,
    loading,
    activeCategory,
    setActiveCategory,
  };
};
