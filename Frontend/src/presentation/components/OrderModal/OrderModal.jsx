import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './OrderModal.css';

export const OrderModal = () => {
  const { selectedBurgerForModal, setSelectedBurgerForModal, addToCart, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [extraCheese, setExtraCheese] = useState(false);
  const [doublePatty, setDoublePatty] = useState(false);

  if (!selectedBurgerForModal) return null;

  const burger = selectedBurgerForModal;

  const calculateSubtotal = () => {
    let price = burger.price;
    if (extraCheese) price += 1.5;
    if (doublePatty) price += 3.5;
    return price * quantity;
  };

  const handleAddToCart = () => {
    addToCart(burger, quantity, { extraCheese, doublePatty });
    setSelectedBurgerForModal(null);
    setIsCartOpen(true);
  };

  return (
    <div className="modal-backdrop" onClick={() => setSelectedBurgerForModal(null)}>
      <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={() => setSelectedBurgerForModal(null)}>
          <X size={20} />
        </button>

        <div className="modal-body">
          {/* Burger Image Stage */}
          <div className="modal-img-stage">
            <img 
              src={burger.image} 
              alt={burger.name} 
              className="modal-burger-img" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/photos/cheese-splash-monster-transparent.png';
              }}
            />
          </div>

          {/* Details & Customizations */}
          <div className="modal-info">
            <div className="modal-header-meta">
              <span className="modal-tag">{burger.tagline}</span>
              <span className="modal-category">{burger.category}</span>
            </div>

            <h2 className="modal-title">{burger.name}</h2>
            <p className="modal-desc">{burger.description}</p>

            {/* Customize Options */}
            <div className="modal-custom-section">
              <h4 className="custom-title">Customizations</h4>
              <div className="custom-options">
                <label className={`custom-checkbox-card ${extraCheese ? 'selected' : ''}`}>
                  <input
                    type="checkbox"
                    checked={extraCheese}
                    onChange={(e) => setExtraCheese(e.target.checked)}
                  />
                  <div className="checkbox-info">
                    <span className="cb-label">Extra Melted Cheddar</span>
                    <span className="cb-price">+$1.50</span>
                  </div>
                  {extraCheese && <Check size={16} className="check-icon" />}
                </label>

                <label className={`custom-checkbox-card ${doublePatty ? 'selected' : ''}`}>
                  <input
                    type="checkbox"
                    checked={doublePatty}
                    onChange={(e) => setDoublePatty(e.target.checked)}
                  />
                  <div className="checkbox-info">
                    <span className="cb-label">Double Grass-Fed Patty</span>
                    <span className="cb-price">+$3.50</span>
                  </div>
                  {doublePatty && <Check size={16} className="check-icon" />}
                </label>
              </div>
            </div>

            {/* Footer Row */}
            <div className="modal-footer-row">
              <div className="quantity-selector">
                <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus size={16} />
                </button>
                <span className="qty-value">{quantity}</span>
                <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}>
                  <Plus size={16} />
                </button>
              </div>

              <button className="add-to-cart-modal-btn" onClick={handleAddToCart}>
                <ShoppingBag size={18} />
                <span>Add ${calculateSubtotal().toFixed(2)}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
