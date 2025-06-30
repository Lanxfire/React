import CarouselBanner from '../Components/Landing/Carrousel/CarouselBanner';

const Home = () => {
    return (
        <div>
            <div>
                <h2>Bienvenido a la Pagina de Inicio</h2>
            </div>
            <div>
                <CarouselBanner />
                <section style={{ padding: '2rem' }}>
                    <h2>Servicios Medicos Destacados</h2>
                    <p>Gestión y Atencion de Primera Calidad</p>
                </section>
            </div>
        </div>


    );



};


export default Home;
