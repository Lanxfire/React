import CarouselBanner from '../Components/Landing/Carrousel/CarouselBanner';
import DataContext from '../context/DataContext/DataContext';
import React, { useContext } from 'react';



const Home = () => {
const ctx = useContext(DataContext);     
console.log(ctx.valor1);

return (
        <div>
            <div>
                <h2>Bienvenido a la Pagina de Inicio</h2>
            </div>
            <div>
                <CarouselBanner />
                <section style={{ padding: '2rem' }}>
                    
                    <h2>Servicios Medicos Destacados</h2>
                    <p>Gestión y de Primera Calidad</p>

                </section>
            </div>
        </div>


    );



};


export default Home;
