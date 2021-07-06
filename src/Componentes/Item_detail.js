import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from 'react-bootstrap';
import '../CSS/Style_item_detail.css'
import Contador from './Contador'
import {NavLink} from "react-router-dom"
import {UseCart} from '../Context/Cartcontext';


export default function Item_detail(props){
    /*const nombre= props.nombre;
    const precio= props.precio;
    function getCarItems(){
        let promesa = new Promise((resolve,reject) =>{
            setTimeout(function(){
                const error=false;
                if(!error){
                    alert("El producto "+nombre+" tiene un precio de "+precio+"\nDescripción:\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat");
                }
                reject("Error obteniendo los datos");  
            },2000);
        } );

        promesa.then(function(valor){
            console.log(valor);
        }).catch(
            function(error){
                console.log(error);
            })
        
    }*/

    const {AddToCart} = UseCart()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initial=0;
    const [mostrar, setmostrar] =useState(false)

    const[count, setcount] =useState(initial)
    const incrementar =()=>{
        setcount(prevcount => prevcount+1)
        setmostrar(true)
    }
    const decrementar =()=>{
        if(count>0){
            setcount(prevcount => prevcount-1)
            if(count==1){
                setmostrar(false)
            }
        }
    }

    const productObject ={
        "id": props.id,
        "title": props.nombre,
        "cantidad": count,
        "precio": props.precio
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Información
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>{props.nombre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h1>{props.descripcion}</h1>
                <img className="producto_img" src={props.imagen} alt="Imagen de los productos" width="80%" margin="auto 10%" />
                <h2>S/{Number.parseFloat(props.precio).toFixed(2)}</h2>
                <Contador decrementarc={decrementar} incrementarc={incrementar} cantidad={count}/>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                {
                    mostrar?<div>
                        <NavLink to="/Cart">
                            <Button variant="primary" onClick={()=>{AddToCart(productObject)}}>Comprar</Button>
                        </NavLink>
                    </div>:null
                }
                </Modal.Footer>
            </Modal>
        </div>
    )

}