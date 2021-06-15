import React from 'react';
import "../CSS/Style_productos.css";

export default function Item(props){
    return(
        <div class="producto" id={props.identificador}>
                <img src={props.imagen} alt="Imagen de los productos relacionados al Yogurt Gloria"></img>
                <h2>{props.nombre}</h2>
                <h2>{props.precio}</h2>
                <button><a href="paginas_productos/yogurt_gloria.html">Descripción</a></button>
        </div>
    )
}