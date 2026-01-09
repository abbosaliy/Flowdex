import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import supabase from "../../../lib/supabaseClient";
import { toast } from "sonner";
import { PuffLoader } from "react-spinners";
import type { Database } from "../../../types/database.types";

type ProfileRow = Database["public"]["Tables"]["profile"]["Row"];

function Profile() {
  const [value, setValue] = useState<ProfileRow | null>(null);
  const [avatar, setAvatar] = useState<string>("");
  const [cover, setCover] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetschProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase.from("profile").select("*").eq("id", user.id).single();

      if (error) {
        toast.error("Etwas ist schiefgelaufen.");
        return;
      }

      setValue(data);
      setAvatar(data.avatar_url ?? "");
      setCover(data.cover_url ?? "");
      setLoading(false);
    }

    fetschProfile();
  }, []);

  async function handleImgUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const type = e.target.name as "avatar" | "cover";

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    const folder = type === "cover" ? "covers" : "avatars";
    const column = type === "cover" ? "cover_url" : "avatar_url";

    const filePath = `${folder}/${user.id}`;

    const { error } = await supabase.storage.from("user_img").upload(filePath, file, { upsert: true });

    if (error) {
      console.error(error);
      toast.error("Etwas ist schiefgelaufen.");
      return;
    }

    const { data } = supabase.storage.from("user_img").getPublicUrl(filePath);

    const publicUrl = `${data.publicUrl}?t=${Date.now()}`;

    await supabase
      .from("profile")
      .update({ [column]: publicUrl })
      .eq("id", user.id);

    type === "cover" ? setCover(publicUrl) : setAvatar(publicUrl);
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
      <h2 className="m-10 mb-2 text-xl font-semibold text-slate-800 dark:text-slate-100">Profile</h2>
      <div className="m-10 overflow-hidden shadow-lg dark:bg-slate-800">
        <div className="relative h-65 w-full">
          <img
            src={cover || "/images/software.jpg"}
            alt="cover"
            className="h-full w-full object-cover"
          />
          <label className="absolute right-2 bottom-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/60 dark:bg-black/60">
            <FiCamera className="h-5 w-5" />
            <input
              type="file"
              name="cover"
              accept="image/*"
              hidden
              onChange={handleImgUpdate}
            />
          </label>
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
            <div className="relative">
              <img
                src={avatar || "/images/user.jpg"}
                alt="user_img"
                className="image-rendering-auto h-36 w-36 rounded-full border-4 object-cover dark:border-slate-800"
              />
              <label className="absolute right-0 bottom-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/60 dark:bg-black/60">
                <FiCamera className="h-4 w-4" />
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  hidden
                  onChange={handleImgUpdate}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="pt-16 pb-6 text-center">
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-xl font-semibold">{value?.last_name}</h3>
            <h3 className="text-xl font-semibold">{value?.first_name}</h3>
          </div>
          <p className="text-sm text-gray-400">{value?.position}</p>
        </div>
        <div className="flex flex-col items-center border-t px-6 py-4 dark:border-white/10">
          <h4 className="mb-2 text-sm font-semibold uppercase">Über mich</h4>
          <p className="text-sm leading-relaxed dark:text-gray-400">{value?.about || "Sie haben noch keine Informationen hinzugefügt."}</p>
          <div className="mt-4 flex flex-col items-center gap-2">
            <h4 className="text-sm font-semibold uppercase"> Follow me</h4>
            <div className="flex items-center gap-2">
              {value?.github_url && (
                <a
                  href={value.github_url}
                  target="_blank"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              )}
              {value?.linkedin_url && (
                <a href={value.linkedin_url}>
                  <FaLinkedin
                    className="h-5 w-5"
                    target="_blank"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
