import React, { Children } from 'react'
import Card from '../Component/Card'
import Image from '../Component/Image'
import Text, { HeadText } from '../Component/Text'
import Wrapper from '../Component/Wrapper'

function AboutCard({ image, title, children }) {
    return (
        <Card className="aboutCard" >
            <Wrapper>
                <Image src={image} alt="Icon" className="aboutImage" />
            </Wrapper>
            <Wrapper>
                <HeadText>
                    {title}
                </HeadText>
                <Text>
                    {children}
                </Text>
            </Wrapper>
        </Card>
    )
}

export default AboutCard
