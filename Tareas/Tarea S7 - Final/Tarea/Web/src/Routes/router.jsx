import { createBrowserRouter } from 'react-router-dom';

// Importacion de Paginas
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products/Products';
import Electronics from '../pages/Products/Electronics';
import Clothes from '../pages/Products/Clothes';
import ErrorPage from '../pages/General/ErrorPage';

// Route para acceso a las paginas
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

export default router;