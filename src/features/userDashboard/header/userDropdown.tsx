import { useState } from "react";
import { FiChevronDown, FiLogOut, FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router";

function UserDropdown() {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2  p-1 cursor-pointer"
        >
          <img
            src="/images/user.jpg"
            alt="user"
            className="h-12 w-12 rounded-full object-cover"
          />
          <FiChevronDown
            className={`h-5 w-5 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        
        {open && (
          <div className="absolute flex flex-col gap-4  p-4 right-0 mt-2 w-55 h-50 rounded-md bg-white shadow-lg dark:bg-slate-800 z-50">
            <NavLink
              to="profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-md  hover:bg-black/10 dark:hover:bg-slate-700"
            >
              <FiUser />
              Profil
            </NavLink>
  
            <NavLink
              to="settings"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-md  text-md hover:bg-black/10 dark:hover:bg-slate-700"
            >
              <IoSettingsOutline />
            Einstellung
            </NavLink>
  
            <button
              onClick={() => setOpen(false)}
              className="flex w-full items-center cursor-pointer gap-2 px-4 py-2 rounded-md text-mdhover:bg-red-50    dark:hover:bg-slate-700"
            >
              <FiLogOut />
             Ausloggen
            </button>
          </div>
        )}
      </div>
    );
  }
  
  export default UserDropdown;
  