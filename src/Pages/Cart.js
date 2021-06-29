import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseCart } from '../Context/Cartcontext';
import Table from 'react-bootstrap/Table'

export default function Cart(){
    const {cart} = UseCart()
    return(
        <div>
            <center>Carrito</center>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Nombre del producto</th>
                    <th>Cantidad</th>
                    <th>Precio unitario</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                    cart.map((post,index)=> {return <tr><td>{post.title}</td><td>{post.cantidad}</td><td>{post.precio}</td></tr>})
                    }
                </tbody>
            </Table>
            {console.log(cart)}
            {console.log(cart.length)}
        </div>
    )
}