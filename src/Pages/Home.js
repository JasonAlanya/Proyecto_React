import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portada from '../Componentes/portada'
import Lista_categoria from '../Componentes/Category_list'
import Footer from '../Componentes/Footer'

export default function Home(){
    return(
        <div>
            <Portada/>
            <Lista_categoria/>
            <Footer/>
        </div>
    )
}