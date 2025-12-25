import { HiOutlineX } from 'react-icons/hi';
import { Button } from '../../ui/button';
import { NavLink } from 'react-router';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileNavi({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed xl:hidden top-0 right-0 h-screen w-70 flex flex-col items-center p-10  gap-20 bg-white/80 backdrop-blur-xl dark:bg-slate-900  transform transition-transform duration-400 z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="self-end ">
        <div
          onClick={onClose}
          className="text-blue-500 cursor-pointer  "
        >
          <HiOutlineX className="w-10 h-10" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-30 ">
        <ul className="flex flex-col items-center gap-10">
          <NavLink
            to={'/'}
            onClick={onClose}
            className="relative group text-xl duration-300 cursor-pointer"
          >
            <p className="group-hover:text-blue-500">Home</p>
          </NavLink>
          <NavLink
            to={'about'}
            onClick={onClose}
            className="relative group text-xl duration-300 cursor-pointer"
          >
            <p className="group-hover:text-blue-500">Über uns</p>
          </NavLink>

          <div
            className="relative group text-xl duration-300 cursor-pointer"
            onClick={onClose}
          >
            <p className="group-hover:text-blue-500">Lebenslauf</p>
          </div>

          <div
            className="relative group text-xl duration-300 cursor-pointer"
            onClick={onClose}
          >
            <p className="group-hover:text-blue-500"> Projekte</p>
          </div>

          <div
            className="relative group text-xl duration-300 cursor-pointer"
            onClick={onClose}
          >
            <p className="group-hover:text-blue-500"> Kontakt</p>
          </div>
        </ul>
        <Button className="bg-blue-500 text-white hover:bg-blue-600  focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer">
          Anmelden
        </Button>
      </div>
    </div>
  );
}
export default MobileNavi;
