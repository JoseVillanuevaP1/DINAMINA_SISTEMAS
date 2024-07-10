import React from 'react';
import { ContactInfo } from './ContactInfo';
import { SocialIcons } from './SocialIcons';

const Logo = () => {
    return (
        <div className="footer-logo">
            <a className="logo" href="/">
                <i className="fab fa-github"></i> Explotación Pesquera
            </a>
        </div>
    );
}

const FooterView = () => {
    return (
        <footer className="footer text-center">
            <div className="footer py-5">
                <div className="container py-md-4 UiportfolioFooter">
                    <Logo />
                    <ContactInfo
                        phone={'+51 926 856 094'}
                        email={'2123010523@untels.edu.pe'}
                        street={'Villa el Salvador, Lima, Peru'}
                    />
                </div>
            </div>
            <div className="container py-4">
                <div className="row footer-grids">
                    <div className="col-lg-6 copyright text-lg-start text-center align-center">
                        <p className="CopyRights">&copy; 2024 Explotación Pesquera. Todos los derechos reservados <a href="#">Gracias</a>.</p>
                    </div>
                    <div className="col-lg-6 text-lg-end text-center mt-lg-0 mt-4 FooterSocial">
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterView;