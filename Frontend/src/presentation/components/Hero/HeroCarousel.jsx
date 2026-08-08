import React from 'react';
import { ArrowLeft, ArrowRight, ShoppingBag, Utensils } from 'lucide-react';
import { NutritionBadges } from '../NutritionBadges/NutritionBadges';
import { useCart } from '../../context/CartContext';
import './HeroCarousel.css';

export const HeroCarousel = ({ burgers, activeBurger, activeIndex, nextBurger, prevBurger, setActiveIndex }) => {
  const { addToCart, setSelectedBurgerForModal } = useCart();

  if (!activeBurger || burgers.length === 0) return null;

  const handleOrderClick = () => {
    setSelectedBurgerForModal(activeBurger);
  };

  const handleQuickAdd = () => {
    addToCart(activeBurger, 1);
  };

  return (
    <section className="hero-section" id="hero">
      {/* Floating Ambient Food Elements */}
      <div className="floating-decorations" aria-hidden="true">
        <img
          src="/photos/basil-transparent.png"
          alt="Floating basil"
          className="floating-food float-basil"
        />
        <img
          src="/enhancedDrinkPhoto/cola-isolated-transparent.png"
          alt="Floating cold drink"
          className="floating-food float-cola"
        />
        <img
          src="/photos/fries-transparent.png"
          alt="Floating side dish"
          className="floating-food float-fries"
        />
      </div>

      <div className="hero-container">
        {/* Left Column: Information & Details */}
        <div className="hero-info-col">
          <div className="badge-tag">
            <span className="badge-dot"></span>
            <span>{activeBurger.tagline}</span>
          </div>

          <h1 className="hero-title">{activeBurger.name}</h1>

          {/* Spice Level Peppers Indicator */}
          {activeBurger.category !== 'Drinks' && (
            <div className="spice-indicator-bar">
              <span className="spice-label">Spice Level:</span>
              <div className="peppers-wrap">
                {[1, 2, 3, 4].map((level) => (
                  <i
                    key={level}
                    className={`fa-solid fa-pepper-hot pepper-icon ${
                      level <= activeBurger.spiceLevel ? 'active' : ''
                    }`}
                    title={`Spice level ${activeBurger.spiceLevel}/4`}
                  ></i>
                ))}
              </div>
              <span className="spice-level-text">
                {activeBurger.spiceLevel === 1 && 'Mild'}
                {activeBurger.spiceLevel === 2 && 'Medium'}
                {activeBurger.spiceLevel === 3 && 'Spicy'}
                {activeBurger.spiceLevel >= 4 && 'Extra Hot 🔥'}
              </span>
            </div>
          )}

          {/* Description */}
          <p className="hero-description">{activeBurger.description}</p>

          {/* Ingredients Pill Row */}
          <div className="ingredients-wrapper">
            <div className="ingredients-header">
              <Utensils size={14} className="ing-icon" />
              <span>Key Ingredients</span>
            </div>
            <div className="ingredients-pills">
              {activeBurger.ingredients.map((ing, idx) => (
                <span key={idx} className="ing-pill">
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing & Call to Action */}
          <div className="cta-row">
            <div className="price-tag">
              <span className="currency">$</span>
              <span className="price-amount">{activeBurger.price.toFixed(2)}</span>
            </div>

            <div className="cta-buttons">
              <button className="order-now-btn" onClick={handleOrderClick}>
                <ShoppingBag size={18} />
                <span>Customize & Order</span>
              </button>
              <button className="quick-add-btn" onClick={handleQuickAdd} title="Quick Add 1 to Cart">
                + Quick Add
              </button>
            </div>
          </div>

          {/* Nutrition Badges */}
          <NutritionBadges nutrition={activeBurger.nutrition} />
        </div>

        {/* Right Column: Visual Stage with 3D Depth Stack */}
        <div className="hero-stage-col">
          <div className="burger-stage">
            {burgers.map((b, idx) => {
              const offset = (idx - activeIndex + burgers.length) % burgers.length;
              let stageClass = 'hidden';

              if (offset === 0) stageClass = 'main-burger';
              else if (offset === 1) stageClass = 'next-burger-1';
              else if (offset === 2) stageClass = 'next-burger-2';
              else if (offset === burgers.length - 1) stageClass = 'prev-burger';

              return (
                <div
                  key={b.id}
                  className={`stage-item ${stageClass}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <img 
                    src={b.image} 
                    alt={b.name} 
                    className="burger-image" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/photos/cheese-splash-monster-transparent.png';
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Controls Arrow Row */}
          <div className="carousel-nav-controls">
            <button className="arrow-btn" onClick={prevBurger} aria-label="Previous Burger">
              <ArrowLeft size={22} />
            </button>
            <div className="indicator-dots">
              {burgers.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                ></span>
              ))}
            </div>
            <button className="arrow-btn" onClick={nextBurger} aria-label="Next Burger">
              <ArrowRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
