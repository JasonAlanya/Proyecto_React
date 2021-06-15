import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Item from './Item'

export default function Item_list(){
    const carrito=[
        { id:"1", title:"Yogurt Gloria", price:"S/3", pictureUrl:"https://jasonalanya.github.io/Proyecto_final/imagenes/productos/yogurt-gloria0.jpg"},
        { id:"2", title:"Frugos", price:"S/2", pictureUrl:"https://jasonalanya.github.io/Proyecto_final/imagenes/productos/frugos-0.jpg"},
        { id:"3", title:"Coca Cola", price:"S/1.5", pictureUrl:"https://jasonalanya.github.io/Proyecto_final/imagenes/productos/coca-cola-0.jpg"},
        { id:"4", title:"Inca Cola", price:"S/1.5", pictureUrl:"https://jasonalanya.github.io/Proyecto_final/imagenes/productos/inca-kola-0.jpg"}
    ]

    function getCarItems(){
        let promesa = new Promise((resolve,reject) =>{
            setTimeout(function(){
                const error=false;
                if(!error){
                    resolve(carrito);
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
            <Button variant="outline-primary" onClick={getCarItems}>Ver items en consola</Button>
            {
                carrito.map((post,index)=> {return <Item identificador={index} imagen={post.pictureUrl} nombre={post.title} precio={post.price}/>
                     })
            }
        </div>
    )

}