import React, { useEffect, useState } from 'react';



 
const Products = () => {

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Código: ${response.status}`);
        }
  
        return response.json(); 
      })
      .then(datos => {
        setDatos(datos)
      });
  }, []);

  return (
    <div>
      <h2>Nuestros Productos</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {datos.map(product => (
          <li key={product.nombre_completo} style={{ marginBottom: '15px', border: '1px solid #eee', padding: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <h3>{product.fecha_ingreso}</h3>
            <p>{product.pais}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default Products;
 
