import React from 'react'
import { ServiceItem } from './ServiceItem';

export const ServiceItems = () => {
    const services = [
        { iconClass: "fa fa-cog", title: "Modelado Dinámico", description: "Desarrollar un modelo dinámico para simular la pesquería de sardina y anchoveta en el Perú." },
        { iconClass: "fa fa-wrench", title: "Evaluación de Impactos", description: "Evaluar el impacto de la sobrepesca en las poblaciones de sardina y anchoveta." },
        { iconClass: "fa fa-bars", title: "Recomendaciones", description: "Proponer recomendaciones de gestión para mejorar la sostenibilidad de la pesca." }
    ];

    return (
        <div className="row justify-content-center">
            {services.map((service, index) => (
                <ServiceItem key={index} {...service} />
            ))}
        </div>
    );
}