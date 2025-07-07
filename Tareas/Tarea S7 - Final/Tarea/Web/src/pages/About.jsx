import {useContext, useEffect} from 'react';
import {ContextoGlobal} from '../Context/DataContext'

const About = () => 
    {
        const {info, setInfo} = useContext(ContextoGlobal);

useEffect(() => {
    setInfo(
      'La información que se almacena aquí está siendo enviada por DataContext. Podrás verla nuevamente desde Electrónica y Ropa, que almacenarán nuevos párrafos según el orden en que se agreguen y la cantidad de veces.'
    );
  }, [setInfo]);
  
         return (
    <div>
      <h2>Sobre Nosotros</h2>
      <span>{info}</span>
    </div>
  );
};

export default About;
