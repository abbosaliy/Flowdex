import { Link } from "react-router-dom";
import type { Database } from "../../types/database.types";
import { Card } from "./card";

type ProjectsRow = Database["public"]["Tables"]["project"]["Row"];

interface ProjectsListeProps {
  projects: ProjectsRow[];
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
          className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
        >
          {/* Project Info */}
          <div>
            <p className="text-xs tracking-wide text-gray-400 uppercase dark:text-gray-500">Projektname</p>

            <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">{project.project_name}</h3>
          </div>

          {/* Action */}
          <div className="mt-4 flex justify-end">
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
