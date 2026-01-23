import { GoArrowLeft } from "react-icons/go";
import { FiCheckCircle, FiRefreshCcw, FiUser, FiXCircle } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router";

function ManagerSeidbar({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <div
      className={`left-0 z-50 flex h-full w-75 flex-col bg-white p-4 duration-300 dark:bg-slate-800 ${
        open ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 lg:static lg:translate-x-0`}
    >
      <div className="mb-10 -ml-2 flex w-full items-center justify-between">
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="user"
            className="h-10 w-15"
          />
          <h1 className="text-2xl font-bold">Flowdex</h1>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="cursor-pointer lg:hidden"
        >
          <GoArrowLeft className="h-8 w-8" />
        </button>
      </div>

      <div className="ml-2 flex flex-col gap-5">
        <h3 className="text-lg font-semibold text-black/70 dark:text-slate-300">Menue</h3>
        <ul className="-ml-3 flex flex-col gap-4">
          <NavLink
            to="projekts"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-md p-2 text-lg duration-300 hover:bg-black/10 dark:text-slate-100 dark:hover:bg-slate-700 ${isActive ? "bg-black/10 dark:bg-slate-700" : ""}`
            }
          >
            <GrProjects className="h-5 w-5" />
            Projekte
          </NavLink>

          <NavLink
            to="projekts/accepted"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-md p-2 text-lg duration-300 hover:bg-black/10 dark:text-slate-100 dark:hover:bg-slate-700 ${isActive ? "bg-black/10 dark:bg-slate-700" : ""}`
            }
          >
            <FiCheckCircle className="h-5 w-5" />
            Angenommen
          </NavLink>

          <NavLink
            to="projekts/in-progress"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-md p-2 text-lg duration-300 hover:bg-black/10 dark:text-slate-100 dark:hover:bg-slate-700 ${isActive ? "bg-black/10 dark:bg-slate-700" : ""}`
            }
          >
            <FiRefreshCcw className="h-5 w-5" />
            In Bearbeitung
          </NavLink>

          <NavLink
            to="projekts/rejected"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-md p-2 text-lg duration-300 hover:bg-black/10 dark:text-slate-100 dark:hover:bg-slate-700 ${isActive ? "bg-black/10 dark:bg-slate-700" : ""}`
            }
          >
            <FiXCircle className="h-5 w-5" />
            Abgelehnt
          </NavLink>
        </ul>
      </div>

      <div className="mt-auto ml-2">
        <ul className="-ml-3 flex flex-col gap-4">
          <NavLink
            to="profile"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-md p-2 text-lg duration-300 hover:bg-black/10 dark:text-slate-100 dark:hover:bg-slate-700 ${isActive ? "bg-black/10 dark:bg-slate-700" : ""}`
            }
          >
            <FiUser className="h-6 w-6" />
            Profile
          </NavLink>

          <NavLink
            to="settings"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-md p-2 text-lg duration-300 hover:bg-black/10 dark:text-slate-100 dark:hover:bg-slate-700 ${isActive ? "bg-black/10 dark:bg-slate-700" : ""}`
            }
          >
            <IoSettingsOutline className="h-6 w-6" />
            Einstellung
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
export default ManagerSeidbar;
