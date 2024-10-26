import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { GlobalStateProvider } from './context/GlobalStateContext.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './app/pages/Main.tsx';
import Layout from './components/Layout.tsx';
import Netflix from './app/pages/Netflix.tsx';
import User from './app/pages/User.tsx';
import About from './app/pages/About.tsx';
import SpashScreen from './components/SplashScreen/SpashScreen.tsx';
// Splash screen logic in the root component
const App = () => {
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashScreen(false);
    }, 3600); // Show splash screen for 5 seconds

    return () => clearTimeout(timer); // Cleanup
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Main /> },
        { path: '/about', element: <About /> },
        { path: '/user', element: <User /> },
        { path: '/experiment', element: <Netflix /> },
        { path: '/netflix', element: <Netflix /> },
      ],
    },
  ]);

  return (
    <GlobalStateProvider>
      {splashScreen ? (
        <SpashScreen /> // Display splash screen first
      ) : (
        <RouterProvider router={router} /> // Main content after splash screen
      )}
    </GlobalStateProvider>
  );
};

const rootElement = document.getElementById('root');
createRoot(rootElement!).render(<App />);
