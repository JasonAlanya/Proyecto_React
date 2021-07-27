import React from 'react';
import Item_detail_container from './Item_detail_container'

export default function Item(props){
    return(
        <div id={props.identificador}>
            <Item_detail_container id={props.id} nombre={props.nombre} imagen={props.imagen} precio={props.precio} descripcion={props.descripcion}/>
        </div>
    )
}