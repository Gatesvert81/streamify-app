import React from 'react'
import Avatar from '../Component/Avatar'
import Card from '../Component/Card'
import Text, { HeadText } from '../Component/Text'
import Wrapper from '../Component/Wrapper'

function TestimonialCard({ image, username, children }) {
    return (
        <Card className="testimonial-card" >
            <Wrapper className="testimonial-user" >
                <Avatar src={image} alt="User" />
                <HeadText>
                    {username}
                </HeadText>
            </Wrapper>
            <Wrapper>
                <Text> {children} </Text>
            </Wrapper>
        </Card>
    )
}

export default TestimonialCard
