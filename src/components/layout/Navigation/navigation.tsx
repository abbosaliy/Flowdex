import { NavLink } from 'react-router';
import ThemaToggle from '../../Toggle/themeToggle';
import MobileNavi from './mobileNavi';

function Navigation({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="-ml-8 sm:-ml-10 flex-1 md:flex md:items-center md:gap-12">
            <div className="flex items-center">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-20 w-auto"
              />
              <p className="-ml-6 text-2xl font-semibold">Flowdex</p>
            </div>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav
              aria-label="Global"
              className="hidden lg:block"
            >
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <NavLink
                    to={'/'}
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'about'}
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  >
                    Über uns
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'history'}
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  >
                    History
                  </NavLink>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Projects
                  </a>
                </li>

                <li></li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <ThemaToggle />
                <div className="hidden lg:block">
                  <NavLink
                    to={'auth'}
                    className="px-3 py-2 rounded-sm bg-blue-500 text-white hover:bg-blue-600  focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer"
                  >
                    Anmelden
                  </NavLink>
                </div>
              </div>

              <div className="block lg:hidden">
                <button
                  onClick={() => setMenuOpen(true)}
                  className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
                <MobileNavi
                  isOpen={menuOpen}
                  onClose={() => setMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navigation;
