import React from 'react';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/primereact.min.css';

const items = [
  { title: 'Servicios Medicos', description: 'Diversidad de Servicios Medicos', image: 'https://www.medica-a1.com/uploads/1524197563074_ES_3.png' },
  { title: 'Descuentos Medicos', description: 'Multiples Descuento en relacion al Servicio', image: 'https://descuentosmedicos.co/assets/LANDING%20GENERATOR/landing-img-descuentos.png' },
  { title: 'Educacion Medica', description: 'El futuro esta en elconocimiento', image: 'https://pbs.twimg.com/media/D_spr-xXsAE59Ss.png' },
];

const CarouselBanner = () => {
  const itemTemplate = (item) => (
    <div className="p-1 text-center">
      <img src={item.image} alt={item.title} style={{ width: '100%', borderRadius: '10px' }} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );

return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Carousel
  value={items}
  itemTemplate={itemTemplate}
  numVisible={1}
  numScroll={1}
  circular
  autoplayInterval={4000}
  responsiveOptions={[
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ]}
/>
    </div>
  );
};

export default CarouselBanner;