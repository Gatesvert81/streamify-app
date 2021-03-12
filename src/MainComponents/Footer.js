import React from 'react'
import Wrapper from '../Component/Wrapper'
import Text, { HeadText } from '../Component/Text'
import Button from '../Component/Button'

function Footer() {
    return (
        <Wrapper className="nav" >
            <Wrapper>
                <HeadText className="appTitle" >
                    Walk My Dog
            </HeadText>
            </Wrapper>
            <Wrapper>
                <Button className="signupBtn" >
                    Sign Up
            </Button>
            </Wrapper>
        </Wrapper>
    )
}

export default Footer
