import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import supabase from "../lib/supabaseClient";
import type { Database } from "../types/database.types";

type Profile = Database["public"]["Tables"]["profile"]["Row"];
type Props = {
  value: string;
  onselect: (id: string) => void;
};

function CustomSelect({ value, onselect }: Props) {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    async function fetschUser() {
      const { data, error } = await supabase.from("profile").select("*").eq("position", "manager");

      if (error) {
        return;
      }

      setProfiles(data);
    }

    fetschUser();
  }, []);

  return (
    <Select
      value={value}
      onValueChange={(value) => onselect(value)}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Manager auswählen" />
      </SelectTrigger>

      <SelectContent className="bg-white dark:bg-gray-800">
        {profiles.map((profile) => (
          <SelectItem
            key={profile.id}
            value={profile.id}
            className="cursor-pointer bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            {profile.first_name}
            {profile.last_name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default CustomSelect;
