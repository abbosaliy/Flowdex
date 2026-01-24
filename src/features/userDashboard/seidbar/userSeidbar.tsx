import { GoArrowLeft } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import { IoSettingsOutline, IoCreateOutline } from "react-icons/io5";
import { NavLink } from "react-router";

function UserSeidbar({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
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
      <div className="ml-2 flex flex-col items-start gap-5">
        <h3 className="text-lg font-semibold text-black/70 dark:text-slate-300">Menue</h3>
        <ul className="-ml-3 flex w-full flex-col gap-4">
          <NavLink
            to="projekt-erstellen"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-md p-2 text-lg duration-300 hover:bg-black/10 dark:text-slate-100 dark:hover:bg-slate-700 ${isActive ? "bg-black/10 dark:bg-slate-700" : ""}`
            }
          >
            <IoCreateOutline className="h-6 w-6" />
            Projekt Erstellen
          </NavLink>

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
            to="einstellungen"
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
export default UserSeidbar;
