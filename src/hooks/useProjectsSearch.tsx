import { useEffect, useState } from "react";
import type { Database } from "../types/database.types";
import supabase from "../lib/supabaseClient";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";

type ProjectsRow = Database["public"]["Tables"]["project"]["Row"];
type ProfileRow = Database["public"]["Tables"]["profile"]["Row"];

type ProjectWithOwner = ProjectsRow & {
  owner: ProfileRow | null;
  manager: ProfileRow | null;
};

type ProjectStatus = "approved" | "rejected" | "revision" | "all";

interface ProjectsSearchProps {
  role: "user" | "manager";
  basePath: "/user/projekts" | "/manager/projekts";
  status: ProjectStatus;
  showStatusAction: boolean;
}

function ProjectsSearch({ role, basePath, status, showStatusAction }: ProjectsSearchProps) {
  const [projects, setProjects] = useState<ProjectWithOwner[]>([]);
  const [search, setSearch] = useState("");

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

      if (role === "user") {
        query = query.eq("owner_id", user.id);
      }

      if (role === "manager") {
        query = query.eq("manager_id", user.id);
      }

      if (status == "approved") {
        query = query.not("approved", "is", null);
      }

      if (status == "rejected") {
        query = query.not("rejected", "is", null);
      }

      if (status == "revision") {
        query = query.not("revision", "is", null);
      }

      if (status == "all") {
        query = query.is("approved", null).is("rejected", null).is("revision", null);
      }

      const { data, error } = await query;
      if (error) {
        toast.error("Fehler beim Laden der Projekte.");
        return;
      }

      setProjects(data || []);
    }

    fetchProjects();
  }, [role, status]);

  const filteredProjects = projects.filter((project) => search && project.project_name?.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Projekt suchen..."
        className="w-64 bg-white md:w-100"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search.trim() &&
        (filteredProjects.length === 0 ? (
          <p className="text-muted-foreground absolute top-full left-0 z-50 p-1 text-sm">Keine passenden Projekte gefunden</p>
        ) : (
          <div className="absolute top-full left-0 z-50 flex w-full flex-col gap-1 rounded-lg py-1">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`${basePath}/${project.id}`}
                state={{ showStatusAction: showStatusAction }}
                className="rounded-lg border bg-white p-3 font-semibold hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
              >
                {project.project_name}
              </Link>
            ))}
          </div>
        ))}
    </div>
  );
}

export default ProjectsSearch;
