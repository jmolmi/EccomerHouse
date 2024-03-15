import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CarWidget } from './CarWidget';



export const NavBar = () => {
    return(
        <>
         <Navbar bg="dark"  data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">EccomerHouse</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Data</Nav.Link>
            <Nav.Link href="#features">Desarrollo y programacion</Nav.Link>
            <Nav.Link href="#pricing">Marketing</Nav.Link>
          </Nav>
        </Container>
        <CarWidget />
        <span>3</span>
      </Navbar>
        </>
)
}