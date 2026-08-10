import React, { useState } from 'react';
import { Tag, Copy, Check, Clock, ShoppingBag, Sparkles } from 'lucide-react';
import { OFFERS_DATA } from '../../../data/offersData';
import { INITIAL_BURGERS } from '../../../data/burgersData';
import { useCart } from '../../context/CartContext';
import './Offers.css';

export const Offers = () => {
  const { addToCart } = useCart();
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleClaimOffer = (offer) => {
    const burger = INITIAL_BURGERS.find((b) => b.id === offer.burgerId) || INITIAL_BURGERS[0];
    addToCart(burger, 1);
  };

  return (
    <section className="offers-section" id="offers">
      <div className="offers-container">
        <div className="offers-header">
          <div className="offers-title-wrap">
            <span className="offers-badge">
              <Sparkles size={14} />
              <span>EXCLUSIVE SANDWICH DEALS</span>
            </span>
            <h2 className="offers-title">Special Offers & Hot Combos</h2>
            <p className="offers-subtitle">
              Claim limited-time discounts, burger combos, and promo coupon codes on your favorite sandwiches!
            </p>
          </div>
        </div>

        <div className="offers-grid">
          {OFFERS_DATA.map((offer) => (
            <div key={offer.id} className="offer-card glass-panel">
              <div className="offer-tag-badge">{offer.badgeText}</div>

              <div className="offer-card-body">
                <div className="offer-img-wrap">
                  <img 
                    src={offer.image} 
                    alt={offer.title} 
                    className="offer-img" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/photos/cheese-splash-monster-transparent.png';
                    }}
                  />
                </div>

                <div className="offer-info">
                  <div className="offer-expiry">
                    <Clock size={13} className="clock-icon" />
                    <span>{offer.expiresIn}</span>
                  </div>

                  <h3 className="offer-card-title">{offer.title}</h3>
                  <p className="offer-desc">{offer.description}</p>

                  <div className="offer-price-row">
                    <span className="deal-price">${offer.dealPrice.toFixed(2)}</span>
                    <span className="original-price">${offer.originalPrice.toFixed(2)}</span>
                    <span className="savings-pill">Save ${offer.getSavingsAmount()}</span>
                  </div>

                  <div className="offer-action-row">
                    <button
                      className="promo-code-btn"
                      onClick={() => handleCopyCode(offer.promoCode)}
                      title="Click to copy promo code"
                    >
                      <Tag size={14} />
                      <span className="code-text">{offer.promoCode}</span>
                      {copiedCode === offer.promoCode ? (
                        <Check size={14} className="copied-icon" />
                      ) : (
                        <Copy size={14} className="copy-icon" />
                      )}
                    </button>

                    <button
                      className="claim-deal-btn"
                      onClick={() => handleClaimOffer(offer)}
                    >
                      <ShoppingBag size={16} />
                      <span>Claim Deal</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
