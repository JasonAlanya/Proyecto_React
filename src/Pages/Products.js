import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item_list_container from '../Componentes/Item_list_container'
import Footer from '../Componentes/Footer'

export default function Home(){
    return(
        <div>
            <Item_list_container/>
            <Footer/>
        </div>
    )
}