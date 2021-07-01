import React, {useContext, useState, createContext} from 'react'
import {Button} from 'react-bootstrap';
import carrito from '../Imagenes/carrito.png';
const CartContext = createContext()

export function UseCart(){
    return useContext(CartContext)
}

export function CartProvider({children}){

    const [cart, setCart]=useState([])
    function AddToCart(obj){
        if (!IsInCart(obj)){
            setCart([...cart,obj])
        }
    }

    function IsInCart(obj){
        var estado=0
        for(var i=0; i<cart.length; i++){
            if(obj.id==cart[i].id){
                estado=1
                i=cart.length
            }
        }
        if (estado==1){
            return true
        }
        else{
            return false
        }
    }

    function mostrar(){
        if(cart.length>0){
            return cart.map((post,index)=> {return <tr><td>{index +1}</td><td>{post.title}</td><td>{post.cantidad}</td><td>S/{Number.parseFloat(post.precio).toFixed(2)}</td><td>S/{ Number.parseFloat((post.precio)*(post.cantidad)).toFixed(2)}</td><td><Button variant="danger" id={post.id} onClick={()=>removeItem(post.id)}>X</Button></td></tr>})
        }
        else{ 
            return <tr><td colSpan="6"><center>No hay elementos en el carrito</center></td></tr>
        }
    }

    function removeItem(itemid){
        var carro=cart
        for (var i=0; i<carro.length; i++){
            if(itemid==carro[i].id){
                carro.splice(i,1)
                console.log(carro)
            }
        }
        setCart({})
        setTimeout(()=>{setCart(carro)},1)
    }

    function clear(){
        setCart({})
    }

    return(
        <CartContext.Provider value={{cart,AddToCart, IsInCart, removeItem, mostrar, clear}}>
            {children}
        </CartContext.Provider>
    )
}