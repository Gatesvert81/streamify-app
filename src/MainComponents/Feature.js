import React from 'react'
import Wrapper from '../Component/Wrapper'
import FeatureCard from './FeatureCard'
import map from '../Assets/map.jpg'
import schedule from '../Assets/schedule.jpg'

function Feature() {
    return (
        <Wrapper>
            <FeatureCard image={map} title="Trusted Dog walkers" >
                Every dog walker on the site has been hand-reviewed and approved by the Rover team. They've also completed a general background check
            </FeatureCard>
            <FeatureCard image={schedule} title="Reservation protection" >
                It doesn't happen often, but if your dog walker has to cancel at the last minute, we’ll work with you to find a new one.
            </FeatureCard>
        </Wrapper >
    )
}

export default Feature
