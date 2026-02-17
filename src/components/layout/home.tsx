import { NavLink } from "react-router";
import Hero from "./hero";

function Home() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto mt-24 max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Der kollaborative Arbeitsplatz <br />
              für modernes <span className="text-blue-500 dark:text-blue-400">Projektmanagement</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-400">
              Plane, überprüfe und verwalte Projekte zwischen Nutzern und Managern – alles auf einer sicheren und modernen SaaS-Plattform.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <NavLink
                to="auth"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
              >
                Jetzt starten
              </NavLink>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-blue-500/20 via-purple-500/20 to-cyan-400/20 blur-3xl" />

            <img
              src={`${import.meta.env.BASE_URL}images/hero.png`}
              alt="Flowdex Dashboard Preview"
              className="relative rounded-3xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700"
            />
          </div>
        </div>
        <div className="mt-5">
          <Hero />
        </div>
      </div>
    </section>
  );
}

export default Home;
