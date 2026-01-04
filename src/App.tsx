import { createBrowserRouter } from "react-router";
import "./App.css";
import AppLayout from "./components/layout/applayout";
import { RouterProvider } from "react-router/dom";
import Root from "./components/routes/root";
import About from "./components/layout/about";
import AuthLayout from "./features/auth/authLayout";
import History from "./components/layout/history";
import Home from "./components/layout/home";
import Meneger from "./features/manager/manager";
import User from "./features/userDashboard/userDashboard";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./components/contexts/theme-context";
import Projekt from "./features/userDashboard/projekt/CreateProjects";
import Projekts from "./features/userDashboard/projekt/Projects";
import Profile from "./features/userDashboard/profile/Profile";
import Settings from "./features/userDashboard/profile/Settings";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          element: <AppLayout />,
          children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "history", element: <History /> },
            { path: "auth", element: <AuthLayout /> },
          ],
        },
        {
          path: "manager",
          element: <Meneger />,
        },
        {
          path: "user",
          element: <User />,
          children: [
            { index: true, element: <Projekt /> },
            {
                path: "projekt-erstellen",
                element: <Projekt />,
            },
            {
                path: "projekts",
                element: <Projekts />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
            {
                path: "settings",
                element: <Settings />,
            }
          ],
        },
      ],
    },
  ]);
  return (
    <ThemeProvider storageKey="theme">
      <RouterProvider router={router} />
      <Toaster richColors></Toaster>
    </ThemeProvider>
  );
}

export default App;
