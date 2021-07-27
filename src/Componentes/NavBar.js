import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import carrito from '../Imagenes/carrito.png';
import {NavLink} from "react-router-dom";
import { UseCart } from '../Context/Cartcontext';
import "../CSS/Style_nav.css"

export default function NavBar(){
    const {cart} = UseCart()

    return(
        <header className="header">
            <nav className="navbar">
                <div className="container">
                    <NavLink to="/"><a className="logo" href="#home"><p className="gn">GN</p><p className="markt">markt</p></a></NavLink>
                    <NavLink to="/"><a href="#home">Inicio</a></NavLink>
                    <NavLink to="/About"><a href="#aboutus">Nosotros</a></NavLink>
                    <NavLink to="/Products"><a href="#products">Productos</a></NavLink>
                    <NavLink to="/Contact"><a href="#contact">Contactanos</a></NavLink>
                    <a></a>
                </div>
                <NavLink to="/Cart">{
                    <div className="cart">
                    <img src={carrito}/>
                    <p style={{display: cart.length>0 ?'flex' :'none'}}>{cart.length}</p>
                    </div>
                }
                </NavLink>
            </nav>
        </header>
    )
}