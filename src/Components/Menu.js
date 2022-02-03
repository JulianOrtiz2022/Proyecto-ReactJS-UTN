import React from 'react';
import {Link} from "react-router-dom";
import {NavDropdown,Nav,Navbar} from 'react-bootstrap';
import AuthContext from '../Context/AuthContext';


function Menu(){
    return(
      <AuthContext.Consumer>
        {
          context=>
        <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
        {
          !context.userLogin && 
          <>
            <Nav.Link as={Link} to="/alta">Registro</Nav.Link>
            <Nav.Link as={Link} to="/ingresar">Ingresar</Nav.Link>
          </>
        }
        {
          context.userLogin &&
          <>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/producto/alta">Alta</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={context.logoutUser}>Salir</Nav.Link>
          </>
        }
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    }
</AuthContext.Consumer>
    );
}
export default Menu