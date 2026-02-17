import { PuffLoader } from "react-spinners";
import ProjectListe from "../../../components/ui/projectsListe";
import UseProjects from "../../../hooks/useProjects";
import ProjectsSearch from "../../../hooks/useProjectsSearch";

function OwnerRejectedProjects() {
  const { projects, loading } = UseProjects({ role: "owner" }, "rejected");
  const hasProjects = projects && projects.length > 0;

  if (loading) {
    return (
      <div className="flex min-h-[75vh] items-center justify-center">
        <PuffLoader
          size={65}
          color="rgb(59 130 246)"
        />
      </div>
    );
  }

  return (
    <div className="px-4 py-10 md:px-8 lg:px-12">
      <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Abgelehnte Projekte</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Übersicht deiner abgelehnten Projekte</p>
        </div>
        <ProjectsSearch
          role="user"
          basePath="/user/projekts"
          status="rejected"
          showStatusAction={false}
        />
      </div>
      {hasProjects ? (
        <ProjectListe
          projects={projects}
          basePath="/user/projekts"
          backPath="/user/abgelehnte-projekte"
        />
      ) : (
        <div className="flex min-h-[55vh] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-8 py-12 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Keine abgelehnten Projekte</p>
          <p className="mt-3 max-w-md text-sm text-gray-500 dark:text-gray-400">Du hast derzeit keine abgelehnten Projekte.</p>
        </div>
      )}
    </div>
  );
}
export default OwnerRejectedProjects;
