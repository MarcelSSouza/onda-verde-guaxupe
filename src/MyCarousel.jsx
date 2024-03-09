import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './assets/Carousel2.jpg';
import ExampleCarouselImage1 from './assets/Carousel1.jpg';
import ExampleCarouselImage3 from './assets/Carousel3.jpg';

function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel data-bs-theme="dark" className="full-screen-carousel  ">
      <Carousel.Item>
        <img
          className="d-block w-100  "
          src={ExampleCarouselImage}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  "
          src={ExampleCarouselImage1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  "
          src={ExampleCarouselImage3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
