import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import Logo from '../../img/logo.jpg'
import '../common.css'
import { isAuthenticated } from '../../helpers/helper'
import MenuCliente from './MenuCliente'
import MenuAdmin from './MenuAdmin'

const navbar = () => {
  console.log(isAuthenticated())
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="p-0"><Image className="img-logo" src={Logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>

            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            {isAuthenticated() === 0 && (
              <MenuAdmin />
            )
            }
            {isAuthenticated() === 1 && (
              <MenuCliente />
            )
            }
            {isAuthenticated() === 2 && (
              <Nav>
              <Nav.Link href="/inicio-sesion">Iniciar Sesion</Nav.Link>
              
            </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;