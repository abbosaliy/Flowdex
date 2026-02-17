import ThemaToggle from "../../../components/Toggle/themeToggle";
import { Button } from "../../../components/ui/button";
import ProfileDropdown from "../../../components/ui/profileDropdown";
import { RxHamburgerMenu } from "react-icons/rx";
import useDropdown from "../../../hooks/useDropdown";

function Header({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const { profile } = useDropdown();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
      <div className="flex items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center rounded-md border border-gray-300 p-2 text-lg transition hover:bg-gray-100 lg:hidden dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <RxHamburgerMenu />
          </Button>
        </div>
        <div className="flex items-center gap-6">
          <ThemaToggle />
          <div className="hidden flex-col items-end text-right md:flex">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {profile?.first_name} {profile?.last_name}
            </p>
            <span className="text-xs text-gray-500 dark:text-gray-400">{profile?.position}</span>
          </div>
          <ProfileDropdown basePath="/user" />
        </div>
      </div>
    </header>
  );
}

export default Header;
