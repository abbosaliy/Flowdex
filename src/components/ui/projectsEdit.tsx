import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../../lib/supabaseClient";
import { toast } from "sonner";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import type { Database } from "../../types/database.types";
import { PuffLoader } from "react-spinners";

type ProjectsRow = Database["public"]["Tables"]["project"]["Row"];

function ProjectsEdit() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const [project, setProject] = useState<ProjectsRow | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      if (!projectId) return;

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

  async function handleSave() {
    if (!project) return;

    const { error } = await supabase
      .from("project")
      .update({
        project_name: project.project_name,
        description: project.description,
        purpose: project.purpose,
        benefits: project.benefits,
      })
      .eq("id", project.id);

    if (error) {
      toast.error("Speichern fehlgeschlagen");
      return;
    }

    toast.success("Projekt aktualisiert");
    navigate(`/user/projekts/${project.id}`);
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

  if (!project) {
    return <p>Projekt nicht gefunden</p>;
  }

  return (
    <div className="m-10 max-w-6xl">
      <h2 className="mb-6 text-xl font-semibold">Projekt bearbeiten</h2>

      <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
        <h4>Projekt Name</h4>
        <Input
          value={project.project_name ?? ""}
          onChange={(e) => setProject({ ...project, project_name: e.target.value })}
        />
        <h5>Projekt Beschreibung</h5>
        <Textarea
          value={project.description ?? ""}
          onChange={(e) => setProject({ ...project, description: e.target.value })}
        />
        <h5>Ziel des Projekts</h5>
        <Textarea
          value={project.purpose ?? ""}
          onChange={(e) => setProject({ ...project, purpose: e.target.value })}
        />
        <h5>Projekt Vorteile</h5>
        <Textarea
          value={project.benefits ?? ""}
          onChange={(e) => setProject({ ...project, benefits: e.target.value })}
        />

        <div className="flex justify-end gap-3">
          <Button
            onClick={() => navigate(-1)}
            className="bg-danger hover:bg-danger-hover cursor-pointer text-white"
          >
            Abbrechen
          </Button>

          <Button
            onClick={handleSave}
            className="bg-success hover:bg-success-hover cursor-pointer text-white"
          >
            Speichern
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsEdit;
