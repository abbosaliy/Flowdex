import { useEffect, useState } from "react";
import type { Database } from "../types/database.types";
import supabase from "../lib/supabaseClient";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
type ProjectsRow = Database["public"]["Tables"]["project"]["Row"];
interface ProjectsSearchProps {
  role: "user" | "manager";
  basePath: "/user/projekts" | "/manager/projekts";
}

function ProjectsSearch({ role, basePath }: ProjectsSearchProps) {
  const [projects, setProjects] = useState<ProjectsRow[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      let query = supabase.from("project").select("*");

      if (role === "user") {
        query = query.eq("owner_id", user.id);
      }

      if (role === "manager") {
        query = query.eq("manager_id", user.id);
      }

      const { data, error } = await query;
      if (error) {
        toast.error("Fehler beim Laden der Projekte .");
        console.log(error);
        return;
      }

      setProjects(data || []);
    }

    fetchProjects();
  }, [role]);

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
                className="rounded-lg border bg-white p-3 font-semibold dark:bg-slate-800"
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
