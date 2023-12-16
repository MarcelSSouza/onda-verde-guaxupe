import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "./assets/Image1.jfif";

export default function UltimasNoticias() {
  return (
    <>
      <Container>
        <br />
        <br />
        <br />
        <h1>Ultimas Noticias</h1>
        <hr />
        <p>
          <b>
            Palestra de conscientização realizada na Escola Municipal Professor
            José de Sá, Guaxupé
          </b>
        </p>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              src={Image1}
              alt="First slide"
              style={{ maxWidth: "100%", maxHeight: "700px", margin: "0 auto" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={Image1}
              alt="Second slide"
              style={{ maxWidth: "100%", maxHeight: "700px", margin: "0 auto" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={Image1}
              alt="Third slide"
              style={{ maxWidth: "100%", maxHeight: "700px", margin: "0 auto" }}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}
