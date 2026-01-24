import { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";
import { toast } from "sonner";
import type { Database } from "../types/database.types";

type ProfileRow = Database["public"]["Tables"]["profile"]["Row"];

export function useProfile() {
  const [profile, setProfile] = useState<ProfileRow | null>(null);
  const [avatar, setAvatar] = useState("");
  const [cover, setCover] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase.from("profile").select("*").eq("id", user.id).single();

      if (error) {
        toast.error("Profil konnte nicht geladen werden");
        setLoading(false);
        return;
      }

      setProfile(data);
      setAvatar(data.avatar_url ?? "");
      setCover(data.cover_url ?? "");
      setLoading(false);
    }

    fetchProfile();
  }, []);

  async function updateImage(file: File, type: "avatar" | "cover") {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const folder = type === "cover" ? "covers" : "avatars";
    const column = type === "cover" ? "cover_url" : "avatar_url";
    const filePath = `${folder}/${user.id}`;

    const { error } = await supabase.storage.from("user_img").upload(filePath, file, { upsert: true });

    if (error) {
      toast.error("Upload fehlgeschlagen");
      return;
    }

    const { data } = supabase.storage.from("user_img").getPublicUrl(filePath);

    const publicUrl = `${data.publicUrl}?t=${Date.now()}`;

    await supabase
      .from("profile")
      .update({ [column]: publicUrl })
      .eq("id", user.id);

    if (type === "cover") setCover(publicUrl);
    if (type === "avatar") setAvatar(publicUrl);
  }

  return {
    profile,
    avatar,
    cover,
    loading,
    updateImage,
  };
}
