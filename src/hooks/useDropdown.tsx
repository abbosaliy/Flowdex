import { useEffect, useState } from "react";
import type { Database } from "../types/database.types";
import supabase from "../lib/supabaseClient";
import { toast } from "sonner";
type ProfileRow = Database["public"]["Tables"]["profile"]["Row"];

function useDropdown() {
  const [profile, setProfile] = useState<ProfileRow | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase.from("profile").select("*").eq("id", user.id).single();

      if (error) {
        toast.error("Profil konnte nicht geladen werden");
        console.error(error);
        return;
      }

      setProfile(data);
    }

    fetchProfile();
  }, []);

  async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Abmeldung fehlgeschlagen");
      return;
    }
  }

  return {
    profile,
    logout,
  };
}

export default useDropdown;
