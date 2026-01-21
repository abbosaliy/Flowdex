import { useEffect, useState } from "react";
import type { Database } from "../../../types/database.types";
import supabase from "../../../lib/supabaseClient";
import { Input } from "../../../components/ui/input";
import { Link } from "react-router";
type ProjectsRow = Database["public"]["Tables"]["project"]["Row"];

function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectsRow[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase.from("project").select("*").eq("owner_id", user.id);

      if (!error) {
        setProjects(data);
        console.log(data);
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects =
    search.trim().length > 0 ? projects.filter((project) => (project.project_name ?? "").toLowerCase().includes(search.toLowerCase())) : [];

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
              <div
                key={project.id}
                className="rounded-lg border bg-slate-100 dark:bg-slate-800"
              >
                <Link to={`/user/projekts/${project.id}`}>
                  <h3 className="p-3 font-semibold">{project.project_name}</h3>
                </Link>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
export default ProjectsPage;
