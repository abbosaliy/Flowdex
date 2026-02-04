import { PuffLoader } from "react-spinners";
import ProjectListe from "../../../components/ui/projectsListe";
import UseProjects from "../../../hooks/useProjects";
import ProjectsSearch from "../../../hooks/useProjectsSearch";

function OwnerApprovedProjects() {
  const { projects, loading } = UseProjects({ role: "owner" }, "approved");
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
    <div className="max-w-8xl">
      <div className="m-10 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Angenommene Projekte</h2>
        <ProjectsSearch
          role="user"
          basePath="/user/projekts"
          status="approved"
        />
      </div>
      {hasProjects ? (
        <ProjectListe
          projects={projects}
          basePath="/user/projekts"
          backPath="/user/angenommene-projekte"
        />
      ) : (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6">
          <p className="text-center text-lg text-gray-500">Du hast keine angeneommenen Projekte</p>
        </div>
      )}
    </div>
  );
}
export default OwnerApprovedProjects;
