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
    purpose: "",
    description: "",
    benefits: "",
    manager_id: "",
  });

  async function handleSend() {
    if (!value.project_name || !value.purpose || !value.description || !value.benefits || !value.manager_id) {
      toast.error("Bitte geben Sie alle erforderlichen Angaben ein.");
      return;
    }

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      console.log(userError);
      return;
    }

    const { error } = await supabase.from("project").insert([
      {
        project_name: value.project_name,
        purpose: value.purpose,
        description: value.description,
        benefits: value.benefits,
        manager_id: value.manager_id,
        owner_id: user.id,
      },
    ]);

    if (error) {
      console.log(error);
      toast.error("Projekt konnte nicht erstellt werden.");
    } else {
      toast.success("Das Projekt wurde erfolgreich erstellt.");
      setValue({
        project_name: "",
        purpose: "",
        description: "",
        benefits: "",
        manager_id: "",
      });
    }
  }

  return (
    <div>
      <h2 className="m-10 mb-2 text-xl font-semibold text-slate-800 dark:text-slate-100">Projekte erstellen</h2>
      <div className="m-10 overflow-hidden border bg-white shadow-lg dark:bg-slate-800">
        <div className="p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <p className="text-sm dark:text-gray-300">Projekt Name</p>
              <Input
                type="text"
                placeholder="Projekt Name"
                value={value.project_name}
                onChange={(e) => setValue({ ...value, project_name: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm dark:text-gray-300">Projekt Beschreibung</p>
              <Textarea
                placeholder="Projekt Beschreibung"
                value={value.description}
                onChange={(e) => setValue({ ...value, description: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm dark:text-gray-300">Ziel des Projekts</p>
              <Textarea
                placeholder="Ziel des Projekts"
                value={value.purpose}
                onChange={(e) => setValue({ ...value, purpose: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm dark:text-gray-300">Projekt Vorteil</p>
              <Textarea
                placeholder="Projekt Vorteil"
                value={value.benefits}
                onChange={(e) => setValue({ ...value, benefits: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm dark:text-gray-300">Manager Auswahlen</p>
              <CustomSelect
                value={value.manager_id}
                onselect={(id) => setValue({ ...value, manager_id: id })}
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
