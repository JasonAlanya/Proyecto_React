import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

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

    return (
        <div>
            <Button variant="outline-primary" onClick={getCarItems}>Información</Button>
        </div>
    )

}