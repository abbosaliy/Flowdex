import { PuffLoader } from "react-spinners";
import { useProfileSettings } from "../../hooks/useProfileSettings";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";

function Settings() {
  const { profile, loading, saving, updateField, saveProfile } = useProfileSettings();

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-100px)] items-center justify-center">
        <PuffLoader
          size={100}
          color="rgb(60 80 224)"
          loading={loading}
        />
      </div>
    );
  }

  if (!profile) {
    return <p className="m-10">Profil nicht gefunden</p>;
  }

  return (
    <div className="m-10 max-w-6xl">
      <h2 className="mb-6 text-xl font-semibold">Einstellung</h2>

      <div className="overflow-hidden rounded-lg border bg-white shadow-lg dark:bg-slate-800">
        <div className="p-8">
          <h3 className="text-lg">Persönliche Infos</h3>
        </div>

        <div className="border-t dark:border-slate-700" />

        <div className="p-8">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <p className="text-sm dark:text-gray-300">Vorname</p>
                <Input
                  value={profile.first_name ?? ""}
                  onChange={(e) => updateField("first_name", e.target.value)}
                />
              </div>

              <div>
                <p className="text-sm dark:text-gray-300">Nachname</p>
                <Input
                  value={profile.last_name ?? ""}
                  onChange={(e) => updateField("last_name", e.target.value)}
                />
              </div>

              <div>
                <p className="text-sm dark:text-gray-300">Email</p>
                <Input
                  value={profile.email ?? ""}
                  onChange={(e) => updateField("email", e.target.value)}
                />
              </div>

              <div>
                <p className="text-sm dark:text-gray-300">Position</p>
                <Input
                  value={profile.position ?? ""}
                  onChange={(e) => updateField("position", e.target.value)}
                />
              </div>

              <div>
                <p className="text-sm dark:text-gray-300">Github Url</p>
                <Input
                  value={profile.github_url ?? ""}
                  onChange={(e) => updateField("github_url", e.target.value)}
                />
              </div>

              <div>
                <p className="text-sm dark:text-gray-300">LinkedIn Url</p>
                <Input
                  value={profile.linkedin_url ?? ""}
                  onChange={(e) => updateField("linkedin_url", e.target.value)}
                />
              </div>
            </div>

            <div>
              <p className="text-sm dark:text-gray-300">Über mich</p>
              <Textarea
                value={profile.about ?? ""}
                onChange={(e) => updateField("about", e.target.value)}
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button
                className="bg-success hover:bg-success-hover cursor-pointer text-white"
                onClick={saveProfile}
                disabled={saving}
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
