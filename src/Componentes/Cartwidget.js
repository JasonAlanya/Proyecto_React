import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown} from 'react-bootstrap';
import carrito from '../Imagenes/carrito.png';

export default function Carrito(props){
    return(
            <Dropdown>
                <Dropdown.Toggle variant="Primary" id="dropdown-basic">
                    <img src={carrito} height="20px"></img>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">{props.saludo}</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    )
}