import React from 'react';
import "../CSS/Style_productos.css";
import Item_detail from './Item_detail'

export default function Item_detail_container(props){
    return(
        <div>
                <img src={props.imagen} alt="Imagen de los productos relacionados"></img>
                <h2>{props.precio}</h2>
                <Item_detail nombre={props.nombre} precio={props.precio}/>
        </div>
    )
}