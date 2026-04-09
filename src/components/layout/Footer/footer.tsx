import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 40, delay: 0.3, duration: 0.3 }}
        className="mx-auto max-w-7xl px-6 py-10"
      >
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="Flowdex Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-semibold text-gray-900 dark:text-white">Flowdex</span>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Flowdex vereinfacht Projektprozesse, verbessert Transparenz und stärkt die Zusammenarbeit in modernen Teams.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-white">Projekte</h3>
            <ul className="mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="https://cargosync.abbosbek-anvarjonov.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-blue-600 dark:hover:text-blue-400"
                >
                  CargoSync
                </a>
              </li>
              <li>
                <a
                  href="https://wetter-app.abbosbek-anvarjonov.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Wetter App
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-white">Social</h3>

            <div className="mt-6 flex gap-6 text-xl text-gray-600 dark:text-gray-400">
              <a
                href="https://linkedin.com/in/abbosbek-an"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/abbosaliy"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-6 text-sm text-gray-500 md:flex-row dark:text-gray-400">
            <div className="flex gap-6">
              <NavLink
                to="/impressum"
                className="transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                Impressum
              </NavLink>

              <NavLink
                to="/datenschutz"
                className="transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                Datenschutz
              </NavLink>
            </div>
            <p>© 2026 Flowdex. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
