import { useEffect, useState } from "react";
import { FiChevronDown, FiLogOut, FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router";
import supabase from "../../../lib/supabaseClient";
import { toast } from "sonner";
import type { Database } from "../../../types/database.types";

type ProfileRow = Database["public"]["Tables"]["profile"]["Row"];

function UserDropdown() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<ProfileRow | null>(null);

  useEffect(() => {
    async function fetschUserImg() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase.from("profile").select("*").eq("id", user.id).single();

      if (error) {
        toast.error("Etwas ist schief gelaufen");
      }

      setUser(data);
    }

    fetschUserImg();
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer items-center gap-2 p-1"
      >
        <img
          src={user?.avatar_url}
          alt="user_img"
          className="h-12 w-12 rounded-full object-cover"
        />
        <FiChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 flex h-50 w-55 flex-col gap-4 rounded-md bg-white p-4 shadow-lg dark:bg-slate-800">
          <NavLink
            to="profile"
            onClick={() => setOpen(false)}
            className="text-md flex items-center gap-2 rounded-md px-4 py-2 hover:bg-black/10 dark:hover:bg-slate-700"
          >
            <FiUser />
            Profil
          </NavLink>

          <NavLink
            to="settings"
            onClick={() => setOpen(false)}
            className="text-md flex items-center gap-2 rounded-md px-4 py-2 hover:bg-black/10 dark:hover:bg-slate-700"
          >
            <IoSettingsOutline />
            Einstellung
          </NavLink>

          <button
            onClick={() => setOpen(false)}
            className="text-mdhover:bg-red-50 flex w-full cursor-pointer items-center gap-2 rounded-md px-4 py-2 dark:hover:bg-slate-700"
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
