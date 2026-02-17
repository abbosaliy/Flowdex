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
    <div className="max-w-6xl px-4 py-10 md:px-8 lg:px-12">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Projekt erstellen</h2>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="px-8 py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Projekt Name</label>
              <Input
                type="text"
                placeholder="Projekt Name"
                value={value.project_name}
                onChange={(e) => setValue({ ...value, project_name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Manager auswählen</label>
              <CustomSelect
                value={value.manager_id}
                onselect={(id) => setValue({ ...value, manager_id: id })}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Projekt Beschreibung</label>
              <Textarea
                placeholder="Projekt Beschreibung"
                value={value.description}
                onChange={(e) => setValue({ ...value, description: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Ziel des Projekts</label>
              <Textarea
                placeholder="Ziel des Projekts"
                value={value.purpose}
                onChange={(e) => setValue({ ...value, purpose: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Projekt Vorteile</label>
              <Textarea
                placeholder="Projekt Vorteile"
                value={value.benefits}
                onChange={(e) => setValue({ ...value, benefits: e.target.value })}
              />
            </div>
          </div>
          <div className="mt-10 flex justify-end">
            <Button
              type="submit"
              className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              onClick={handleSend}
            >
              Senden
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projekt;
