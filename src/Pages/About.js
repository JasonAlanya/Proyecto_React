import React from 'react';
import Footer from '../Componentes/Footer'
import Figura_portada from '../Imagenes/portada_nosotros.jpg'
import '../CSS/Style_about_us.css'

export default function Home(){
    return(
        <div>
            <figure className="imagenprincipal portada_nos">
                <img src={Figura_portada} alt="Foto de portada nosotros"/>
            </figure>
            <section className="portada texto-nosotros">
                <p>
                    ¿Cuáles son nuestros objetivos?
                </p>
            </section>
            <section className="vision">
                <div className="clip clip1">
                    <h1>Visión</h1>
                </div>
                <div className="clip clip2">
                    <h2>Convertirnos en una tienda digital de calidad a nivel nacional al tiempo de ofrecer un amplio surtido de productos de calidad a unos precios competitivos</h2>
                </div>
            </section>
            <section className="mision">
                <div className="clip clip4">
                    <h1>Misión</h1>
                </div>
                <div className="clip clip3">
                    <h2>Generar excelentes experiencias de compra para que nuestros clientes regresen y tengan una mejor calidad de vida.</h2>
                </div>
            </section>
            <Footer/>
        </div>
    )
}