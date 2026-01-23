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
        className="flex cursor-pointer items-center gap-2 p-1"
      >
        <img
          src={profile?.avatar_url || "/images/avatar.png"}
          alt="user"
          className="h-12 w-12 rounded-full object-cover"
        />
        <FiChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-56 rounded-md bg-white p-4 shadow-lg dark:bg-slate-800">
          <NavLink
            to={`${basePath}/profile`}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 rounded-md px-4 py-2 hover:bg-black/10 dark:hover:bg-slate-700"
          >
            <FiUser />
            Profil
          </NavLink>

          <NavLink
            to={`${basePath}/settings`}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 rounded-md px-4 py-2 hover:bg-black/10 dark:hover:bg-slate-700"
          >
            <IoSettingsOutline />
            Einstellung
          </NavLink>

          <button
            onClick={handleLogout}
            className="mt-2 flex w-full items-center gap-2 rounded-md px-4 py-2 hover:bg-red-50 dark:hover:bg-slate-700"
          >
            <FiLogOut />
            Ausloggen
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
