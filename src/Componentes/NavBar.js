import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import Carrito from './Cartwidget';

export default function NavBar(){
    return(
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">JStore</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#aboutus">Nosotros</Nav.Link>
                <Nav.Link href="#products">Productos</Nav.Link>
                <Nav.Link href="#contact">Contactanos</Nav.Link>
                <Carrito saludo="Bienvenido a la sección del carrito" />
            </Nav>
    </Navbar>
    )
}