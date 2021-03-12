import React from 'react'
import Card from '../Component/Card'
import Wrapper from '../Component/Wrapper'
import TestimonialCard from './TestimonialCard'
import map from '../Assets/map.jpg'

function Testimonial() {
    return (
        <Wrapper>
            <TestimonialCard image={map} username="Gates" >
                This is the best pet App ever.
            </TestimonialCard>
            <TestimonialCard image={map} username="Gates" >
                This is the best pet App ever.
            </TestimonialCard>
            <TestimonialCard image={map} username="Gates" >
                This is the best pet App ever.
            </TestimonialCard>
            <TestimonialCard image={map} username="Gates" >
                This is the best pet App ever.
            </TestimonialCard>
            <TestimonialCard image={map} username="Gates" >
                This is the best pet App ever.
            </TestimonialCard>
        </Wrapper>
    )
}

export default Testimonial
