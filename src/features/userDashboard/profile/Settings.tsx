import { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import supabase from "../../../lib/supabaseClient";
import { toast } from "sonner";
import type { Database } from "../../../types/database.types";
import { PuffLoader } from "react-spinners";

type ProfileRow = Database["public"]["Tables"]["profile"]["Row"];

function Settings() {
  const [profile, setProfile] = useState<ProfileRow | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetschProfileInfo() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase.from("profile").select("*").eq("id", user.id).single();

      if (error) {
        toast.error("Etwas ist schief gelaufen");
        console.log(error);
      }
      setProfile(data);
      setLoading(false);
    }

    fetschProfileInfo();
  }, []);

  async function handleImgUpdate() {
    if (!profile?.first_name || !profile?.last_name || !profile?.about || !profile?.email || !profile?.github_url || !profile?.linkedin_url) {
      toast.error("Bitte geben Sie alle erforderlichen Angaben ein.");
      return;
    }

    const { error } = await supabase
      .from("profile")
      .update({
        first_name: profile.first_name,
        last_name: profile.last_name,
        email: profile.email,
        position: profile.position,
        github_url: profile.github_url,
        linkedin_url: profile.linkedin_url,
        about: profile.about,
      })
      .eq("id", profile.id);

    if (error) {
      toast.error("Etwas ist schiefgelaufen.");
    } else {
      toast.success("Daten wurden erfolgreich aktualisiert.");
    }
  }

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
                <Input
                  type="text"
                  placeholder="Vorname"
                  value={profile?.first_name ?? ""}
                  onChange={(e) => setProfile((index) => (index ? { ...index, first_name: e.target.value } : index))}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm dark:text-gray-300">Nachname</p>
                <Input
                  placeholder="Nachname"
                  value={profile?.last_name ?? ""}
                  onChange={(e) => setProfile((index) => (index ? { ...index, last_name: e.target.value } : index))}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm dark:text-gray-300">Email</p>
                <Input
                  type="email"
                  placeholder="Email addres"
                  value={profile?.email ?? ""}
                  onChange={(e) => setProfile((index) => (index ? { ...index, email: e.target.value } : index))}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm dark:text-gray-300">Position</p>
                <Input
                  placeholder="Position"
                  value={profile?.position ?? ""}
                  onChange={(e) => setProfile((index) => (index ? { ...index, position: e.target.value } : index))}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm dark:text-gray-300">Github Url</p>
                <Input
                  placeholder="Github url"
                  value={profile?.github_url ?? ""}
                  onChange={(e) => setProfile((index) => (index ? { ...index, github_url: e.target.value } : index))}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm dark:text-gray-300">Linkedin Url</p>
                <Input
                  placeholder="Frontend Developer"
                  value={profile?.linkedin_url ?? ""}
                  onChange={(e) => setProfile((index) => (index ? { ...index, linkedin_url: e.target.value } : index))}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm dark:text-gray-300">Über mich</p>
              <Textarea
                placeholder="Über dich"
                value={profile?.about ?? ""}
                onChange={(e) => setProfile((index) => (index ? { ...index, about: e.target.value } : index))}
              ></Textarea>
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <Button className="bg-danger hover:bg-danger-hover cursor-pointer text-white">Abrechen</Button>

              <Button
                type="submit"
                className="bg-success hover:bg-success-hover cursor-pointer text-white"
                onClick={handleImgUpdate}
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
