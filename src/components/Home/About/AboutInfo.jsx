import React from 'react';
import { MyInfo } from './MyInfo';

// Componente para los enlaces de redes sociales en la sección "Acerca de"
const FollowSocial = () => {
    return (
        <ul className="follow-social mt-lg-5 mt-4">
            <li><h5 className="me-md-3">Sígueme en:</h5></li>
            <li><a href="https://www.behance.net/"><span className="fab fa-github"></span></a></li>
            <li><a href="https://in.linkedin.com/company/w3layouts"><span className="fab fa-linkedin-in"></span></a></li>
            <li><a href="https://facebook.com/w3layouts"><span className="fab fa-facebook-f"></span></a></li>
            <li><a href="https://twitter.com/W3layouts"><span className="fab fa-twitter"></span></a></li>
        </ul>
    );
}

export const AboutInfo = ({ title }) => {
    return (
        <div className="col-lg-7 w3l-about-info px-lg-4 align-center">
            <h6 className="w3l-title-small mb-1">Una breve</h6>
            <h3 className="w3l-title-main mb-2">{title}</h3>
            <p className="my-4 pe-lg-5">
                Perú, alberga una biodiversidad marina excepcional, destacándose especies como la anchoveta y la sardina, fundamentales para la economía pesquera y la biodiversidad local. Sin embargo, la intensa explotación de estos recursos ha llevado a prácticas de sobrepesca, amenazando tanto la sostenibilidad ambiental como la estabilidad económica de las comunidades pesqueras. Este estudio se centra en analizar la dinámica de la pesquería de anchoveta en estas regiones, utilizando Vensim PLE para modelar y comprender los impactos y las posibles soluciones a este desafío.
            </p>
            {/* <MyInfo
                name={'Jose Moises Villanueva'}
                phone={'+51 926 856 094'}
                email={'jmvilla2301@gmail.com'}
                street={'Lima, Peru'}
            />
            <FollowSocial /> */}
            {/* <div className="w3l-btn">
                <a href="#" className="btn btn-style btn-primary mt-lg-5 mt-4 me-md-3">Contáctame</a>
                <a href="#" className="btn btn-style btn-secondary mt-lg-5 mt-4">Descargar CV</a>
            </div> */}
        </div>
    );
}