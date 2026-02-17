import { HiOutlineX } from "react-icons/hi";
import { NavLink } from "react-router";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileNavi({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      <div
        className={`fixed top-0 right-0 z-50 flex h-screen w-72 transform flex-col bg-white p-8 shadow-xl transition-transform duration-300 lg:hidden dark:bg-gray-900 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            <HiOutlineX className="h-8 w-8" />
          </button>
        </div>

        <nav className="mt-12 flex flex-col gap-8 text-lg font-medium">
          <NavLink
            to="/"
            onClick={onClose}
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="about"
            onClick={onClose}
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              }`
            }
          >
            Über uns
          </NavLink>
        </nav>

        <div className="flex grow" />
        <NavLink
          to="auth"
          onClick={onClose}
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
        >
          Anmelden
        </NavLink>
      </div>
    </>
  );
}

export default MobileNavi;
