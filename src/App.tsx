import { createBrowserRouter } from 'react-router';
import './App.css';
import AppLayout from './components/layout/applayout';
import { RouterProvider } from 'react-router/dom';
import Root from './components/routes/root';
import About from './components/layout/about';
import AuthLayout from './features/auth/authLayout';
import History from './components/layout/history';
import Home from './components/layout/home';
import Meneger from './features/manager/manager';
import User from './features/user/user';
import { Toaster } from './components/ui/sonner';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          element: <AppLayout />,
          children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'history', element: <History /> },
            { path: 'auth', element: <AuthLayout /> },
          ],
        },
        {
          path: 'manager',
          element: <Meneger />,
        },
        {
          path: 'user',
          element: <User />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors></Toaster>
    </>
  );
}

export default App;
