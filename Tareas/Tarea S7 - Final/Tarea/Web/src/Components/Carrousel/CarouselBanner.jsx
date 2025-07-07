import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/primereact.min.css';

const CarouselBanner = () => {

  const [items, setItems] = useState([]);

  const itemTemplate = (item) => (
    <div className="p-1 text-center">
      <img src={item.image} alt={item.title} style={{ width: '100%', borderRadius: '10px' }} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
  
  useEffect(() => {
    fetch('http://localhost:3002/carrousel')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error cargando el carrousel:', error));
  }, []);

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
      numVisible: 1,
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