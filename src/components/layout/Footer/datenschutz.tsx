function Datenschutz() {
  return (
    <section className="bg-white py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Datenschutzerklärung</h1>

        <div className="mt-8 space-y-6 text-gray-600 dark:text-gray-400">
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Website verarbeitet personenbezogene Daten ausschließlich im Rahmen der
            gesetzlichen Bestimmungen (DSGVO, TMG).
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Zugriffsdaten</h2>
          <p>
            Beim Besuch dieser Website werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen beinhalten z.B. den Browsertyp,
            das Betriebssystem oder die Uhrzeit des Seitenaufrufs.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Kontaktaufnahme</h2>
          <p>Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage gespeichert.</p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer gespeicherten Daten.</p>
        </div>
      </div>
    </section>
  );
}

export default Datenschutz;
