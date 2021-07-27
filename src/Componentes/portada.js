import React from 'react';
import {NavLink} from "react-router-dom";
import '../CSS/Style_portada.css'
import portada from '../Imagenes/inicio.jpg'

export default function Portada(){
    return(
        <div className="portada_home">
            <img className="imagen_portada" src={portada}></img>
            <div className="text_portada">
                <p>Especialistas en una gran variedad</p>
                <h1>Abarrotes y golosinas</h1>
                <NavLink to="/Products" className="comprar">Comprar ►</NavLink>
            </div>
        </div>
    )
}