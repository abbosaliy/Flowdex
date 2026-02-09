import { useCookies } from "react-cookie";

const CookieBanner = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);

  if (cookies.cookieConsent) return null;

  return (
    <div className="fixed bottom-0 z-50 flex w-full items-center justify-between bg-gray-900 p-4 text-white">
      <span>Wir verwenden Cookies für die Anmeldung.</span>
      <button
        onClick={() =>
          setCookie("cookieConsent", "true", {
            path: "/",
            maxAge: 60 * 60 * 24 * 150,
          })
        }
        className="rounded bg-blue-600 px-4 py-1"
      >
        Akzeptieren
      </button>
    </div>
  );
};

export default CookieBanner;
