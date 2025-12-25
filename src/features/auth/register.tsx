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
import Login from './authLayout';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

import { useNavigate } from 'react-router';
import supabase from '../../lib/supabaseClient';
import { toast } from 'sonner';

function Register() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  async function handleRegister() {
    if (!first_name || !last_name || !position || !email || !password) {
      toast.error('Bitte alle pflichtfelder ausfüllen');
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      alert('Fehler aufgetreten');
      toast.error('Fehler beim Registrieren');
      return;
    }

    const userId = data.user?.id;
    console.log(userId);

    const { error: profileError } = await supabase.from('profile').insert([
      {
        id: userId,
        first_name,
        last_name,
        email,
        position,
      },
    ]);

    if (profileError) {
      toast.error('Fehler beim Registrieren');
      console.log(profileError);
      return;
    }

    if (position === 'manager') {
      navigate('/manager');
    } else if (position === 'developer') {
      navigate('/user');
    } else {
      return;
    }
  }
  return (
    <div className="h-screen bg-white dark:bg-gray-900 flex items-center justify-center py-4 px-4">
      {!open ? (
        <Card className="w-100 dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Registrieren Sie neue account</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur
            </CardDescription>
            <CardAction>
              <Button
                variant={'link'}
                onClick={() => setOpen(true)}
                className="cursor-pointer"
              >
                Anmelden
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <div className="grid gap-2">
                    <label htmlFor="email">Vorname</label>
                    <Input
                      type="text"
                      value={first_name}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Vorname"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="vorname">Nachname</label>
                    <Input
                      type="text"
                      value={last_name}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Nachname"
                    />
                  </div>
                  <Select
                    value={position}
                    onValueChange={setPosition}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Wählen Sie Ihre Position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="m@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
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
              onClick={handleRegister}
            >
              Registrieren
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Login></Login>
      )}
    </div>
  );
}
export default Register;
