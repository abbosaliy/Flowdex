import { FaHtml5, FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiSupabase, SiVite } from "react-icons/si";

function About() {
  return (
    <section className="min-h-screen bg-white py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="mb-6 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            Projektübersicht
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Über <span className="text-blue-600 dark:text-blue-400">Flowdex</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Flowdex ist ein eigenständig entwickeltes Webprojekt zur Simulation eines kollaborativen Projektmanagement-Workflows zwischen Nutzern und
            Managern. Ziel war es, moderne Frontend-Technologien in einer realitätsnahen Anwendung strukturiert umzusetzen.
          </p>
        </div>
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Projektziele</h3>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
              <li>• Simulation realer Projektprozesse</li>
              <li>• Rollenbasierte Struktur (User & Manager)</li>
              <li>• Fokus auf Transparenz & Benutzerfreundlichkeit</li>
              <li>• Skalierbare und wartbare Architektur</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Architektur & Struktur</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Der Fokus lag auf einer klar strukturierten Komponentenarchitektur, sauberem State-Management und einer nachvollziehbaren Rollenlogik
              zwischen Nutzer und Manager.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm md:col-span-2 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-center text-xl font-semibold text-gray-900 dark:text-white">Tech Stack</h3>
            <div className="mt-10">
              <div className="mt-6 flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 dark:bg-gray-800">
                  <FaHtml5 className="text-xl text-orange-500" />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300">HTML</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 dark:bg-gray-800">
                  <SiTypescript className="text-xl text-blue-600" />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300">TypeScript</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 dark:bg-gray-800">
                  <FaReact className="text-xl text-cyan-500" />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300">React</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 dark:bg-gray-800">
                  <SiTailwindcss className="text-xl text-sky-400" />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300">TailwindCSS</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 dark:bg-gray-800">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-300">shadcn/ui</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 dark:bg-gray-800">
                  <SiSupabase className="text-xl text-green-500" />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300">Supabase</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 dark:bg-gray-800">
                  <SiVite className="text-xl text-purple-500" />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300">Vite</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm md:col-span-2 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Herausforderungen</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Eine zentrale Herausforderung bestand darin, die Rollenlogik zwischen User und Manager klar voneinander zu trennen und gleichzeitig eine
              intuitive Benutzeroberfläche zu gestalten. Besonderer Wert wurde auf saubere Code-Struktur, Wiederverwendbarkeit von Komponenten und
              klare Zustandsverwaltung gelegt.
            </p>
          </div>
        </div>
        <div className="mt-20 text-center">
          <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-400">
            Dieses Projekt demonstriert meine Fähigkeit, moderne Webanwendungen strukturiert zu planen, umzusetzen und benutzerorientiert zu
            gestalten.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
