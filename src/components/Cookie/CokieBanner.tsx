import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

type CookieConsentValue = "accepted" | "declined";

const CookieBanner = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!cookies.cookieConsent) {
      setTimeout(() => setVisible(true), 200);
    }
  }, [cookies.cookieConsent]);

  if (cookies.cookieConsent) return null;

  const saveConsent = (value: CookieConsentValue) => {
    setVisible(false);

    setTimeout(() => {
      setCookie("cookieConsent", value, {
        path: "/",
        maxAge: 60 * 60 * 24 * 180,
        sameSite: "lax",
      });
    }, 300);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 z-9999 w-full transform transition-all duration-500 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"} border-t border-gray-200 bg-gray-50 p-6 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100`}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">
          Wir verwenden notwendige Cookies für die Anmeldung und Sicherheit. Optionale Cookies werden nur mit Ihrer Zustimmung gesetzt.{" "}
          <a
            href="/datenschutz"
            className="underline hover:opacity-80"
          >
            Mehr erfahren
          </a>
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => saveConsent("declined")}
            className="cursor-pointer rounded bg-gray-200 px-4 py-1 text-sm text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
          >
            Ablehnen
          </button>

          <button
            onClick={() => saveConsent("accepted")}
            className="cursor-pointer rounded bg-blue-600 px-4 py-1 text-sm text-white hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
