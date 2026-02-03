import { PuffLoader } from "react-spinners";
import UseProjects from "../../../hooks/useProjects";
import ProjectListe from "../../../components/ui/projectsListe";
import ProjectsSearch from "../../../hooks/useProjectsSearch";

function RejectedProjects() {
  const { projects, loading } = UseProjects({ role: "manager" }, "rejected");
  const hasProjects = projects && projects.length > 0;

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
    <div>
      <div className="m-10 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Abgelehnte Projekte</h2>

        <ProjectsSearch
          role="manager"
          basePath="/manager/projekts"
          status="rejected"
        />
      </div>
      {hasProjects ? (
        <ProjectListe
          projects={projects}
          basePath="/manager/projekts"
          statusAction={false}
          backPath="/manager/abgelehnte-projekte"
        />
      ) : (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6">
          <p className="text-center text-lg text-gray-500">Es liegen keine abgelehnten Projekte vor.</p>
        </div>
      )}
    </div>
  );
}
export default RejectedProjects;
