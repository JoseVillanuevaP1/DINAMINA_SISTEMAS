import React from 'react'
import BannerView from '@shared/BannerView'
import AboutSectionView from './AboutSection/AboutSectionView'
import JoinView from './Join/JoinView'
import TestimonialsView from './Testimonials/TestimonialsView'

export default function AboutView() {
    return (
        <>
            <BannerView
                backgroundImage='/images/pesca.jpg'
                title='Nosotros'
                breadcrumbs={[
                    { text: 'Inicio', link: '/' },
                    { text: 'Nosotros' }
                ]}
            />
            {/* <AboutSectionView />
            <JoinView /> */}
            <TestimonialsView />
        </>
    )
}
