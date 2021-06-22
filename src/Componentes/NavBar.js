import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import Carrito from './Cartwidget';
import {NavLink} from "react-router-dom";

export default function NavBar(){
    return(
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">JStore</Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink to="/"><Nav.Link href="#home">Inicio</Nav.Link></NavLink>
                <NavLink to="/About"><Nav.Link href="#aboutus">Nosotros</Nav.Link></NavLink>
                <NavLink to="/Products"><Nav.Link href="#products">Productos</Nav.Link></NavLink>
                <NavLink to="/Contact"><Nav.Link href="#contact">Contactanos</Nav.Link></NavLink>
                <Carrito saludo="Bienvenido a la sección del carrito" />
            </Nav>
        </Navbar>
    )
}