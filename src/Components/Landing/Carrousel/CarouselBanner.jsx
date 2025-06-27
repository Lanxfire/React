import { Carousel } from 'react-bootstrap';

const CarouselBanner = () => {
  return (
    <Carousel fade interval={5000}>
      <Carousel.Item>
        <img
          className="d-block"
          style={{ width: '100%', maxHeight: '300px', objectFit: 'cover',objectPosition: 'center' }}
          src="https://www.medica-a1.com/uploads/1524197563074_ES_3.png"
          alt="Primera imagen"
        />
        <Carousel.Caption>
          <h3>Bienvenido a tu centro medico de confianza</h3>
          <p>Gestión moderna, rápida y segura.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          style={{ width: '100%', maxHeight: '300px', objectFit: 'cover',objectPosition: 'center'  }}
          src="https://descuentosmedicos.co/assets/LANDING%20GENERATOR/landing-img-descuentos.png"
          alt="Segunda imagen"
        />
        <Carousel.Caption>
          <h3>Promociones del mes</h3>
          <p>Consulta y administra sin complicaciones.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' ,objectPosition: 'center' }}
          src="https://pbs.twimg.com/media/D_spr-xXsAE59Ss.png"
          alt="Tercera imagen"
        />
        <Carousel.Caption>
          <h3>Seguridad garantizada</h3>
          <p>Llamenos ya su cita esta garantizada</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselBanner;