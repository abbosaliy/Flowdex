import { motion } from "framer-motion";

function Impressum() {
  return (
    <section className="bg-white py-24 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 40, delay: 0.3, duration: 0.3 }}
        className="mx-auto max-w-4xl px-6"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Impressum</h1>

        <div className="mt-8 space-y-6 text-gray-600 dark:text-gray-400">
          <p>Angaben gemäß § 5 TMG</p>

          <p>
            Abbosbek Anvarjonov <br />
            Ringerweg 4 <br />
            06110 Halle (Saale) <br />
            Deutschland
          </p>

          <p>
            Kontakt: <br />
            E-Mail: abbosbekanvarjonov8@gmail.com <br />
            Telefon: +49 173 475 91 22
          </p>

          <p>
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: <br />
            Abbosbek Anvarjonov
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Impressum;
