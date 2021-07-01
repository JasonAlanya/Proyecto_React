import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseCart } from '../Context/Cartcontext';
import {Button, Table} from 'react-bootstrap';

export default function Cart(){
    const {cart, mostrar, clear} = UseCart()

    return(
        <div>
            <center>Carrito</center>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nombre del producto</th>
                    <th>Cantidad</th>
                    <th>Precio unitario</th>
                    <th>Precio total</th>
                    <th><Button variant="danger" onClick={()=>clear()}>Limpiar carro</Button></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mostrar()
                    }   
                </tbody>
            </Table>
            {console.log(cart)}
            {console.log(cart.length)}
        </div>
    )
}