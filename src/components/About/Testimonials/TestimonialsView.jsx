import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css'

const Testimonials = () => {
    const testimonialData = [
        {
            name: "Jorge",
            role: "Ing. de Sistemas",
            quote: "Estudiante de Ingeniería de Sistemas, interesado en el desarrollo de software y la gestión de proyectos tecnológicos."
        },
        {
            name: "Jose",
            role: "Ing. de Sistemas",
            quote: "Estudiante de Ingeniería de Sistemas, apasionado por la programación y la administración de sistemas de información."
        },
        {
            name: "Carlos",
            role: "Ing. de Sistemas",
            quote: "Estudiante de Ingeniería de Sistemas, enfocado en el diseño y la implementación de soluciones tecnológicas."
        },
        {
            name: "Hans",
            role: "Ing. de Sistemas",
            quote: "Estudiante de Ingeniería de Sistemas, con un fuerte interés en el desarrollo de aplicaciones y la gestión de recursos tecnológicos."
        },
        {
            name: "Henry",
            role: "Ing. de Sistemas",
            quote: "Estudiante de Ingeniería de Sistemas, dedicado a la innovación en el desarrollo y la gestión de proyectos de software."
        },
    ];

    useEffect(() => {
        return () => {
            document.querySelector('.slick-list')?.removeAttribute('style');
        };
    }, []);

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <section className="w3l-clients" id="testimonials">
            <div className="midd-w3 py-5">
                <div className="container py-lg-5 py-md-3 AboutPageTestimonials">

                    <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4">
                        <span className="w3l-title-small">Un poco</span>
                        <h3 className="w3l-title-main">Sobre Nosotros</h3>
                    </div>

                    <div id="owl-demo1" className="owl-carousel owl-theme mt-4 pt-2 mb-5">
                        <Slider {...settings}>
                            {testimonialData.map((testimonial, index) => (
                                <div key={index}>
                                    <div className="item mx-3">
                                        <div className="testimonial-content">
                                            <div className="testimonial">
                                                <blockquote>
                                                    <q>{testimonial.quote}</q>
                                                </blockquote>
                                                <div className="testi-des">
                                                    <div className="test-img">
                                                        <img src={`/images/${testimonial.name}.jpg`} className="img-fluid" alt="client-img" />
                                                    </div>
                                                    <div className="peopl align-self">
                                                        <h3>{testimonial.name}</h3>
                                                        <p className="indentity">{testimonial.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Testimonials;
