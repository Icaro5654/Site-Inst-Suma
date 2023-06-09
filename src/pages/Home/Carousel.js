import { useState } from 'react';
//CSS
import Carousel from 'react-bootstrap/Carousel';
import styles from './Carousel.module.css'

//img
import parque from '../../img/parque.svg'
import entrada from '../../img/Parque/entrada.png'
import parque1 from '../../img/Parque/parque1.png'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className={styles.container_fluid}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={entrada}
          alt={entrada}
        />
        <Carousel.Caption>
          <h2>Conheça nosso parque</h2>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={parque}
          alt={parque}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={parque1}
          alt={parque1}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;