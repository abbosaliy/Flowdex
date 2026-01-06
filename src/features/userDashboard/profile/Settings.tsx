import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";

function Settings() {
  return (
    <div>
      <h2 className="m-15 mb-2 text-xl font-semibold text-slate-800 dark:text-slate-100">Einstellung</h2>

      <div className="m-15 overflow-hidden border bg-white shadow-lg dark:bg-slate-800">
        <div className="p-8">
          <h3 className="text-lg">Personlichen info</h3>
        </div>

        <div className="bodark:rder-gray-300 border-t dark:border-slate-700"></div>

        <div className="p-8">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm dark:text-gray-300">Vorname</p>
                <Input placeholder="Vorname" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm dark:text-gray-300">Nachname</p>
                <Input placeholder="Nachname" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm dark:text-gray-300">Email</p>
                <Input
                  type="email"
                  placeholder="Email addres"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm dark:text-gray-300">Position</p>
                <Input placeholder="Position" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm dark:text-gray-300">Github Url</p>
                <Input placeholder="Frontend Developer" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm dark:text-gray-300">Linkedin Url</p>
                <Input placeholder="Frontend Developer" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm dark:text-gray-300">Über mich</p>
              <Textarea placeholder="Über dich"></Textarea>
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <Button className="bg-danger hover:bg-danger-hover cursor-pointer text-white">Abrechen</Button>

              <Button
                type="submit"
                className="bg-success hover:bg-success-hover cursor-pointer text-white"
              >
                Speichern
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Settings;
