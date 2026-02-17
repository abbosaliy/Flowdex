import { GoArrowLeft } from "react-icons/go";
import { FiCheckCircle, FiRefreshCcw, FiUser, FiXCircle } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router";

function ManagerSidebar({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium transition-all
     ${
       isActive
         ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400"
         : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
     }`;

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}
      <aside
        className={`fixed top-0 left-0 z-50 flex h-full w-64 flex-col border-r border-gray-200 bg-white px-4 py-6 shadow-lg transition-transform duration-300 dark:border-gray-800 dark:bg-gray-900 ${open ? "translate-x-0" : "-translate-x-full"} lg:static lg:translate-x-0`}
      >
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Flowdex Logo"
              className="h-8 w-auto"
            />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Flowdex</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-gray-800 lg:hidden dark:text-gray-400 dark:hover:text-white"
          >
            <GoArrowLeft className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-xs font-semibold tracking-wider text-gray-400 uppercase dark:text-gray-500">Menü</h3>

          <nav className="flex flex-col gap-2">
            <NavLink
              to="projekts"
              onClick={() => setOpen(false)}
              className={linkStyle}
            >
              <GrProjects className="h-4 w-4" />
              Projekte
            </NavLink>

            <NavLink
              to="genehmigte-projekte"
              onClick={() => setOpen(false)}
              className={linkStyle}
            >
              <FiCheckCircle className="h-4 w-4" />
              Angenommen
            </NavLink>

            <NavLink
              to="bearbeitungs-projekte"
              onClick={() => setOpen(false)}
              className={linkStyle}
            >
              <FiRefreshCcw className="h-4 w-4" />
              In Bearbeitung
            </NavLink>

            <NavLink
              to="abgelehnte-projekte"
              onClick={() => setOpen(false)}
              className={linkStyle}
            >
              <FiXCircle className="h-4 w-4" />
              Abgelehnt
            </NavLink>
          </nav>
        </div>
        <div className="mt-auto border-t border-gray-200 pt-8 dark:border-gray-800">
          <nav className="flex flex-col gap-2">
            <NavLink
              to="profile"
              onClick={() => setOpen(false)}
              className={linkStyle}
            >
              <FiUser className="h-4 w-4" />
              Profil
            </NavLink>

            <NavLink
              to="einstellungen"
              onClick={() => setOpen(false)}
              className={linkStyle}
            >
              <IoSettingsOutline className="h-4 w-4" />
              Einstellungen
            </NavLink>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default ManagerSidebar;
