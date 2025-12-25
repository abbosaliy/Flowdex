import { useState } from 'react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import Register from './register';
import supabase from '../../lib/supabaseClient';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  async function handleLogin() {
    if (!email || !password) {
      toast.error('Bitte Email und Passwort eingeben');
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error('Fehler beim einloggen');
      console.log(error);
      return;
    }

    const userId = data.user?.id;
    console.log(userId);

    const { data: profile, error: profileError } = await supabase
      .from('profile')
      .select('position')
      .eq('id', userId)
      .single();

    if (profileError || !profile) {
      toast.error('Profil nicht gefunden');
      return;
    }

    if (profile.position === 'manager') {
      navigate('/manager');
    } else if (profile.position === 'developer') {
      navigate('/user');
    } else {
      toast.error('Keine Position gefunden');
    }
  }

  return (
    <div className="h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      {!open ? (
        <Card className="w-100   dark:bg-gray-800 ">
          <CardHeader>
            <CardTitle> Anmelden Sie ihre account</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur
            </CardDescription>
            <CardAction>
              <Button
                variant={'link'}
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
                    placeholder="m@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <label htmlFor="password">Password</label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Passwort vergessen?
                    </a>
                  </div>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button
              type="submit"
              className="w-full cursor-pointer"
              onClick={handleLogin}
            >
              Login
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Register></Register>
      )}
    </div>
  );
}
export default Login;
