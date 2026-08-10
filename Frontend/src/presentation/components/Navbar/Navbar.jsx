import React, { useState } from 'react';
import { ShoppingBag, MapPin, ChevronDown, Phone } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { LOCATIONS_DATA } from '../../../data/locationsData';
import './Navbar.css';

export const Navbar = ({ activeTab = 'home', setActiveTab }) => {
  const { totalCount, setIsCartOpen } = useCart();
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS_DATA[0]);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

  const handleNavClick = (tab, href) => {
    if (setActiveTab) setActiveTab(tab);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container glass-panel">
        <div className="navbar-logo" onClick={() => handleNavClick('home', '#hero')} style={{ cursor: 'pointer' }}>
          <svg
            className="custom-burger-logo-icon"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 10C4 6.134 7.134 3 11 3H13C16.866 3 20 6.134 20 10V10.5H4V10Z" />
            <path d="M3 13.5H21" />
            <path d="M8 13.5L12 17.5L16 13.5" />
            <rect x="3" y="18" width="18" height="3.5" rx="1.75" />
          </svg>

          <div className="logo-text">
            <span className="logo-title">BURGER</span>
            <span className="logo-sub">CRAFT & CO.</span>
          </div>
        </div>

        <nav className="navbar-links">
          <a
            href="#hero"
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home', '#hero')}
          >
            Home
          </a>
          <a
            href="#menu"
            className={`nav-link ${activeTab === 'menu' ? 'active' : ''}`}
            onClick={() => handleNavClick('menu', '#menu')}
          >
            Menu
          </a>
          <a
            href="#offers"
            className={`nav-link ${activeTab === 'offers' ? 'active' : ''}`}
            onClick={() => handleNavClick('offers', '#offers')}
          >
            Offers
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact', '#contact')}
          >
            Contact Us
          </a>
        </nav>

        <div className="navbar-actions">
          <div className="info-badge">
            <div className="phone-line">
              <Phone size={14} />
              <span>{selectedLocation.phone}</span>
            </div>
            
            <div className="city-selector" onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}>
              <MapPin size={14} className="pin-icon" />
              <span>{selectedLocation.city}</span>
              <ChevronDown size={14} className={`arrow-icon ${isCityDropdownOpen ? 'open' : ''}`} />

              {isCityDropdownOpen && (
                <ul className="city-dropdown glass-panel">
                  {LOCATIONS_DATA.map((loc) => (
                    <li
                      key={loc.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedLocation(loc);
                        setIsCityDropdownOpen(false);
                      }}
                      className={selectedLocation.id === loc.id ? 'active' : ''}
                    >
                      <div className="dropdown-city-name">{loc.city}</div>
                      <div className="dropdown-city-sub">{loc.state || loc.country}</div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <button className="cart-trigger-btn" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={20} />
            {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
};
