import { PuffLoader } from "react-spinners";
import ProjectListe from "../../../components/ui/projectsListe";
import UseProjects from "../../../hooks/useProjects";
import ProjectsSearch from "../../../hooks/useProjectsSearch";

function ManagerProjects() {
  const { projects, loading } = UseProjects({ role: "manager" });
  const hasProjects = projects && projects.length > 0;

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-100px)] items-center justify-center">
        <PuffLoader
          size={100}
          color="rgb(60 80 224)"
          loading={loading}
        />
        )
      </div>
    );
  }
  return (
    <div>
      <div className="m-10 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Projekte</h2>
        {!hasProjects && (
          <ProjectsSearch
            role="manager"
            basePath="/manager/projekts"
          />
        )}
      </div>
      {hasProjects ? (
        <ProjectListe
          projects={projects}
          basePath="/manager/projekts"
        />
      ) : (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6">
          <p className="text-center text-lg text-gray-500">Derzeit liegen keine Projektzuweisungen vor.</p>
        </div>
      )}
    </div>
  );
}
export default ManagerProjects;
