import Tarjeta2 from './Components/Tarjeta2';
import './Styles/styles.css';
import jsonfilePost from "./Json/PostJson.json"

function App() {
  

  return (
    <>
      <header>
        <h1>Work Blog</h1>
        <p>We are a passionate digital design agency that specializes in beautiful and easy-to-use digital & web development services.</p>
    </header>
    
    <main className="blog-container"> 
      {jsonfilePost.map((item, index) => (
          <Tarjeta2 key={index} TarjetaProp={item} />
        ))}
    </main>
    </>
  )
}

export default App
