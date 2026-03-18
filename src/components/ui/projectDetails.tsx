import { useEffect, useState } from "react";
import type { Database } from "../../types/database.types";
import supabase from "../../lib/supabaseClient";
import { toast } from "sonner";
import { PuffLoader } from "react-spinners";
import { GoArrowLeft } from "react-icons/go";
import { Card } from "./card";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { Button } from "./button";
type ProjectsRow = Database["public"]["Tables"]["project"]["Row"];

function ProjectsDetails() {
  const { projectId } = useParams();
  const location = useLocation();
  const showStatusAction = location.state?.showStatusAction ?? true;
  const isManager = location.pathname.startsWith("/manager");
  const backPath = location.state?.backPath ?? (isManager ? "/manager/projekts" : "/user/projekts");
  const [project, setProject] = useState<ProjectsRow | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!projectId) return;
    async function fetchProject() {
      const { data, error } = await supabase.from("project").select("*").eq("id", Number(projectId)).single();

      if (error) {
        toast.error("Projekt konnte nicht geladen werden");
        setLoading(false);
        return;
      }

      setProject(data);

      setLoading(false);
    }

    fetchProject();
  }, [projectId]);

  async function updateStatus(status: keyof ProjectsRow) {
    if (!projectId) return;

    const localTime = new Date().toISOString();
    const { error } = await supabase
      .from("project")
      .update({ [status]: localTime })
      .eq("id", Number(projectId));

    if (error) {
      toast.error("Status konnte nicht aktualisiert werden");
      return;
    }
    navigate(-1);
    setProject({ ...project, [status]: localTime } as ProjectsRow);
    toast.success("Status erfolgreich aktualisiert");
  }

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <PuffLoader
          size={70}
          color="rgb(59 130 246)"
        />
      </div>
    );
  }

  return (
    <div className="px-4 py-10 md:px-8 lg:px-12">
      <Link
        to={backPath}
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
      >
        <GoArrowLeft size={18} />
        Zurück zu Projekten
      </Link>
      <Card className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        {!isManager && (
          <div className="flex justify-end">
            <Link
              to={`/user/projekts/${project?.id}/edit`}
              className="inline-flex items-center justify-center rounded-md bg-blue-600 p-2 text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              <TbEdit size={18} />
            </Link>
          </div>
        )}

        <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">{project?.project_name}</h2>
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-12">
          <div>
            <p className="text-xs tracking-wide text-gray-400 uppercase dark:text-gray-500">Beschreibung</p>
            <p className="mt-1 text-sm text-gray-800 dark:text-gray-200">{project?.description || "—"}</p>
          </div>

          <div>
            <p className="text-xs tracking-wide text-gray-400 uppercase dark:text-gray-500">Ziel</p>
            <p className="mt-1 text-sm text-gray-800 dark:text-gray-200">{project?.purpose || "—"}</p>
          </div>

          <div>
            <p className="text-xs tracking-wide text-gray-400 uppercase dark:text-gray-500">Vorteile</p>
            <p className="mt-1 text-sm text-gray-800 dark:text-gray-200">{project?.benefits || "—"}</p>
          </div>
        </div>

        {isManager && showStatusAction && (
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              onClick={() => updateStatus("revision")}
              className="bg-yellow-500 text-white hover:bg-yellow-600"
            >
              {project?.revision ? "In Bearbeitung" : "Zur Bearbeitung"}
            </Button>

            <Button
              onClick={() => updateStatus("rejected")}
              className="bg-red-600 text-white hover:bg-red-700"
            >
              {project?.rejected ? "Abgelehnt" : "Ablehnen"}
            </Button>

            <Button
              onClick={() => updateStatus("approved")}
              className="bg-green-600 text-white hover:bg-green-700"
            >
              {project?.approved ? "Genehmigt" : "Genehmigen"}
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
export default ProjectsDetails;
