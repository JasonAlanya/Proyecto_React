import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import "../CSS/Style_cont.css"

export default function Contador(props){
    function aumentar(){
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
        }
        else{
        setClicks(clicks-1);
        }
    };

    const [clicks, setClicks]= React.useState(parseInt(props.inicial,10));

    return(
        <div class="contenedor">
            <Button variant="outline-primary" onClick={disminuir}>-</Button>
            <Form.Control type="text" placeholder={clicks} readOnly />
            <Button variant="outline-primary" onClick={aumentar}>+</Button>
        </div>
    )
}