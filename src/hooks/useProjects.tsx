import { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";
import { toast } from "sonner";
import type { Database } from "../types/database.types";

type ProjectsRow = Database["public"]["Tables"]["project"]["Row"];
type ProfileRow = Database["public"]["Tables"]["profile"]["Row"];

type ProjectWithOwner = ProjectsRow & {
  owner: ProfileRow | null;
  manager: ProfileRow | null;
};

type UseRole = {
  role: "owner" | "manager";
};

type ProjectStatus = "approved" | "rejected" | "revision" | "all";

function UseProjects({ role }: UseRole, ststus: ProjectStatus) {
  const [projects, setProjects] = useState<ProjectWithOwner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      let query = supabase.from("project").select(`
        *,
        owner:profile!project_owner_id_fkey(*),
        manager:profile!project_manager_id_fkey(*)
      `);

      if (role === "owner") {
        query = query.eq("owner_id", user.id);
      }

      if (role === "manager") {
        query = query.eq("manager_id", user.id);
      }

      if (ststus === "approved") {
        query = query.not("approved", "is", null);
      }

      if (ststus === "rejected") {
        query = query.not("rejected", "is", null);
      }

      if (ststus === "revision") {
        query = query.not("revision", "is", null);
      }

      if (ststus === "all") {
        query = query.is("approved", null).is("rejected", null).is("revision", null);
      }

      const { data, error } = await query;
      if (error) {
        toast.error("Etwas ist schief gelaufen beim Laden der Projekte.");
        return;
      }

      setProjects(data);
      setLoading(false);
    }

    fetchProjects();
  }, [role, ststus]);

  return { projects, loading };
}

export default UseProjects;
