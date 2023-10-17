import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LOGO from './assets/LOGO.png';
function MyNavbar() {
    return (
        <Navbar expand="lg"  bg="success">
          <Container>
            <Navbar.Brand href="#home">

            <img src={LOGO} width="200" height="40">
                </img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Quem Somos</Nav.Link>
                <Nav.Link href="#link">Como Ajudar</Nav.Link>
                <NavDropdown title="Adotar" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Cachorro</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Gato
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Galeria de Fotos</Nav.Link>
                <Nav.Link href="#link">Noticias</Nav.Link>
                <Nav.Link href="#link">Contato</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default MyNavbar;