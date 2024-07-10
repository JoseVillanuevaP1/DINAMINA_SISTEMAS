import React from 'react'
import BannerView from '@shared/BannerView'
import ServicesListView from './ServicesList/ServicesList'
import GalleryView from '/src/components/Home/Gallery/GalleryView.jsx'

export default function ServicesView() {
    return (
        <>
            <BannerView
                backgroundImage='/images/pesca.jpg'
                title='Proyecto'
                breadcrumbs={[
                    { text: 'Inicio', link: '/' },
                    { text: 'Proyecto' }
                ]}
            />
            <ServicesListView />
            <GalleryView />
        </>
    )
}
