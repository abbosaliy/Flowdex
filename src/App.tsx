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
import ManagerProjects from "./features/manager/projekte/managerProjects";
import OwnerProjects from "./features/userDashboard/projekte/OwnerProjects";
import ProjectsDetails from "./components/ui/projectDetails";
import Profile from "./components/ui/profile";
import Settings from "./components/ui/settings";
import ProjectsEdit from "./components/ui/projectsEdit";

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
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "einstellungen",
              element: <Settings />,
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
              path: "projekts/:projectId/edit",
              element: <ProjectsEdit />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "einstellungen",
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
