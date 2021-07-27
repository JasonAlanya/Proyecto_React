import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Style_contact.css'

export default function Contact(){
    return(
        <section className="contacto">
            <div className="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6210903178576!2d-75.20074270656568!3d-12.06957096508938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e97b2c915f1d9%3A0x43b67b23df40c1f1!2sJose%20Olaya%20748%2C%20Huancayo%2012002!5e0!3m2!1ses!2spe!4v1610815568289!5m2!1ses!2spe" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div className="contenedor_form">
                <form action="" className="formulario">
                    <div>Nombre</div>
                    <input id="nombre_p" type="text"/>
                    <div>Correo</div>
                    <input id="correo_p" type="email"/>
                    <div>Teléfono</div>
                    <input id="telefono_p" type="tel"/>
                    <div>Mensaje</div>
                    <textarea name="" id="mensaje_p" cols="30" rows="10"></textarea>
                    <button className="enviar">Enviar</button>
                </form>
            </div>
        </section>
    )
}