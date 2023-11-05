import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './assets/test.jpg';
import { Container } from 'react-bootstrap';

function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className='pt-5'>
      <Carousel className='' data-bs-theme="dark">
        <Carousel.Item>
          <img
            className=" img-fluid "
            src={ExampleCarouselImage}
            alt="First slide"
            style={{ maxHeight: '80vh' }}
          />
          <Carousel.Caption className='bg-dark bg-opacity-50 text-white d-none d-md-block'>
            <h5 >First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid"
            src={ExampleCarouselImage}
            alt="Second slide"
            style={{ maxHeight: '80vh' }}
          />
          <Carousel.Caption className='bg-dark bg-opacity-50 text-white d-none d-md-block'>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid"
            src={ExampleCarouselImage}
            alt="Third slide"
            style={{ maxHeight: '80vh' }}
          />
          <Carousel.Caption className='bg-dark bg-opacity-50 text-white d-none d-md-block'>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default MyCarousel;