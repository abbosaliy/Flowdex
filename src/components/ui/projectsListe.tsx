import { Link } from "react-router-dom";
import type { Database } from "../../types/database.types";
import { Card } from "./card";

type ProjectsRow = Database["public"]["Tables"]["project"]["Row"];

interface ProjectsListeProps {
  projects: ProjectsRow[];
  basePath: string;
}

function ProjectListe({ projects, basePath }: ProjectsListeProps) {
  console.log(projects);

  return (
    <div className="gap-x m-10 flex max-h-165 flex-col gap-2 overflow-y-scroll p-6 shadow-lg dark:bg-slate-800">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="p-4 dark:bg-slate-900"
        >
          <div>
            <p className="text-sm dark:text-gray-300">Projekt Name:</p>
            <h3 className="text-xl font-semibold">{project.project_name}</h3>
          </div>

          <Link
            to={`${basePath}/${project.id}`}
            className="bg-brand hover:bg-brand-hover mt-3 inline-block max-w-50 rounded px-4 py-2 text-white"
          >
            Projekt ansehen
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default ProjectListe;
