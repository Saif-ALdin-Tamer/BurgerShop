import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './CartDrawer.css';

export const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totals,
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
    }, 1500);
  };

  const handleClose = () => {
    setIsCartOpen(false);
    if (orderComplete) {
      clearCart();
      setOrderComplete(false);
    }
  };

  return (
    <div className="cart-backdrop" onClick={handleClose}>
      <div className="cart-drawer glass-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header with Full-Color Burger Graphic Placeholder */}
        <div className="cart-header">
          <div className="cart-header-title">
            <svg
              className="color-burger-graphic-cart"
              width="28"
              height="28"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 26C10 14.9543 19.8497 6 32 6C44.1503 6 54 14.9543 54 26C54 27.1046 53.1046 28 52 28H12C10.8954 28 10 27.1046 10 26Z" fill="url(#cart_bun_top_grad)"/>
              <circle cx="24" cy="14" r="1.5" fill="#FFF5E1" />
              <circle cx="32" cy="11" r="1.5" fill="#FFF5E1" />
              <circle cx="40" cy="14" r="1.5" fill="#FFF5E1" />
              <circle cx="28" cy="20" r="1.5" fill="#FFF5E1" />
              <circle cx="36" cy="20" r="1.5" fill="#FFF5E1" />
              <path d="M7 29C7 27.3431 8.34315 26 10 26H54C55.6569 26 57 27.3431 57 29C57 31.5 53.5 33 50.5 31.5C47.5 30 45.5 33 42.5 31.5C39.5 30 37.5 33 34.5 31.5C31.5 30 29.5 33 26.5 31.5C23.5 30 21.5 33 18.5 31.5C15.5 30 13.5 33 10.5 31.5C7.5 30 7 29.5 7 29Z" fill="#38B000"/>
              <rect x="11" y="32" width="42" height="4" rx="2" fill="#E63946"/>
              <path d="M10 36H54V38C54 39.1046 53.1046 40 52 40H38L34 44L30 40H12C10.8954 40 10 39.1046 10 38V36Z" fill="#FFB703"/>
              <rect x="8" y="40" width="48" height="9" rx="4.5" fill="#6F1D1B"/>
              <path d="M12 49H52C53.1046 49 54 49.8954 54 51V53C54 57.4183 44.1503 61 32 61C19.8497 61 10 57.4183 10 53V51C10 49.8954 10.8954 49 12 49Z" fill="url(#cart_bun_bottom_grad)"/>

              <defs>
                <linearGradient id="cart_bun_top_grad" x1="32" y1="6" x2="32" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F4A261"/>
                  <stop offset="1" stopColor="#E76F51"/>
                </linearGradient>
                <linearGradient id="cart_bun_bottom_grad" x1="32" y1="49" x2="32" y2="61" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F4A261"/>
                  <stop offset="1" stopColor="#E76F51"/>
                </linearGradient>
              </defs>
            </svg>

            <h3>Your Craft Order</h3>
            <span className="item-count">({cartItems.length} items)</span>
          </div>
          <button className="close-btn" onClick={handleClose}>
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        {orderComplete ? (
          <div className="order-complete-view">
            <CheckCircle2 size={64} className="success-icon" />
            <h2>Order Placed Successfully!</h2>
            <p>Your gourmet burger order is being crafted by our top chefs. Expected delivery in 25 mins.</p>
            <button className="done-btn" onClick={handleClose}>
              Done
            </button>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="cart-empty-view">
            <svg
              className="empty-cart-burger-graphic"
              width="72"
              height="72"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 26C10 14.9543 19.8497 6 32 6C44.1503 6 54 14.9543 54 26C54 27.1046 53.1046 28 52 28H12C10.8954 28 10 27.1046 10 26Z" fill="url(#empty_bun_top_grad)"/>
              <circle cx="24" cy="14" r="1.5" fill="#FFF5E1" />
              <circle cx="32" cy="11" r="1.5" fill="#FFF5E1" />
              <circle cx="40" cy="14" r="1.5" fill="#FFF5E1" />
              <circle cx="28" cy="20" r="1.5" fill="#FFF5E1" />
              <circle cx="36" cy="20" r="1.5" fill="#FFF5E1" />
              <path d="M7 29C7 27.3431 8.34315 26 10 26H54C55.6569 26 57 27.3431 57 29C57 31.5 53.5 33 50.5 31.5C47.5 30 45.5 33 42.5 31.5C39.5 30 37.5 33 34.5 31.5C31.5 30 29.5 33 26.5 31.5C23.5 30 21.5 33 18.5 31.5C15.5 30 13.5 33 10.5 31.5C7.5 30 7 29.5 7 29Z" fill="#38B000"/>
              <rect x="11" y="32" width="42" height="4" rx="2" fill="#E63946"/>
              <path d="M10 36H54V38C54 39.1046 53.1046 40 52 40H38L34 44L30 40H12C10.8954 40 10 39.1046 10 38V36Z" fill="#FFB703"/>
              <rect x="8" y="40" width="48" height="9" rx="4.5" fill="#6F1D1B"/>
              <path d="M12 49H52C53.1046 49 54 49.8954 54 51V53C54 57.4183 44.1503 61 32 61C19.8497 61 10 57.4183 10 53V51C10 49.8954 10.8954 49 12 49Z" fill="url(#empty_bun_bottom_grad)"/>

              <defs>
                <linearGradient id="empty_bun_top_grad" x1="32" y1="6" x2="32" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F4A261"/>
                  <stop offset="1" stopColor="#E76F51"/>
                </linearGradient>
                <linearGradient id="empty_bun_bottom_grad" x1="32" y1="49" x2="32" y2="61" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F4A261"/>
                  <stop offset="1" stopColor="#E76F51"/>
                </linearGradient>
              </defs>
            </svg>

            <h3>Your cart is empty</h3>
            <p>Add some delicious gourmet burgers to get started!</p>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cartItems.map((item, idx) => (
                <div key={idx} className="cart-item-row">
                  <img src={item.burger.image} alt={item.burger.name} className="cart-item-img" />
                  
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.burger.name}</h4>
                    <span className="cart-item-price">${item.burger.price.toFixed(2)}</span>

                    {/* Customizations Tag */}
                    {(item.options.extraCheese || item.options.doublePatty) && (
                      <div className="item-options-tags">
                        {item.options.extraCheese && <span>+ Extra Cheese</span>}
                        {item.options.doublePatty && <span>+ Double Patty</span>}
                      </div>
                    )}

                    {/* Quantity Controls */}
                    <div className="qty-controls">
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(item.burger.id, item.options, -1)}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="qty-val">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(item.burger.id, item.options, 1)}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-right">
                    <span className="item-subtotal">${item.getTotalPrice().toFixed(2)}</span>
                    <button
                      className="trash-btn"
                      onClick={() => removeFromCart(item.burger.id, item.options)}
                      title="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Calculation */}
            <div className="cart-footer">
              <div className="summary-line">
                <span>Subtotal</span>
                <span>${totals.subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-line">
                <span>Tax (8%)</span>
                <span>${totals.tax.toFixed(2)}</span>
              </div>
              <div className="summary-line">
                <span>Delivery Fee</span>
                <span>{totals.deliveryFee === 0 ? 'FREE' : `$${totals.deliveryFee.toFixed(2)}`}</span>
              </div>

              <div className="total-line">
                <span>Total Amount</span>
                <span className="total-val">${totals.total.toFixed(2)}</span>
              </div>

              <button
                className="checkout-btn"
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? (
                  <span>Processing Order...</span>
                ) : (
                  <>
                    <span>Proceed to Checkout</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
