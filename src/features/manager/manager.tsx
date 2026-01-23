import { Outlet } from "react-router";
import Header from "./header/header";
import ManagerSeidbar from "./seidbar/managerSeidbar";
import { useState } from "react";

function Meneger() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-100 transition-colors dark:bg-gray-900">
      <div className="flex h-screen overflow-hidden">
        <ManagerSeidbar
          open={open}
          setOpen={setOpen}
        />
        <div className="relative z-10 flex flex-1 flex-col overflow-x-hidden overflow-y-auto transition-all">
          <Header
            open={open}
            setOpen={setOpen}
          ></Header>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
export default Meneger;
