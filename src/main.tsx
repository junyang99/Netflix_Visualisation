import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GlobalStateProvider } from './context/GlobalStateContext.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './app/pages/Main.tsx'
import NotFoundPage from './app/pages/NotFoundPage.tsx'
import Layout from './components/ui/Layout/Layout.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      { path: '/', element: <Main /> },
      { path: '*', element: <NotFoundPage /> }  // Catch-all route for undefined paths
    ],
  }
]); // Add routes here

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStateProvider>
      <RouterProvider router={router}/>
    </GlobalStateProvider>
  </StrictMode>,
)
