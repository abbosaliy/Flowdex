import { useEffect, useState } from "react";
import type { Database } from "../../../types/database.types";
import supabase from "../../../lib/supabaseClient";
import { Link, useParams } from "react-router";
import { toast } from "sonner";
import { PuffLoader } from "react-spinners";
import { Card } from "../../../components/ui/card";
import { GoArrowLeft } from "react-icons/go";

type ProrjectsRow = Database["public"]["Tables"]["project"]["Row"];

function ProjectsDetails() {
  const [project, setProject] = useState<ProrjectsRow | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    async function ProjectsListe() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase.from("project").select("*").eq("id", Number(id)).single();

      if (error) {
        toast.error("Etwas ist schiefgelaufen.");
        console.log(error);
        return;
      }

      setProject(data);
      setLoading(false);
    }

    ProjectsListe();
  }, [id]);

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
    <div className="m-10 flex max-w-full flex-col gap-5">
      <Link
        to={"/user/projekts"}
        className="text-brand hover:text-brand/75 mb-4 flex items-center gap-2"
      >
        <GoArrowLeft size={"25"} /> Zurück zu Projekten
      </Link>
      <Card className="p-6 dark:bg-slate-800">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2">
          <div className="text-sm text-gray-500 dark:text-gray-400">Projekt Name:</div>
          <div className="text-base font-semibold text-slate-900 dark:text-slate-100">{project?.project_name}</div>

          <div className="text-sm text-gray-500 dark:text-gray-400">Beschreibung:</div>
          <div className="text-slate-700 dark:text-slate-200">{project?.description}</div>

          <div className="text-sm text-gray-500 dark:text-gray-400">Ziel: </div>
          <div className="text-slate-700 dark:text-slate-200">{project?.purpose}</div>

          <div className="text-sm text-gray-500 dark:text-gray-400">Vorteil:</div>
          <div className="text-slate-700 dark:text-slate-200">{project?.benefits}</div>
        </div>
      </Card>
    </div>
  );
}

export default ProjectsDetails;
