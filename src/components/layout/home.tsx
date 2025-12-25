import { NavLink } from 'react-router';
import Hero from './hero';

function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8 pb-24">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
        <div>
          <h1
            className="text-4xl font-bold tracking-tight
                           text-neutral-900 dark:text-white
                           sm:text-4xl lg:text-5xl"
          >
            Der kollaborative Arbeitsplatz <br />
            für modernes Projekt management
          </h1>

          <p
            className="mt-6 max-w-xl text-lg
                          text-neutral-600 dark:text-neutral-400"
          >
            Plane, überprüfe und verwalte Projekte zwischen Nutzer und Manager
            alles auf einer sicheren Saaas-Plattform.
          </p>

          <div className="mt-10 flex gap-4">
            <NavLink
              to={'auth'}
              className="px-3 py-2 rounded-sm bg-blue-500 text-white hover:bg-blue-600  focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer"
            >
              Jetzt Starten
            </NavLink>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute inset-0 rounded-3xl
                            bg-liniear-to-tr
                            from-blue-500/20 via-purple-500/20 to-cyan-400/20
                            blur-2xl"
          />

          <img
            src="/images/hero.png"
            alt="Flowdex dashboard preview"
            className="relative rounded-3xl shadow-2xl"
          />
        </div>
      </div>
      <Hero />
    </div>
  );
}
export default Home;
