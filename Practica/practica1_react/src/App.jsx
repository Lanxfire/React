import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Button blue>Hola Mundo</Button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Botón con Tailwind
        </button>
      </div>
    </>
  )
}

export default App
