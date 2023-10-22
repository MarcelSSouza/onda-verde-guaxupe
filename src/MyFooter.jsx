import React from 'react'
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
export default function MyFooter() {
  return (
    <>
      <footer className="mt-5">
      <hr />
      <Container
        fluid={true}
        className="d-flex flex-column justify-content-evenly  flex-md-row "
      >
        <div>
          <h5>
            <b>Endereço</b>
          </h5>
          <p>Rua Borba Gato, 531 - Guaxupé-MG</p>
        </div>
        <div>
          <h5>
            <b>Contato </b>{" "}
          </h5>
          <p>
            <a href="mailto:ondaverdegxp@gmail.com">
            ondaverdegxp@gmail.com
            </a>
          </p>
          </div>

          <div>

            <a
              href="https://www.facebook.com/ondaverdegxp?_rdc=1&_rdr"
              className="facebook social"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "black" }}
                size="3x"
              />
            </a>
        </div>


      </Container>
      <div >

      <p>
            <b>©2023 Onda Verde Guaxupé</b>
        </p>    
      </div>
    </footer>
    </>
  )
}
