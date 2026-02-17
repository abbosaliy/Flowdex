import { PuffLoader } from "react-spinners";
import { useProfileSettings } from "../../hooks/useProfileSettings";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";

function Settings() {
  const { profile, loading, saving, updateField, saveProfile } = useProfileSettings();

  if (loading) {
    return (
      <div className="flex min-h-[75vh] items-center justify-center">
        <PuffLoader
          size={65}
          color="rgb(59 130 246)"
        />
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="px-4 py-10 md:px-8 lg:px-12">
        <p className="text-gray-500 dark:text-gray-400">Profil nicht gefunden</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl px-4 py-10 md:px-8 lg:px-12">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Einstellungen</h2>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        {/* Section Header */}
        <div className="px-8 py-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Persönliche Informationen</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Aktualisieren Sie Ihre persönlichen Daten und Links.</p>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700" />
        <div className="px-8 py-8">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Vorname</label>
                <Input
                  value={profile.first_name ?? ""}
                  onChange={(e) => updateField("first_name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Nachname</label>
                <Input
                  value={profile.last_name ?? ""}
                  onChange={(e) => updateField("last_name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <Input
                  value={profile.email ?? ""}
                  onChange={(e) => updateField("email", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Position</label>
                <Input
                  value={profile.position ?? ""}
                  onChange={(e) => updateField("position", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">GitHub URL</label>
                <Input
                  value={profile.github_url ?? ""}
                  onChange={(e) => updateField("github_url", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">LinkedIn URL</label>
                <Input
                  value={profile.linkedin_url ?? ""}
                  onChange={(e) => updateField("linkedin_url", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Über mich</label>
              <Textarea
                value={profile.about ?? ""}
                onChange={(e) => updateField("about", e.target.value)}
              />
            </div>
            <div className="flex justify-end pt-4">
              <Button
                className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                onClick={saveProfile}
                disabled={saving}
              >
                {saving ? "Speichern..." : "Speichern"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
