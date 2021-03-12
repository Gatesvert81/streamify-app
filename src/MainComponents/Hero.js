import React from 'react'
import Text, { HeadText } from '../Component/Text'
import Wrapper from '../Component/Wrapper'
import Navigation from './Navigation'

function Hero() {
    return (
        <>
        <Wrapper className="hero" >
            <Wrapper>
                <HeadText className="heroTitle" >
                    WELCOME TO DOG wALKER
                </HeadText>
                <Text className="heroText" >
                    Book here to get your dog a walker.
                </Text>
            </Wrapper>
        </Wrapper>
        </>
    )
}

export default Hero
