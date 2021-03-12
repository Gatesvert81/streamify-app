import React from 'react'
import Card from '../Component/Card'
import Image from '../Component/Image'
import Text, { HeadText } from '../Component/Text'
import Wrapper from '../Component/Wrapper'

function FeatureCard({title, children, image}) {
    return (
        <Card className="feature-card" >
            <Wrapper>
                <Image src={image} alt="image" className="featureImage" />
            </Wrapper>
            <Wrapper className="feature-text" >
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

export default FeatureCard
