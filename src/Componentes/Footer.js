import React from 'react'
import '../CSS/Style_footer.css'

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-list">
                <a>Política de devolución</a>
                <a>Contactanos</a>
                <a>Sobre nosotros</a>
            </div>
            <div className="footer-list">
                <a><img src="https://img.icons8.com/material-rounded/24/000000/facebook.png"/>Facebook</a>
                <a><img src="https://img.icons8.com/material-outlined/24/000000/whatsapp--v5.png"/>Whatsapp</a>
            </div>
            <div className="footer-list">
                <p>© 2021</p>
                <img src="https://img.icons8.com/color-glass/48/000000/visa.png"/>
                <img src="https://img.icons8.com/fluent/48/000000/mastercard.png"/>
            </div>
        </div>
    )
}