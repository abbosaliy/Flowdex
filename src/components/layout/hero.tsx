import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 ,y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
          So funktioniert <span className="text-blue-500 dark:text-blue-400">Flowdex</span>
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-400">Ein klar strukturierter Workflow für moderne Projektzusammenarbeit</p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="group rounded-2xl border border-gray-200 bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <img
              className="mx-auto h-32 w-auto"
              src={`${import.meta.env.BASE_URL}images/ideas.png`}
              alt="Submit ideas"
            />

            <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">1. Submit Project Ideas</h3>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Users can submit structured project ideas directly through the platform.</p>
          </div>
          <div className="group rounded-2xl border border-gray-200 bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <img
              className="mx-auto h-32 w-auto"
              src={`${import.meta.env.BASE_URL}images/review.png`}
              alt="Review process"
            />

            <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">2. Manager Review</h3>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Managers review submissions, provide feedback and approve projects.</p>
          </div>
          <div className="group rounded-2xl border border-gray-200 bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <img
              className="mx-auto h-32 w-auto"
              src={`${import.meta.env.BASE_URL}images/feedbeck.png`}
              alt="Track progress"
            />

            <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">3. Track Status & Feedback</h3>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Monitor project progress and gain valuable feedback in real time.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
