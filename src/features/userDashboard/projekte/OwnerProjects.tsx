import { PuffLoader } from "react-spinners";
import ProjectListe from "../../../components/ui/projectsListe";
import UseProjects from "../../../hooks/useProjects";
import ProjectsSearch from "../../../hooks/useProjectsSearch";

function OwnerProjects() {
  const { projects, loading } = UseProjects({ role: "owner" });

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
        <h2 className="text-xl font-semibold">Projekte</h2>
        <ProjectsSearch
          role="user"
          basePath="/user/projekts"
        />
      </div>

      <ProjectListe
        projects={projects}
        basePath="/user/projekts"
      />
    </div>
  );
}
export default OwnerProjects;
