import { Input } from "../../../components/ui/input";

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
                <p className="text-sm dark:text-gray-300">First Name</p>
                <Input placeholder="First name" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm dark:text-gray-300">Last Name</p>
                <Input placeholder="Last name" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm dark:text-gray-300">Email</p>
                <Input
                  type="email"
                  placeholder="Email address"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm dark:text-gray-300">Role</p>
                <Input placeholder="Frontend Developer" />
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
              <p className="text-sm dark:text-gray-300">About</p>
              <textarea
                rows={4}
                placeholder="Write something about yourself..."
                className="rounded-md border border-slate-600 bg-transparent p-3 text-sm text-white outline-none focus:border-blue-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                className="rounded-md border border-slate-600 px-4 py-2 text-sm hover:bg-slate-700"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-md bg-blue-600 px-5 py-2 text-sm font-medium hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Settings;
