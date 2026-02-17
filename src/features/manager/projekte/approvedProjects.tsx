import { PuffLoader } from "react-spinners";
import UseProjects from "../../../hooks/useProjects";
import ProjectListe from "../../../components/ui/projectsListe";
import ProjectsSearch from "../../../hooks/useProjectsSearch";

function ApprovedProjects() {
  const { projects, loading } = UseProjects({ role: "manager" }, "approved");
  const hasProjects = projects && projects.length > 0;

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
    <div className="px-4 py-8 md:px-8 lg:px-12">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Genehmigte Projekte</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Übersicht aller freigegebenen Projekte</p>
        </div>
        <ProjectsSearch
          role="manager"
          basePath="/manager/projekts"
          status="approved"
          showStatusAction={false}
        />
      </div>
      {hasProjects ? (
        <ProjectListe
          projects={projects}
          basePath="/manager/projekts"
          statusAction={false}
          backPath="/manager/genehmigte-projekte"
        />
      ) : (
        <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center dark:border-gray-700 dark:bg-gray-800">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Keine genehmigten Projekte</p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Es liegen derzeit keine freigegebenen Projekte vor.</p>
        </div>
      )}
    </div>
  );
}

export default ApprovedProjects;
