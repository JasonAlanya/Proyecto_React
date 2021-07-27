import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseCart } from '../Context/Cartcontext';
import {Button, Table} from 'react-bootstrap';
import "@firebase/firestore"
import {getFireStore} from '../firebase'
import '../CSS/Style_cart.css'


export default function Cart(){
    const {cart, mostrar, clear} = UseCart()
    const [id, setId]=useState([])
    const db=getFireStore()
    const dbpedido=db.collection("pedido")

    const pedido={
        buyer:{
            name: 'Juan Tapia',
            phone: '+51932645745',
            email: 'juantapia123@gmail.com'
        },
        items: cart,
        total: 0
    }

    function sendOrder(){
        cart_total()
        dbpedido.add(pedido).then(({id})=>{
            setId(id)
        }).catch(e=>{console.log(e)}).finally(console.log('se termino'))
        clear()
    }

    function cart_total(){
        var t=0
        for (var i=0; i<cart.length; i++){
            t=t+cart[i].precio*cart[i].cantidad
        }
        pedido.total= t
    }


    return(
        <div className='carrito'>
            <h1>Carrito</h1>
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
                {
                    mostrar()
                }   
            </Table>
            <Button variant="success" onClick={sendOrder}>Terminar compra</Button>
        </div>
    )
}