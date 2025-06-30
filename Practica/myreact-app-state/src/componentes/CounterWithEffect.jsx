import { useState, useEffect } from 'react';

const CounterWithEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log(`el contadora cambio: ${count}`)
  },[count])

  return (
    <div>
      <h2>El contador está en: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
};

export default CounterWithEffect;