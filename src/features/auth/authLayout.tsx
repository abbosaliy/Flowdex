import { useState } from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import Register from "./register";
import supabase from "../../lib/supabaseClient";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  async function handleLogin() {
    if (!email || !password) {
      toast.error("Bitte geben Sie alle erforderlichen Angaben ein.");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error("Fehler beim einloggen");
      return;
    }

    const userId = data.user?.id;

    const { data: profile, error: profileError } = await supabase.from("profile").select("position").eq("id", userId).single();

    if (profileError || !profile) {
      toast.error("Profil nicht gefunden");
      return;
    }

    if (profile.position === "manager") {
      navigate("/manager");
    } else if (profile.position === "projekinhaber") {
      navigate("/user");
    } else {
      toast.error("Keine Position gefunden");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 40, delay: 0.3, duration: 0.3 }}
      className="flex h-screen items-center justify-center bg-white dark:bg-gray-900"
    >
      {!open ? (
        <Card className="w-100 dark:bg-gray-800">
          <CardHeader>
            <CardTitle> Anmelden</CardTitle>
            <CardDescription>Melden Sie sich an, um auf Ihr persönliches Konto zuzugreifen.</CardDescription>
            <CardAction>
              <Button
                variant={"link"}
                onClick={() => setOpen(true)}
                className="cursor-pointer"
              >
                Registrieren
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FiEyeOff className="h-5 w-5 text-red-500" /> : <FiEye className="h-5 w-5 text-green-500" />}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button
              type="submit"
              className="w-full cursor-pointer bg-blue-500 text-white hover:bg-blue-600"
              onClick={handleLogin}
            >
              Login
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Register></Register>
      )}
    </motion.div>
  );
}
export default Login;
