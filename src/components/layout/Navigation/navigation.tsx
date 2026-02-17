import { NavLink } from "react-router";
import ThemaToggle from "../../Toggle/themeToggle";
import MobileNavi from "./mobileNavi";

function Navigation({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (open: boolean) => void }) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Flowdex Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-semibold text-gray-900 dark:text-white">Flowdex</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition ${
                  isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) =>
                `transition ${
                  isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                }`
              }
            >
              Über uns
            </NavLink>
          </nav>
          <div className="flex items-center gap-4">
            <ThemaToggle />
            <NavLink
              to="auth"
              className="hidden items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none lg:inline-flex dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
            >
              Anmelden
            </NavLink>
            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-md bg-gray-100 p-2 text-gray-600 transition hover:bg-gray-200 lg:hidden dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <MobileNavi
              isOpen={menuOpen}
              onClose={() => setMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
