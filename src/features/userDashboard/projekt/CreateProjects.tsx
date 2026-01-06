import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";
import { useState } from "react";
import supabase from "../../../lib/supabaseClient";
import { toast } from "sonner";
import CustomSelect from "../../../hooks/customSelect";

function Projekt() {
  const [value, setValue] = useState({
    project_name: "",
    purpse: "",
    description: "",
    benefits: "",
    manager_id: "",
    owner: "",
  });

  async function handleSend() {
    if (!value.project_name || !value.purpse || !value.description || !value.benefits || !value.manager_id) {
      toast.error("Bitte alle Pflichtfelder ausfüllen");
      return;
    }

    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user) {
      toast.error("Fehler beim Abrufen des Benutzers!");
      console.log("Fehler beim Abrufen des Benutzers!");
      return;
    }
  }

  return (
    <div>
      <h2 className="m-15 mb-2 text-xl font-semibold text-slate-800 dark:text-slate-100">Projekte erstellen</h2>
      <div className="m-15 overflow-hidden border bg-white shadow-lg dark:bg-slate-800">
        <div className="p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <p className="text-sm dark:text-gray-300">Projekt Name</p>
              <Input
                type="text"
                placeholder="Projekt Name"
                value={value.project_name}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm dark:text-gray-300">Projekt Beschreibung</p>
              <Textarea
                placeholder="Projekt Beschreibung"
                value={value.description}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm dark:text-gray-300">Ziel des Projekts</p>
              <Textarea
                placeholder="Ziel des Projekts"
                value={value.purpse}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm dark:text-gray-300">Projekt Vorteil</p>
              <Textarea
                placeholder="Projekt Vorteil"
                value={value.benefits}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm dark:text-gray-300">Manager Auswahlen</p>
              <CustomSelect
                value={value.owner_id}
                onselect={(id) => setValue({ ...value, owner_id: id })}
              ></CustomSelect>
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="submit"
                className="bg-success hover:bg-success-hover cursor-pointer text-white"
                onClick={handleSend}
              >
                Senden
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projekt;
