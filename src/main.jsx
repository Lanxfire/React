import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importacion de Paginas

import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products/Products';
import Electronics from './pages/Products/Electronics';
import Clothes from './pages/Products/Clothes';

const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      //errorElement:<NotFound/>,
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
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
