import { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { FiChevronDown, FiLogOut, FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import useDropdown from "../../hooks/useDropdown";
interface ProfileDropdownProps {
  basePath: "/user" | "/manager";
}

function ProfileDropdown({ basePath }: ProfileDropdownProps) {
  const [open, setOpen] = useState(false);
  const { profile, logout } = useDropdown();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/");
  }
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full p-1 transition hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <img
          src={profile?.avatar_url || `${import.meta.env.BASE_URL}images/avatar.png`}
          alt="user"
          className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700"
        />
        <FiChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-3 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800">
          <div className="py-2">
            <NavLink
              to={`${basePath}/profile`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <FiUser className="h-4 w-4" />
              Profil
            </NavLink>
            <NavLink
              to={`${basePath}/einstellungen`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <IoSettingsOutline className="h-4 w-4" />
              Einstellungen
            </NavLink>
            <div className="my-2 border-t border-gray-200 dark:border-gray-700" />
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 px-4 py-2 text-sm text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
            >
              <FiLogOut className="h-4 w-4" />
              Ausloggen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
