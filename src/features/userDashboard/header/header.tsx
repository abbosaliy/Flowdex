import ThemaToggle from "../../../components/Toggle/themeToggle";
import { Button } from "../../../components/ui/button";
import ProfileDropdown from "../../../components/ui/profileDropdown";
import { RxHamburgerMenu } from "react-icons/rx";
import useDropdown from "../../../hooks/useDropdown";

function Header({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const { profile } = useDropdown();

  return (
    <header className="w-full bg-white duration-300 lg:w-full dark:bg-slate-800">
      <div className="shadow-2 flex items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
        <div className="flex items-center gap-4">
          <div className="sm-gap-4 flex items-center gap-2 lg:hidden">
            <Button
              variant={"outline"}
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 rounded-sm border p-2 text-xl transition hover:cursor-pointer hover:bg-black/10 dark:hover:bg-gray-700"
            >
              <RxHamburgerMenu />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <ThemaToggle />
          <div className="hidden flex-col items-center md:flex">
            <p className="flex items-center gap-2 leading-none font-medium">
              <span> {profile?.first_name}</span>
              <span>{profile?.last_name}</span>
            </p>
            <span className="text-sm text-gray-500 dark:text-gray-400">{profile?.position}</span>
          </div>
          <ProfileDropdown basePath="/user" />
        </div>
      </div>
    </header>
  );
}

export default Header;
