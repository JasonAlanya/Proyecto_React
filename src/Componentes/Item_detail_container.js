import React from 'react';
import "../CSS/Style_productos.css";
import Item_detail from './Item_detail'

export default function Item_detail_container(props){
    return(
        <div>
                <img src={props.imagen} alt="Imagen de los productos relacionados"></img>
                <Item_detail id={props.id} nombre={props.nombre} precio={props.precio} imagen={props.imagen} descripcion={props.descripcion}/>
        </div>
    )
}