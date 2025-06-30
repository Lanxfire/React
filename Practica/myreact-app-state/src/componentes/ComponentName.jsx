import { useState } from 'react';

const ComponentName = () => {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');

  return (
    <div>
      <h3>Mi Nombre es: </h3>
      <div>
        <input type='text' style={{ width: '100px' }} value={origen} onChange={(e) => setOrigen(e.target.value)}/><p>{'==>'}</p><input type='text' style={{ width: '100px' }} value={destino} readOnly/>
        <button onClick={() => setDestino(origen)}>Cambio de Valor</button>
      </div>
    </div>
  );
};

export default ComponentName;