import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import supabase from "../lib/supabaseClient";
import type { Database } from "../types/database.types";

type Profile = Database["public"]["Tables"]["profile"]["Row"];
type Props = {
  owner: string;
  onselect: (id: string) => void;
};

function CustomSelect({ owner, onselect }: Props) {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    async function fetschUser() {
      const { data, error } = await supabase.from("profile").select("*").eq("position", "owner");

      if (error) {
        console.log(error);
        return;
      }

      setProfiles(data);
      console.log(data);
    }

    fetschUser();
  }, []);

  return (
    <Select
      value={owner}
      onValueChange={(value) => onselect(value)}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Manager auswählen" />
      </SelectTrigger>

      <SelectContent>
        {profiles.map((profile) => (
          <SelectItem
            key={profile.id}
            value={profile.id}
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
