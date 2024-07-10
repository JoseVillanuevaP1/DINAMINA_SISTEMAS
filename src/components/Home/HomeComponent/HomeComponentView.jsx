import React, { useEffect } from 'react';
import './HomeComponentView.css'
import { initTypedTextEffect } from '@utils/typedTextEffect.js';

const HomeComponentView = () => {

    useEffect(() => {

        // Llamada a la función del efecto de texto tipeado
        initTypedTextEffect(["Jorge Alberto.", "Henry Torres", "Carlos Peña.", "Jose Moises.", "Hans Herrera"]);

        // Cleanup function
        return () => {
            clearTimeout();
        };

    }, []);


    return (
        <>
            <section id="home" className="w3l-banner pt-5">
                <div className="container pt-lg-5 pt-md-4">
                    <div className="row pt-lg-5 pt-4">
                        <div className="col-lg-7 banner-info-grid pt-lg-0 pt-5 HomePageHeroHeader">
                            <h1 className="mb-3">Somos estudiantes de Ing. de Sistemas</h1>
                            <h3 className="mb-4"> <span className="typed-text"></span><span className="cursor">&nbsp;</span> </h3>
                            <p>Explora la problemática de la explotación pesquera en Perú y cómo nuestro modelo de dinámica de sistemas busca contribuir en este conflicto.</p>

                            <a className="btn btn-primary btn-style mt-5 me-2" href="https://rrhh.gppcargo.com/files/TA%20-%20DIN%C3%81MICA%20DE%20SISTEMAS.pdf"><i className="fa fa-file-word"></i> Documento </a>
                            <a className="btn btn-style transparent-btn mt-5" href="https://rrhh.gppcargo.com/files/TA%20-%20DIN%C3%81MICA%20DE%20SISTEMAS%20(1).pdf"><i className="fa fa-file-powerpoint"></i> Diapositivas </a>
                        </div>
                        <div className="col-lg-5 text-lg-end my-image mt-lg-0 mt-4">
                            <img src="/images/logo10.png" className="img-fluid" alt="Banner" />
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default HomeComponentView;
