import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      errorElement:<NotFound/>,
      children:[
        {
          index:true,
          element:<Home/>,
        },
        {
          path:'about',
          element:<About/>,
        }
      ],
    },
    {
      path:'/login',
      element:<LoginPage/>,
    },
  ]);
  
  return (
    <>
      
    </>
  )
}

export default App
