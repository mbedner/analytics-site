import React from 'react'
import AboutIntro from '../components/AboutIntro'
import Cta from '../components/Cta'
import Features from '../components/Features'
import Hero from '../components/Hero'
import GoToTop from '../GotToTop'

function Home() {
    return (
        <div>
            <Hero/>
            <Features />
            <AboutIntro />
            <Cta />
            <GoToTop />
        </div>
    )
}

export default Home
