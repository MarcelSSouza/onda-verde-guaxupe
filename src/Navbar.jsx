import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LOGO from './assets/LOGO.png';
function MyNavbar() {
  return (
    <Navbar expand="lg" bg="success" variant="light" className='text-white'>
      <Container>
        <Navbar.Brand href="/">
          <img src={LOGO} width="200" height="40" alt=''>
          </img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="" >
            <Nav.Link href="/sobre">Quem Somos</Nav.Link>
            <Nav.Link href="/ajuda">Como Ajudar</Nav.Link>
            <NavDropdown title="Adotar" id="basic-nav-dropdown">
              <NavDropdown.Item href="/cachorro">Cachorro</NavDropdown.Item>
              <NavDropdown.Item href="/gato">
                Gato
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/galeria">Galeria de Fotos</Nav.Link>
            <Nav.Link href="/adocao">Doação Mensal</Nav.Link>
            <Nav.Link href="/noticias">Noticias</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;