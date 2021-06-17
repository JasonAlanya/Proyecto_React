import React from 'react';
import "../CSS/Style_productos.css";
import Item_detail_container from './Item_detail_container'

export default function Item(props){
    return(
        <div class="producto" id={props.identificador}>
                <h2>{props.nombre}</h2>
                <Item_detail_container nombre={props.nombre} imagen={props.imagen} precio={props.precio}/>
        </div>
    )
}