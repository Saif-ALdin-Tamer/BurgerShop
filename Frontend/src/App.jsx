import React, { useState } from 'react';
import { CartProvider } from './presentation/context/CartContext';
import { useBurgers } from './presentation/hooks/useBurgers';
import { Navbar } from './presentation/components/Navbar/Navbar';
import { HeroCarousel } from './presentation/components/Hero/HeroCarousel';
import { MenuGrid } from './presentation/components/MenuGrid/MenuGrid';
import { Offers } from './presentation/components/Offers/Offers';
import { ContactUs } from './presentation/components/ContactUs/ContactUs';
import { CartDrawer } from './presentation/components/Cart/CartDrawer';
import { OrderModal } from './presentation/components/OrderModal/OrderModal';
import './presentation/styles/index.css';

const MainAppContent = () => {
  const [activeTab, setActiveTab] = useState('home');

  const {
    burgers,
    heroBurgers,
    categories,
    filteredBurgers,
    activeBurger,
    activeIndex,
    nextBurger,
    prevBurger,
    setActiveIndex,
    activeCategory,
    setActiveCategory,
  } = useBurgers();

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main>
        {activeTab === 'contact' ? (
          <ContactUs onNavigateHome={() => setActiveTab('home')} />
        ) : (
          <>
            <HeroCarousel
              burgers={heroBurgers}
              activeBurger={activeBurger}
              activeIndex={activeIndex}
              nextBurger={nextBurger}
              prevBurger={prevBurger}
              setActiveIndex={setActiveIndex}
            />

            <MenuGrid
              filteredBurgers={filteredBurgers}
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />

            <Offers />

            <ContactUs onNavigateHome={() => setActiveTab('home')} />
          </>
        )}
      </main>

      {/* Slide-out Cart Drawer */}
      <CartDrawer />

      {/* Burger Details & Customization Modal */}
      <OrderModal />

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '36px 20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        color: '#a1a1aa',
        fontSize: '13px',
        fontWeight: '600'
      }}>
        <p>© 2026 Burger Craft & Co. All rights reserved. Crafted with Clean Architecture & React.</p>
      </footer>
    </div>
  );
};

export function App() {
  return (
    <CartProvider>
      <MainAppContent />
    </CartProvider>
  );
}

export default App;
