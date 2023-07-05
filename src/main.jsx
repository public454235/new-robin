import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Main from './Layout/Main';
import About from './pages/Home/About/About';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import ProtfiloMy from './pages/ProtfiloMy/ProtfiloMy';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,  
    children: [
      {
        path: '/',
        element: <Home></Home>
        
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'skills',
        element: <Skills></Skills>
      },
      {
        path: 'protfiloMy',
        element: <ProtfiloMy></ProtfiloMy>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
