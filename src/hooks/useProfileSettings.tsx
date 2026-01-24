import { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";
import { toast } from "sonner";
import type { Database } from "../types/database.types";
import { useNavigate } from "react-router";

type ProfileRow = Database["public"]["Tables"]["profile"]["Row"];

export function useProfileSettings() {
  const [profile, setProfile] = useState<ProfileRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

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
      setLoading(false);
    }

    fetchProfile();
  }, []);

  function updateField(key: keyof ProfileRow, value: string) {
    setProfile((prev) => (prev ? { ...prev, [key]: value } : prev));
  }

  async function saveProfile() {
    if (!profile) return;

    setSaving(true);

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

    setSaving(false);
    navigate("/user/profile");

    if (error) {
      toast.error("Aktualisierung fehlgeschlagen");
      return;
    }

    toast.success("Profil erfolgreich aktualisiert");
  }

  return {
    profile,
    loading,
    saving,
    updateField,
    saveProfile,
  };
}
