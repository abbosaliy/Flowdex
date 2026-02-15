import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMailOption, GrPhone } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="relative mx-auto max-w-7xl bg-gray-100 pb-10 sm:px-6 lg:px-8 lg:pt-15 dark:bg-gray-800">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-blue-500 p-2 text-white shadow-sm transition hover:bg-blue-600 sm:p-3 lg:p-4 dark:bg-gray-700 dark:text-blue-500 dark:hover:bg-gray-600"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="-ml-9 flex items-center justify-center text-blue-500 lg:justify-start dark:text-blue-400">
              <img
                className="h-auto w-30"
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt=""
              />
              <span className="-ml-5">Flowdex</span>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left dark:text-gray-400">
              <p className="mt-4 text-center lg:text-right">
                Flowdex vereinfacht Projektprozesse, verbessert Transparenz und stärkt die Zusammenarbeit in modernen Teams.
              </p>
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li className="flex flex-col gap-5">
              <h2 className="text-md font-semibold text-gray-700 dark:text-white/90">PROJEKTE</h2>
              <div className="flex flex-col gap-2">
                <a
                  href="https://cargosync.abbosbek-anvarjonov.com"
                  target="blank"
                  className="text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  CargoSync
                </a>
                <a
                  href="https://wetter-app.abbosbek-anvarjonov.com"
                  target="blank"
                  className="text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Wetter App
                </a>
              </div>
            </li>

            <li className="flex flex-col gap-5">
              <h1 className="text-md font-semibold text-gray-700 dark:text-white/90">KONTAKT</h1>
              <div className="flex flex-col gap-2">
                <div className="items-centr flex gap-1">
                  <GrLocation className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <p className="text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Ringerweg 4, 06110 Halle, Deutschland
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <GrMailOption className="text-gray-500 dark:text-gray-400" />
                  <a
                    className="text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    href="mailto:flowdexinfo@gmail.com"
                  >
                    flowdexinfo@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-0.5">
                  <GrPhone className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <a
                    className="text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    href="tel:+491734759122"
                  >
                    +49 173 475 91 22
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-12 flex w-full flex-col items-center justify-center text-sm text-gray-500 lg:items-end lg:justify-end dark:text-gray-400">
          <div className="flex gap-4 text-xl">
            <a
              className="transition hover:text-gray-900 dark:hover:text-white"
              href="http://linkedin.com/in/abbosbek-an"
              target="blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="transition hover:text-gray-900 dark:hover:text-white"
              href="https://github.com/abbosaliy"
              target="blank"
            >
              <FaGithub />
            </a>
          </div>

          <p className="mt-2">Copyright © 2026 Flowdex.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
