import React, {useContext, useState, createContext} from 'react'
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

    function removeItem(itemid){
        for (var i=0; i<cart.length; i++){
            if(itemid==cart[i].id){
                cart.splice(i,1)
                break
            }
        }
    }

    function clear(){
        for (var i=0; i<cart.length; i++){
            cart.splice(i,1)
        }
    }

    return(
        <CartContext.Provider value={{cart,AddToCart, IsInCart}}>
            {children}
        </CartContext.Provider>
    )
}