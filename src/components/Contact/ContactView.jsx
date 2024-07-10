import React from 'react'
import BannerView from '@shared/BannerView'
import ContactFormView from './ContactForm/ContactFormView'
import MapView from './Map/MapView'

const ContactView = () => {
    return (
        <>
            <BannerView
                backgroundImage='/images/pesca.jpg'
                title='Contactame'
                breadcrumbs={[
                    { text: 'Inicio', link: '/' },
                    { text: 'Contactame' }
                ]}
            />
            <ContactFormView />
            <MapView />
        </>
    )
}

export default ContactView
