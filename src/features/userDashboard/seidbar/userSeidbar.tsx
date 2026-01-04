
import { GoArrowLeft } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import { IoSettingsOutline, IoCreateOutline } from "react-icons/io5";
import { NavLink } from "react-router";

function UserSeidbar({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <div
      className={`z-50 left-0 flex h-full w-75 flex-col bg-white p-4 duration-300 dark:bg-slate-800 ${
        open ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 lg:static lg:translate-x-0`}
    >
      <div className="-ml-2 mb-10 flex w-full items-center justify-between">
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
      <div className="flex  flex-col items-start ml-2 gap-5">
        <h3 className="text-lg font-semibold text-black/70 dark:text-slate-300 ">Menue</h3>
        <ul className="w-full flex flex-col -ml-3 gap-4">

        <NavLink to="projekt-erstellen" 
        onClick={()=> setOpen(false)}
        className={({ isActive }) =>`flex items-center gap-4 text-lg hover:bg-black/10 dark:hover:bg-slate-700  duration-300 p-2 rounded-md dark:text-slate-100 ${isActive ? 'bg-black/10 dark:bg-slate-700 ' : ''}`}>
        <IoCreateOutline  className="h-6 w-6"/>
         Projekt Erstellen
         </NavLink>

         <NavLink to="projekts" 
          onClick={()=> setOpen(false)}
          className={({ isActive }) =>`flex items-center gap-4 text-lg hover:bg-black/10 dark:hover:bg-slate-700  duration-300 p-2 rounded-md dark:text-slate-100 ${isActive ? 'bg-black/10 dark:bg-slate-700 ' : ''}`}>
        <GrProjects className="h-5 w-5"/>
         Projekte
         </NavLink>

         <NavLink to="profile" 
          onClick={()=> setOpen(false)}
         className={({ isActive }) =>`flex items-center gap-4 text-lg hover:bg-black/10 dark:hover:bg-slate-700  duration-300 p-2 rounded-md dark:text-slate-100 ${isActive ? 'bg-black/10 dark:bg-slate-700 ' : ''}`}>
         <FiUser className="h-6 w-6"/>
         Profile
         </NavLink>

         <NavLink to="settings" 
          onClick={()=> setOpen(false)}
           className={({ isActive }) =>`flex items-center gap-4 text-lg hover:bg-black/10 dark:hover:bg-slate-700  duration-300 p-2 rounded-md dark:text-slate-100 ${isActive ? 'bg-black/10 dark:bg-slate-700 ' : ''}`}>
         <IoSettingsOutline className="h-6 w-6"/>
        Einstellung
         </NavLink> 
        </ul>
      </div>
    </div>
  );
}
export default UserSeidbar;
