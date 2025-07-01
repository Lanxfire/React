import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import DataContext from './context/DataContext/DataContext';

/*Bootstrap*/
import 'bootstrap/dist/css/bootstrap.min.css';

/*Prime Reactr*/
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// Importacion de Paginas

import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products/Products';
import Electronics from './pages/Products/Electronics';
import Clothes from './pages/Products/Clothes';
import ErrorPage from './pages/General/ErrorPage';

const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      errorElement:<ErrorPage title="404 - Página no encontrada" message="La dirección que buscás no existe."/>,
      children:[
        {
          index:true,
          element:<Home/>,
        },
        {
          path:'about',
          element:<About/>,
        },
        {
          path:'products',
          element:<Products/>,
          children:[
            {
              path:'electronics',
              element:<Electronics/>,
            },
            {
              path:'clothes',
              element:<Clothes/>,
            }
          ]
        }
      ],
    }
  ]);

  
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContext.Provider value={{valor1: "Prueba", valor2: "Context"}}/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
