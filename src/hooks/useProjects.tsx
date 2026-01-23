import { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";
import { toast } from "sonner";
import type { Database } from "../types/database.types";

type ProjectsRow = Database["public"]["Tables"]["project"]["Row"];
type UseRole = {
  role: "owner" | "manager";
};

function UseProjects({ role }: UseRole) {
  const [projects, setProjects] = useState<ProjectsRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      let query = supabase.from("project").select("*");

      if (role === "owner") {
        query = query.eq("owner_id", user.id);
      }

      if (role === "manager") {
        query = query.eq("manager_id", user.id);
      }

      const { data, error } = await query;
      if (error) {
        toast.error("Etwas ist schief gelaufen beim Laden der Projekte.");
        return;
      }

      setProjects(data);
      console.log(data);

      setLoading(false);
    }

    fetchProjects();
  }, [role]);

  return { projects, loading };
}

export default UseProjects;
