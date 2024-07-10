import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';
import './TextShpere.css';

export function TextShpere() {
    const containerRef = useRef(null);
    let tagCloudInstance = null;

    useEffect(() => {
        const initializeTagCloud = () => {
            if (tagCloudInstance) {
                tagCloudInstance.destroy();
            }

            const container = containerRef.current;
            const texts = [
                'Población de Sardina y Anchoveta',
                'Capturas Flota Artesanal',
                'Aumento de Población',
                'Población Máxima',
                'Tasa de Captura',
                'Tasa de Biomasa',
                'Ingresos Totales',
                'Precio por Tonelada',
                'Utilidades',
                'Costo Total por Flota',
                'Costo por Embarcación',
                'Cambio Flota',
                'Coeficiente de Adaptación',
                'Flota Artesanal',
                'Eficiencia Pesquera'
            ];

            const options = {
                radius: calculateRadius(),
                maxSpeed: 'normal',
                initSpeed: 'normal',
                keep: true,
            };

            tagCloudInstance = new TagCloud(container, texts, options);
        };

        const calculateRadius = () => {
            const containerWidth = containerRef.current.offsetWidth;
            return Math.min(containerWidth / 2, 300);
        };

        // Inicializar TagCloud
        initializeTagCloud();

        // Reajustar TagCloud cuando cambie el tamaño de la ventana
        const handleResize = () => {
            initializeTagCloud();
        };
        window.addEventListener('resize', handleResize);

        // Limpiar el evento de escucha al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
            if (tagCloudInstance) {
                tagCloudInstance.destroy();
            }
        };
    }, []);

    return (
        <div className="text-sphere-container">
            <div className="text-sphere" ref={containerRef}></div>
        </div>
    );
}
