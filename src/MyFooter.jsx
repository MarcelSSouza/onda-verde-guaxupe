import React from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import './App.css'; // Create a separate CSS file for styling

export default function MyFooter() {
  return (
    <>
      <footer className="green-bg text-white">
        <Container
          fluid={true}
          className="d-flex flex-column justify-content-evenly flex-md-row "
        >
          <div className="mt-4">
            <h5>
              <b>Endereço</b>
            </h5>
            <p>Rua Borba Gato, 531 - Guaxupé-MG</p>
          </div>
          <div className="mt-4">
            <h5>
              <b>Contato </b>
            </h5>
            <p>
              <a href="mailto:ondaverdegxp@gmail.com" className="white-text">
                ondaverdegxp@gmail.com
              </a>
            </p>
          </div>
        </Container>
        <div>
          <p className="m-0 text-black">
            <hr />
            <b className="text-white">©2023 Onda Verde Guaxupé</b>
          </p>
          <br />
        </div>
      </footer>
    </>
  );
}
