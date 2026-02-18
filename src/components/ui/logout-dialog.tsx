import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";

import { useNavigate } from "react-router";
import useDropdown from "../../hooks/useDropdown";

interface LogoutDialogProps {
  children: React.ReactNode;
}

function LogoutDialog({ children }: LogoutDialogProps) {
  const navigate = useNavigate();
  const { logout } = useDropdown();

  async function handleConfirm() {
    await logout();
    navigate("/");
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

      <AlertDialogContent className="rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-lg font-semibold text-gray-900 dark:text-white">Abmelden bestätigen</AlertDialogTitle>

          <AlertDialogDescription className="text-sm text-gray-500 dark:text-gray-400">
            Möchten Sie sich wirklich von Ihrem Konto abmelden?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="mt-4 gap-3">
          <AlertDialogCancel className="cursor-pointer rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            Abbrechen
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleConfirm}
            className="cursor-pointer rounded-md bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
          >
            Abmelden
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default LogoutDialog;
