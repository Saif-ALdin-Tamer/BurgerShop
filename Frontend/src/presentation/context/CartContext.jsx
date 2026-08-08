import React, { createContext, useState, useContext, useMemo } from 'react';
import { CartItem } from '../../core/entities/CartItem';
import { BurgerUseCases } from '../../core/usecases/BurgerUseCases';

const CartContext = createContext(null);
const burgerUseCases = new BurgerUseCases();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedBurgerForModal, setSelectedBurgerForModal] = useState(null);

  const addToCart = (burger, quantity = 1, options = {}) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.burger.id === burger.id && JSON.stringify(item.options) === JSON.stringify(options)
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        const item = updated[existingIndex];
        updated[existingIndex] = new CartItem(item.burger, item.quantity + quantity, item.options);
        return updated;
      } else {
        return [...prevItems, new CartItem(burger, quantity, options)];
      }
    });
  };

  const updateQuantity = (burgerId, options, delta) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.burger.id === burgerId && JSON.stringify(item.options) === JSON.stringify(options)) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? new CartItem(item.burger, newQty, item.options) : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (burgerId, options) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.burger.id === burgerId && JSON.stringify(item.options) === JSON.stringify(options))
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const totals = useMemo(() => {
    return burgerUseCases.calculateCartTotals(cartItems);
  }, [cartItems]);

  const totalCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        selectedBurgerForModal,
        setSelectedBurgerForModal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totals,
        totalCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
