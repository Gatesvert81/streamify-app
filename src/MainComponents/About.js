import React from 'react'
import Card from '../Component/Card'
import Text, { HeadText } from '../Component/Text'
import Wrapper from '../Component/Wrapper'
import AboutCard from './AboutCard'
import client from '../Assets/client.png'
import message from '../Assets/message.png'
import payment from '../Assets/payment.png'

function About() {
    return (
        <Wrapper className="aboutWrapper" >
            <Card className="about-about" >
                <HeadText>
                    When nature calls, our dog walkers are here to answer
                </HeadText>
                <Text>
                    You cant always predict the crazy day at work, but you can anticipate your dog's needs.
                </Text>
            </Card>
            <Card className="aboutDetail" >
                <HeadText>
                    How to find a dog walker
                </HeadText>
                <Wrapper className="aboutDetailSection">
                    <AboutCard image={client} title="Search Dog Walkers">
                    Search to find dog walkers in your neighborhood 
                    </AboutCard>
                    <AboutCard image={message} title="Meet In-Person">
                    Connect with a dog walker who's a good fit for you, your dog, and your lifestyle. 
                    </AboutCard>
                    <AboutCard image={payment} title="In-app Payment">
                    All payments are processed through Rover’s secure platform. It's that easy! 
                    </AboutCard>
                    
                </Wrapper>
            </Card>
        </Wrapper>
    )
}

export default About
