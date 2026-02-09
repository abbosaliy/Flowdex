import { HiOutlineX } from "react-icons/hi";
import { Button } from "../../ui/button";
import { NavLink } from "react-router";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileNavi({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed top-0 right-0 z-50 flex h-screen w-70 transform flex-col items-center gap-20 bg-white/80 p-10 backdrop-blur-xl transition-transform duration-400 xl:hidden dark:bg-gray-900 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="self-end">
        <div
          onClick={onClose}
          className="cursor-pointer text-blue-500"
        >
          <HiOutlineX className="h-10 w-10" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-30">
        <ul className="flex flex-col items-center gap-10">
          <NavLink
            to={"/"}
            onClick={onClose}
            className="group relative cursor-pointer text-xl duration-300"
          >
            <p className="group-hover:text-blue-500">Home</p>
          </NavLink>
          <NavLink
            to={"about"}
            onClick={onClose}
            className="group relative cursor-pointer text-xl duration-300"
          >
            <p className="group-hover:text-blue-500">Über uns</p>
          </NavLink>

          <div
            className="group relative cursor-pointer text-xl duration-300"
            onClick={onClose}
          >
            <p className="group-hover:text-blue-500">Lebenslauf</p>
          </div>

          <div
            className="group relative cursor-pointer text-xl duration-300"
            onClick={onClose}
          >
            <p className="group-hover:text-blue-500"> Projekte</p>
          </div>

          <div
            className="group relative cursor-pointer text-xl duration-300"
            onClick={onClose}
          >
            <p className="group-hover:text-blue-500"> Kontakt</p>
          </div>
        </ul>
        <Button className="cursor-pointer bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300 dark:focus:ring-blue-800">Anmelden</Button>
      </div>
    </div>
  );
}
export default MobileNavi;
