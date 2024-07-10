import React from 'react';

export const ContactFormMain = () => {
    return (
        <div className="contacts12-main">
            <form action="" method="post" className="main-input">
                <div className="top-inputs d-grid">
                    <input type="text" placeholder="Nombre" name="w3lName" id="w3lName" required="" />
                    <input type="email" name="w3lSender" placeholder="Email" id="w3lSender" required="" />
                </div>
                <input type="text" placeholder="Número de Telefono" name="w3lPhone" id="w3lName2" required="" />
                <textarea placeholder="Mensaje" name="w3lMessage" id="w3lMessage" required=""></textarea>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-style">Enviar</button>
                </div>
            </form>
        </div>
    );
};