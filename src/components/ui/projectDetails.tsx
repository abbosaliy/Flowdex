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
      console.log(projectId);

      const { data, error } = await supabase.from("project").select("*").eq("id", Number(projectId)).single();

      if (error) {
        toast.error("Projekt konnte nicht geladen werden");
        console.error(error);
        setLoading(false);
        return;
      }

      setProject(data);
      console.log(data);

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

      console.error(error);
      return;
    }
    navigate(-1);
    setProject({ ...project, [status]: localTime } as ProjectsRow);
    toast.success("Status erfolgreich aktualisiert");
  }

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
    <div className="m-10 flex max-w-7xl flex-col gap-5">
      <Link
        to={backPath}
        className="text-brand hover:text-brand/75 mb-4 flex items-center gap-2"
      >
        <GoArrowLeft size={25} /> Zurück zu Projekten
      </Link>
      <Card className="p-6 dark:bg-slate-800">
        {!isManager && (
          <div className="flex justify-end">
            <Link
              to={`/user/projekts/${project?.id}/edit`}
              className="bg-brand hover:bg-brand-hover rounded p-1 text-white"
            >
              <TbEdit size={25}></TbEdit>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2">
          <div className="text-sm text-gray-500 dark:text-gray-400">Projekt Name:</div>
          <div className="text-base font-semibold">{project?.project_name}</div>

          <div className="text-sm text-gray-500 dark:text-gray-400">Beschreibung:</div>
          <div>{project?.description}</div>

          <div className="text-sm text-gray-500 dark:text-gray-400">Ziel:</div>
          <div>{project?.purpose}</div>

          <div className="text-sm text-gray-500 dark:text-gray-400">Vorteil:</div>
          <div>{project?.benefits}</div>
        </div>

        {isManager && showStatusAction && (
          <div className="mt-6 flex gap-4">
            <Button onClick={() => updateStatus("revision")}>{project?.revision ? "In Bearbeitung" : "Zur Bearbeitung"}</Button>
            <Button onClick={() => updateStatus("rejected")}>{project?.rejected ? "Abgelehnt" : "Ablehnen"}</Button>
            <Button onClick={() => updateStatus("approved")}> {project?.approved ? "Genehmigt" : "Genehmigen"} </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
export default ProjectsDetails;
