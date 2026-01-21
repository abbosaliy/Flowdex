import { useEffect, useState } from "react";
import supabase from "../../../lib/supabaseClient";
import { toast } from "sonner";
import type { Database } from "../../../types/database.types";
import { PuffLoader } from "react-spinners";
import { Card } from "../../../components/ui/card";
import { Link } from "react-router";
import ProjectsPage from "./ProjectSearch";

type ProrjectsRow = Database["public"]["Tables"]["project"]["Row"];

function Projekts() {
  const [projects, setProjects] = useState<ProrjectsRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function ProjectsListe() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase.from("project").select("*").eq("owner_id", user.id);

      if (error) {
        toast.error("Etwas ist schiefgelaufen.");
        console.log(error);

        return;
      }
      setProjects(data);
      setLoading(false);
    }

    ProjectsListe();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-100px)] items-center justify-center">
        <PuffLoader
          size={100}
          color="rgb(60 80 224)"
          loading={loading}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="m-10 mb-2 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Projekte</h2>
        <ProjectsPage></ProjectsPage>
      </div>
      <div className="gap-x m-10 flex max-h-165 flex-col gap-2 overflow-y-scroll p-6 shadow-lg dark:bg-slate-800">
        {projects.map((index) => (
          <Card
            key={index.id}
            className="p-4 dark:bg-slate-900"
          >
            <div>
              <p className="text-sm dark:text-gray-300">Projekt Name:</p>
              <h3 className="text-xl font-semibold">{index.project_name}</h3>
            </div>
            <div>
              <Link
                to={`/user/projekts/${index.id}`}
                className="bg-brand hover:bg-brand-hover cursor-pointer rounded px-4 py-2 text-white"
              >
                Projekt ansehen
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default Projekts;
