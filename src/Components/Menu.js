import React from 'react';
import {Link} from "react-router-dom";
import {NavDropdown,Nav,Navbar} from 'react-bootstrap'

function Menu(){
    return(
        <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
        <Nav.Link as={Link} to="/alta">Registro</Nav.Link>
        <Nav.Link as={Link} to="/ingresar">Ingresar</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/">Action</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/alta">Another action</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/ingresar">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item >Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
</Navbar>
  
    );
}
export default Menu