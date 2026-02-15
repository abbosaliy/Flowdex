import { useState } from "react";
import Footer from "./Footer/footer";
import Navigation from "./Navigation/navigation";
import { Outlet } from "react-router";

function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className="overflow-hidden bg-white dark:bg-gray-900">
      <Navigation
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className={`transition-all duration-300 ${menuOpen ? "pointer-events-none blur-sm" : ""} `}>
        <Outlet />
        <Footer />
      </div>
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/30"
        />
      )}
    </section>
  );
}

export default AppLayout;
