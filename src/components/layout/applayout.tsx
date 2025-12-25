import { useState } from 'react';
import Footer from './footer';
import Navigation from './Navigation/navigation';
import { Outlet } from 'react-router';

function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className=" overflow-hidden bg-white dark:bg-gray-900 px-4">
      <Navigation
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div
        className={`
          transition-all duration-300
          ${menuOpen ? 'blur-sm pointer-events-none' : ''}
        `}
      >
        <Outlet />
        <Footer />
      </div>
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}
    </section>
  );
}

export default AppLayout;
