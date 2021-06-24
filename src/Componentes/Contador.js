import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import "../CSS/Style_cont.css"

export default function Contador(props){
    /*function aumentar(){
        if(clicks===parseInt(props.stock,10)){
            setClicks(clicks);
        }
        else{
        setClicks(clicks+1);
        }
    };
    function disminuir(){
        if(clicks===0){
            setClicks(clicks);
            var elemento=document.getElementById("disminiur");
            elemento.style.display = 'none';
        }
        else{
        setClicks(clicks-1);
        }
    };

    const [clicks, setClicks]= React.useState(parseInt(props.inicial,10));*/

    return(
        <div class="contenedor">
            <Button variant="outline-primary" onClick={props.decrementarc}>-</Button>
            <Form.Control type="text" placeholder={props.cantidad} readOnly />
            <Button variant="outline-primary" onClick={props.incrementarc}>+</Button>
        </div>
    )
}