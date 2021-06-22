import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from 'react-bootstrap';
import '../CSS/Style_item_detail.css'
//import Modal from 'react-bootstrap/Modal'

export default function Item_detail(props){
    const nombre= props.nombre;
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
        
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h1>
                <img className="producto_img" src={props.imagen} alt="Imagen de los productos" width="80%" margin="auto 10%" />
                <h2>{props.precio}</h2>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary">Comprar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}