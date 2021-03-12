import React from 'react'
import Wrapper from '../Component/Wrapper'
import About from '../MainComponents/About'
import Feature from '../MainComponents/Feature'
import Hero from '../MainComponents/Hero'
import Navigation from '../MainComponents/Navigation'
import Testimonial from '../MainComponents/Testimonial'

function Homepage() {
    return (
        <Wrapper>
            <Navigation />
            <Hero />
            <About />
            <Feature />
            <Testimonial />
        </Wrapper>
    )
}

export default Homepage
