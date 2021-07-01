import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import carrito from '../Imagenes/carrito.png';
import {NavLink} from "react-router-dom";
import { UseCart } from '../Context/Cartcontext';

export default function NavBar(){
    const {cart} = UseCart()

    return(
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">JStore</Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink to="/"><Nav.Link href="#home">Inicio</Nav.Link></NavLink>
                <NavLink to="/About"><Nav.Link href="#aboutus">Nosotros</Nav.Link></NavLink>
                <NavLink to="/Products"><Nav.Link href="#products">Productos</Nav.Link></NavLink>
                <NavLink to="/Contact"><Nav.Link href="#contact">Contactanos</Nav.Link></NavLink>
                <NavLink to="/Cart">{
                    <div style={{display:'flex'}}>
                    <img src={carrito} height="20px"/>
                    <p style={{display: cart.length>0 ?'block' :'none', color: 'white'}}>{cart.length}</p>
                    </div>
                }
                </NavLink>
            </Nav>
        </Navbar>
    )
}