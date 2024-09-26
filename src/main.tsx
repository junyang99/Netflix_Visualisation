import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GlobalStateProvider } from './context/GlobalStateContext.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './app/pages/Main.tsx'
import Layout from './components/Layout.tsx'
import Netflix from './app/pages/Netflix.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      { path: '/', element: <Main /> },
      { path: '/experiment', element: <Netflix /> },
      { path: '/netflix', element: <Netflix /> },


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
