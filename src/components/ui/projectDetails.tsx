import { useEffect, useState } from "react";
import type { Database } from "../../types/database.types";
import supabase from "../../lib/supabaseClient";
import { toast } from "sonner";
import { PuffLoader } from "react-spinners";
import { GoArrowLeft } from "react-icons/go";
import { Card } from "./card";
import { Link, useParams, useLocation } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { Button } from "./button";
type ProjectsRow = Database["public"]["Tables"]["project"]["Row"];

function ProjectsDetails() {
  const { projectId } = useParams();
  const location = useLocation();

  const isManager = location.pathname.startsWith("/manager");
  const backPath = isManager ? "/manager/projekts" : "/user/projekts";

  const [project, setProject] = useState<ProjectsRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [pendingStatus, setPendingStatus] = useState<"approved" | "rejected" | "revision" | null>(null);

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

  async function updateStatus(status: "approved" | "rejected" | "revision") {
    setPendingStatus(status);

    const { error } = await supabase.from("project").update({ status }).eq("id", Number(projectId));

    if (error) {
      toast.error("Status konnte nicht aktualisiert werden");
      setPendingStatus(null);
      console.error(error);
      return;
    }

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
        {isManager && (project?.status === "submitted" || pendingStatus !== null) && (
          <div>
            <Button
              variant={pendingStatus === "revision" ? "default" : "outline"}
              className={pendingStatus === "revision" ? "bg-yellow-500 text-white" : ""}
              onClick={() => updateStatus("revision")}
              disabled={!!pendingStatus}
            >
              Zur Bearbetung
            </Button>
            <Button
              variant={pendingStatus === "rejected" ? "default" : "outline"}
              className={pendingStatus === "rejected" ? "bg-red-500 text-white" : ""}
              onClick={() => updateStatus("rejected")}
              disabled={!!pendingStatus}
            >
              Ablehnen
            </Button>
            <Button
              variant={pendingStatus === "approved" ? "default" : "outline"}
              className={pendingStatus === "approved" ? "bg-green-500 text-white" : ""}
              onClick={() => updateStatus("approved")}
              disabled={!!pendingStatus}
            >
              Genehmigen
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
export default ProjectsDetails;
