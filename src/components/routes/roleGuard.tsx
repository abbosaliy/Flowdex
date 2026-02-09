import { useEffect, useState } from "react";
import supabase from "../../lib/supabaseClient";
import { Navigate, Outlet } from "react-router-dom";

type Role = "manager" | "projekinhaber";
interface AuthDuardProps {
  role?: Role;
}
function AuthGuard({ role }: AuthDuardProps) {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        setAllowed(false);
        setLoading(false);
        return;
      }

      if (!role) {
        setAllowed(true);
        setLoading(true);
        return;
      }

      const userId = session.user.id;

      const { data: profile } = await supabase.from("profile").select("position").eq("id", userId).single();

      setAllowed(profile?.position === role);
      setLoading(false);
    }
    checkAuth();
  }, [role]);

  if (loading) {
    return null;
  }
  if (!allowed) {
    return (
      <Navigate
        to="/auth"
        replace
      />
    );
  }

  return <Outlet />;
}

export default AuthGuard;
