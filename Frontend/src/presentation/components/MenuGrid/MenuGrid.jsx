import React from 'react';
import { ShoppingBag, Star, Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './MenuGrid.css';

export const MenuGrid = ({ filteredBurgers, activeCategory, setActiveCategory }) => {
  const { addToCart, setSelectedBurgerForModal } = useCart();
  const categories = ['All', 'Beef', 'Chicken', 'Veggie', 'Drinks'];

  return (
    <section className="menu-section" id="menu">
      <div className="menu-container">
        <div className="menu-header">
          <div>
            <span className="section-subtitle">OUR CRAFT SELECTION</span>
            <h2 className="section-title">Explore Our Full Menu</h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="category-tabs glass-panel">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Burger / Drink Cards */}
        <div className="burger-grid">
          {filteredBurgers.map((item) => (
            <div key={item.id} className="burger-card glass-panel">
              {/* Badge Overlay */}
              {item.isPopular && <div className="popular-badge">★ Popular</div>}

              {/* Image Container */}
              <div className="card-image-wrap" onClick={() => setSelectedBurgerForModal(item)}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="card-image" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/photos/cheese-splash-monster-transparent.png';
                  }}
                />
                <div className="card-overlay">
                  <button className="preview-btn">
                    <Eye size={18} />
                    <span>Quick View</span>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="card-content">
                <div className="card-meta">
                  <span className="card-category">{item.category}</span>
                  <div className="card-rating">
                    <Star size={14} className="star-icon" />
                    <span>4.9</span>
                  </div>
                </div>

                <h3 className="card-title" onClick={() => setSelectedBurgerForModal(item)}>
                  {item.name}
                </h3>
                <p className="card-desc">{item.description}</p>

                {/* Spice Level Row (for burgers) */}
                {item.category !== 'Drinks' && (
                  <div className="card-spice-row">
                    <span className="card-spice-text">Heat:</span>
                    <div className="card-peppers">
                      {[1, 2, 3, 4].map((level) => (
                        <i
                          key={level}
                          className={`fa-solid fa-pepper-hot pepper-micro ${
                            level <= item.spiceLevel ? 'active' : ''
                          }`}
                        ></i>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer: Price & Add to Cart */}
                <div className="card-footer">
                  <div className="card-price">${item.price.toFixed(2)}</div>
                  <button
                    className="card-add-btn"
                    onClick={() => addToCart(item, 1)}
                    title="Add to cart"
                  >
                    <ShoppingBag size={16} />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
