import React from 'react'
import HeroAbout from '../components/HeroAbout'
import Cta from '../components/Cta'
import GoToTop from '../GotToTop'
import Mission from '../components/Mission'
import Employees from '../components/Employees'
import Footer from '../components/Footer'

function About() {
    return (
        <>
            <HeroAbout />
            <Mission />
            <Employees />
            <Cta />
            <Footer /> 
            <GoToTop />
        </>
    )
}

export default About
