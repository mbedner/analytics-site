import React from 'react'
import AboutIntro from '../components/AboutIntro'
import Cta from '../components/Cta'
import Features from '../components/Features'
import Hero from '../components/Hero'

function Home() {
    return (
        <div>
            <Hero/>
            <Features />
            <AboutIntro />
            <Cta />
        </div>
    )
}

export default Home
