import { BsBrightnessHigh } from "react-icons/bs";
import { PiMoonDuotone } from "react-icons/pi";
import { useTheme } from "../../hooks/use-theme";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  function handleToggle() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      onClick={handleToggle}
      className="flex items-center gap-2 rounded-full border p-2 text-xl transition hover:cursor-pointer hover:bg-black/10 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {isDark ? <PiMoonDuotone /> : <BsBrightnessHigh />}
    </button>
  );
}

export default ThemeToggle;
