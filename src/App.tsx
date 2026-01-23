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
import Projekt from "./features/userDashboard/projekte/CreateProjects";
import Profile from "./features/userDashboard/profile/Profile";
import Settings from "./features/userDashboard/profile/Settings";
import ManagerProjects from "./features/manager/projekte/managerProjects";
import OwnerProjects from "./features/userDashboard/projekte/OwnerProjects";
import ProjectsDetails from "./components/ui/projectDetails";

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
          children: [
            { index: true, element: <ManagerProjects /> },
            { path: "projekts", element: <ManagerProjects /> },
            {
              path: "projekts/:projectId",
              element: <ProjectsDetails />,
            },
          ],
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
              element: <OwnerProjects />,
            },
            {
              path: "projekts/:projectId",
              element: <ProjectsDetails />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "settings",
              element: <Settings />,
            },
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
