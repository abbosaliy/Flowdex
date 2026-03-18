import { Link } from "react-router-dom";
import type { Database } from "../../types/database.types";
import { Card } from "./card";

type ProjectsRow = Database["public"]["Tables"]["project"]["Row"];
type ProfileRow = Database["public"]["Tables"]["profile"]["Row"];

type ProjectWithOwner = ProjectsRow & {
  owner: ProfileRow | null;
  manager: ProfileRow | null;
};

interface ProjectsListeProps {
  projects: ProjectWithOwner[];
  basePath: string;
  statusAction?: boolean;
  backPath?: string;
}

function ProjectListe({ projects, basePath, statusAction = true, backPath }: ProjectsListeProps) {
  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="flex h-full flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
        >
          <div className="space-y-2">
            <p className="text-xs tracking-wide text-gray-400 uppercase dark:text-gray-500">Projektname</p>

            <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">{project.project_name}</h3>
          </div>

          <div className="mt-6 flex items-end justify-between">
            <div>
              <p className="text-sm tracking-wide text-gray-800 dark:text-gray-200">
                Erstellt von: {project.owner?.first_name} {project.owner?.last_name}
              </p>
              <p className="text-sm tracking-wide text-gray-800 dark:text-gray-200">
                Datum: {new Date(project.created_at).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>

            <Link
              to={`${basePath}/${project.id}`}
              state={{ showStatusAction: statusAction, backPath }}
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Projekt ansehen
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default ProjectListe;
