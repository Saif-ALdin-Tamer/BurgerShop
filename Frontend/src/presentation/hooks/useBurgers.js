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

  const filteredBurgers = useMemo(() => {
    if (activeCategory === 'All') return burgers;
    return burgers.filter((b) => b.category.toLowerCase() === activeCategory.toLowerCase());
  }, [burgers, activeCategory]);

  const activeBurger = useMemo(() => {
    if (burgers.length === 0) return null;
    return burgers[activeIndex % burgers.length];
  }, [burgers, activeIndex]);

  const nextBurger = () => {
    setActiveIndex((prev) => (prev + 1) % burgers.length);
  };

  const prevBurger = () => {
    setActiveIndex((prev) => (prev - 1 + burgers.length) % burgers.length);
  };

  return {
    burgers,
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
